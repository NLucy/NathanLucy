# Nathan Lucy

Clean resume site for Vercel, with a serverless "Let's talk" AI stand-in.

## Local setup

```bash
npm install
npm run dev
```

## Content

- `content/profile.json` drives the visible resume site.
- `content/memories.json` feeds the "Let's talk" assistant.
- `api/ask.js` answers questions using retrieved memory chunks.
- `api/llm/messages.js` defines the interview message shape.
- `api/llm/prompts/interview.txt` defines the first-person voice and grounding rules.
- `api/llm/tools.js` registers the `search_memories` tool.
- `api/llm/retrieval.js` runs BM25 locally and hybrid BM25 + ChromaDB when `CHROMA_URL` is configured.

## Environment

Set these in Vercel:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` optional, defaults to `gpt-5`
- `OPENAI_EMBEDDING_MODEL` optional, defaults to `text-embedding-3-small`
- `CHROMA_URL` optional, enables ChromaDB retrieval when available
- `CHROMA_COLLECTION` optional, defaults to `nathan_lucy_memories`
- `RETRIEVAL_LIMIT` optional, defaults to `6`

If `CHROMA_URL` is not configured or Chroma is down, the assistant falls back to local keyword retrieval over `content/memories.json`.

For local testing, put private values in `.env.local`. It is gitignored.
