import { config } from "./llm/config.js";
import { createResponse } from "./llm/openai.js";
import { buildInterviewMessages } from "./llm/messages.js";
import { runTool } from "./llm/tools.js";

const json = (response, status, body) => response.status(status).json(body);

const answerQuestion = async ({ question, memories }) => {
  const messages = await buildInterviewMessages({ question, memories });

  return createResponse({ messages });
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { error: "Method not allowed" });
  }

  const question = String(request.body?.question || "").trim();

  if (!question) {
    return json(response, 400, { error: "Question is required" });
  }

  if (!config.openaiApiKey) {
    return json(response, 500, { error: "OPENAI_API_KEY is not configured" });
  }

  try {
    const retrieval = await runTool("search_memories", { query: question });
    const answer = await answerQuestion({ question, memories: retrieval.matches });

    return json(response, 200, {
      answer,
      retrieval: retrieval.mode,
      model: config.openaiModel,
      tools: ["search_memories"],
      memories: retrieval.matches.map((match) => ({
        id: match.id,
        title: match.title,
        source: match.source,
        score: Number(match.score || match.bm25Score || 0).toFixed(3)
      }))
    });
  } catch (error) {
    console.error(error);
    return json(response, 500, { error: "Interview assistant failed" });
  }
}
