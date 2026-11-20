import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');
const destination = join(outputDir, 'POST.json');

async function main() {
  // Read before creating output so a missing submission fails clearly.
  let bytes;
  try {
    bytes = await readFile(source);
  } catch (error) {
    throw new Error(`Cannot read POST.json at ${source}: ${error.message}`);
  }

  // Keep the original bytes, including whitespace and the final newline.
  await mkdir(outputDir, { recursive: true });
  await writeFile(destination, bytes);

  // Verify the actual output, rather than only the source we read.
  const copiedBytes = await readFile(destination);
  const record = JSON.parse(copiedBytes.toString('utf8'));
  if (typeof record?.url !== 'string') {
    throw new Error('Copied POST.json must contain a string "url" field.');
  }
  console.log(`Copied ${copiedBytes.length} bytes; wrote URL ${record.url}`);
}

main().catch((error) => {
  console.error(`Submission failed: ${error.message}`);
  process.exitCode = 1;
});
