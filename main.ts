import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const ENTRY =
  "I taught my dog to fetch my phone, and now he brings it to me every time my ex texts — even he knows I shouldn't answer.";

if ([...ENTRY].length > MAX_CHARS) {
  throw new Error(`entry is ${[...ENTRY].length} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${[...ENTRY].length} chars)`);
