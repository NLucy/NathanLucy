import { readFile } from "node:fs/promises";

let promptCache;

export class Message {
  constructor(role, content) {
    this.role = role;
    this.content = content;
  }

  toDict() {
    return {
      role: this.role,
      content: this.content
    };
  }
}

export class SystemMessage extends Message {
  constructor(content) {
    super("system", content);
  }
}

export class UserMessage extends Message {
  constructor(content) {
    super("user", content);
  }
}

export const loadSystemPrompt = async () => {
  if (!promptCache) {
    promptCache = await readFile("api/llm/prompts/interview.txt", "utf8");
  }

  return promptCache;
};

export const formatMemoryContext = (memories) =>
  memories
    .map((memory, index) => [
      `Memory ${index + 1}: ${memory.title}`,
      `ID: ${memory.id}`,
      memory.text
    ].join("\n"))
    .join("\n\n");

export const buildUserPrompt = ({ question, memories }) => [
  "Use the context below to answer the user's question in first person.",
  "",
  "Context:",
  formatMemoryContext(memories),
  "",
  "Question:",
  question
].join("\n");

export const buildInterviewMessages = async ({ question, memories }) => [
  new SystemMessage(await loadSystemPrompt()).toDict(),
  new UserMessage(buildUserPrompt({ question, memories })).toDict()
];
