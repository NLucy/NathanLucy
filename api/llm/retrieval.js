import { readFile } from "node:fs/promises";
import { config } from "./config.js";
import { embedTexts } from "./openai.js";

let memoryCache;
let collectionId;
let chromaSeeded = false;

const stopwords = new Set([
  "about",
  "and",
  "are",
  "did",
  "for",
  "from",
  "has",
  "his",
  "how",
  "nathan",
  "that",
  "the",
  "this",
  "was",
  "what",
  "when",
  "where",
  "who",
  "with"
]);

const tokenize = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !stopwords.has(token));

const readMemories = async () => {
  if (!memoryCache) {
    memoryCache = JSON.parse(await readFile("content/memories.json", "utf8"));
  }

  return memoryCache;
};

const documentText = (memory) => `${memory.title}\n${memory.title}\n${memory.text}`;

const buildCorpusStats = (memories) => {
  const docs = memories.map((memory) => tokenize(documentText(memory)));
  const documentFrequency = new Map();

  for (const tokens of docs) {
    for (const token of new Set(tokens)) {
      documentFrequency.set(token, (documentFrequency.get(token) || 0) + 1);
    }
  }

  const averageLength = docs.reduce((total, tokens) => total + tokens.length, 0) / Math.max(docs.length, 1);
  return { docs, documentFrequency, averageLength };
};

const bm25Search = (question, memories, limit) => {
  const queryTokens = tokenize(question);
  const { docs, documentFrequency, averageLength } = buildCorpusStats(memories);
  const k1 = 1.2;
  const b = 0.75;
  const totalDocs = memories.length;

  return memories
    .map((memory, index) => {
      const tokens = docs[index];
      const termFrequency = new Map();
      for (const token of tokens) termFrequency.set(token, (termFrequency.get(token) || 0) + 1);

      const score = queryTokens.reduce((total, token) => {
        const frequency = termFrequency.get(token) || 0;
        if (!frequency) return total;

        const docsWithTerm = documentFrequency.get(token) || 0;
        const idf = Math.log(1 + (totalDocs - docsWithTerm + 0.5) / (docsWithTerm + 0.5));
        const denominator = frequency + k1 * (1 - b + b * (tokens.length / averageLength));
        return total + idf * ((frequency * (k1 + 1)) / denominator);
      }, 0);

      return { ...memory, bm25Score: score, source: "bm25" };
    })
    .sort((a, b) => b.bm25Score - a.bm25Score)
    .slice(0, limit);
};

const chroma = async (path, body) => {
  if (!config.chromaUrl) return null;

  const response = await fetch(`${config.chromaUrl}/api/v1${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Chroma request failed: ${response.status}`);
  }

  return response.json();
};

const getCollectionId = async () => {
  if (collectionId) return collectionId;

  const collection = await chroma("/collections", {
    name: config.chromaCollection,
    get_or_create: true
  });

  collectionId = collection.id;
  return collectionId;
};

const seedChroma = async (memories) => {
  if (!config.chromaUrl || chromaSeeded) return;

  const id = await getCollectionId();
  const documents = memories.map(documentText);
  const embeddings = await embedTexts(documents);

  await chroma(`/collections/${id}/upsert`, {
    ids: memories.map((memory) => memory.id),
    documents,
    embeddings,
    metadatas: memories.map((memory) => ({ title: memory.title }))
  });

  chromaSeeded = true;
};

const vectorSearch = async (question, memories, limit) => {
  if (!config.chromaUrl) return [];

  await seedChroma(memories);

  const id = await getCollectionId();
  const [queryEmbedding] = await embedTexts(question);
  const result = await chroma(`/collections/${id}/query`, {
    query_embeddings: [queryEmbedding],
    n_results: limit
  });

  const ids = result.ids?.[0] || [];
  const distances = result.distances?.[0] || [];
  const byId = new Map(memories.map((memory) => [memory.id, memory]));

  return ids
    .map((memoryId, index) => {
      const memory = byId.get(memoryId);
      return memory ? { ...memory, vectorScore: 1 / (1 + (distances[index] || 0)), source: "chroma" } : null;
    })
    .filter(Boolean);
};

const normalizeScores = (matches, key) => {
  const max = Math.max(...matches.map((match) => match[key] || 0), 0);
  if (!max) return new Map();

  return new Map(matches.map((match) => [match.id, (match[key] || 0) / max]));
};

const hybridMerge = ({ bm25Matches, vectorMatches, memories, limit }) => {
  const bm25Scores = normalizeScores(bm25Matches, "bm25Score");
  const vectorScores = normalizeScores(vectorMatches, "vectorScore");
  const byId = new Map(memories.map((memory) => [memory.id, memory]));
  const ids = new Set([...bm25Scores.keys(), ...vectorScores.keys()]);

  return [...ids]
    .map((id) => {
      const memory = byId.get(id);
      const bm25Score = bm25Scores.get(id) || 0;
      const vectorScore = vectorScores.get(id) || 0;

      return {
        ...memory,
        source: vectorScore ? "hybrid" : "bm25",
        score: bm25Score * 0.45 + vectorScore * 0.55,
        bm25Score,
        vectorScore
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
};

export const searchMemories = async ({ query, limit = config.retrievalLimit }) => {
  const memories = await readMemories();
  const bm25Matches = bm25Search(query, memories, limit * 2);

  try {
    const vectorMatches = await vectorSearch(query, memories, limit * 2);
    const matches = hybridMerge({ bm25Matches, vectorMatches, memories, limit });
    return {
      mode: vectorMatches.length ? "hybrid_chroma_bm25" : "bm25",
      matches
    };
  } catch (error) {
    console.warn("Vector retrieval failed; using BM25 only.", error.message);
    return {
      mode: "bm25_fallback",
      matches: bm25Matches.slice(0, limit)
    };
  }
};
