import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const botDirectory = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDirectory, "POST.json");
const destination = join(outputDirectory, "POST.json");

async function main() {
  // Keep the source as bytes so the hand-in is copied exactly.
  let bytes;
  try {
    bytes = await readFile(source);
  } catch (error) {
    console.error(`Cannot read POST.json at ${source}:`, error);
    process.exitCode = 1;
    return;
  }

  // A fresh runner may not have created its output directory yet.
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(destination, bytes);

  // Validate the file the runner will actually receive.
  const copied = await readFile(destination);
  const post = JSON.parse(copied.toString("utf8"));
  if (post === null || typeof post !== "object" || typeof post.url !== "string") {
    throw new Error("Copied POST.json must contain a string url field.");
  }
  console.log(`Copied ${copied.length} bytes; wrote URL ${post.url}`);
}

// Report failures to the runner rather than silently submitting nothing.
main().catch((error) => {
  console.error("POST.json hand-in failed:", error);
  process.exitCode = 1;
});
