import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const roots = ["app", "components", "lib"];
const allowedExtensions = new Set([".ts", ".tsx", ".css"]);
const failures = [];
const rules = [
  { label: "em or en dash", pattern: /[\u2013\u2014]/g },
  { label: "old phone number", pattern: /623[) .-]*313[ .-]*2854/g },
  { label: "placeholder pixel", pattern: new RegExp(["YOUR", "PIXEL_ID"].join("_"), "g") },
  { label: "generic Facebook link", pattern: /facebook\.com[\"']/g },
  { label: "generic Instagram link", pattern: /instagram\.com[\"']/g },
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (allowedExtensions.has(extname(path))) {
      const content = await readFile(path, "utf8");
      for (const rule of rules) {
        const matches = [...content.matchAll(rule.pattern)];
        if (matches.length) failures.push(`${path}: ${rule.label} (${matches.length})`);
      }
    }
  }
}

for (const root of roots) await walk(root);
if (failures.length) {
  console.error("Published content check failed:\n" + failures.join("\n"));
  process.exit(1);
}
console.log("Published content check passed.");
