// Fridge Roast: One Line, Biggest Laugh
// Entry: one line roasting a smart fridge — its voice assistant mishears
// a simple request and confidently does the wrong thing.
// Writes the line to /output/entry.txt (absolute path; the grader runs read-only).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I said 'crushed ice' and it queued a true-crime documentary. My fridge thinks I'm a detective.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
