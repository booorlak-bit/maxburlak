#!/usr/bin/env node
import { existsSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const runnerDir = path.resolve(__dirname, "../.cache/sharp-runner");
const sharpPkg = path.join(runnerDir, "node_modules/sharp/package.json");

if (existsSync(sharpPkg)) {
  process.exit(0);
}

mkdirSync(runnerDir, { recursive: true });
console.log("Installing sharp into .cache/sharp-runner (one-time)…");
execSync("npm init -y && npm install sharp@0.34.2 --no-audit --no-fund", {
  cwd: runnerDir,
  stdio: "inherit",
});
