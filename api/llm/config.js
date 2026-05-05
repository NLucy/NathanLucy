export const config = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  openaiModel: process.env.OPENAI_MODEL || "gpt-5",
  embeddingModel: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small",
  chromaUrl: process.env.CHROMA_URL?.replace(/\/$/, ""),
  chromaCollection: process.env.CHROMA_COLLECTION || "nathan_lucy_memories",
  retrievalLimit: Number(process.env.RETRIEVAL_LIMIT || 6)
};
