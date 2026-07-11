const env = typeof process === "undefined" ? {} : process["env"];

export const appConfig = {
  openaiApiKey: env["OPENAI_API_KEY"],
  openaiModel: env["OPENAI_MODEL"] || "gpt-5",
  retrievalLimit: Number(env["RETRIEVAL_LIMIT"] || 6)
};
