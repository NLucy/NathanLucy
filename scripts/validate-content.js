import { readFile } from "node:fs/promises";

const files = ["content/profile.json", "content/memories.json"];

for (const file of files) {
  JSON.parse(await readFile(file, "utf8"));
  console.log(`valid ${file}`);
}
