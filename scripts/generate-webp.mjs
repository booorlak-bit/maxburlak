#!/usr/bin/env node
/**
 * Generates .webp siblings for PNGs in src/assets (used by Vite asset resolver).
 * Run before `vite build` to cut transfer size (~60–80% smaller than PNG).
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function loadSharp() {
  try {
    return (await import("sharp")).default;
  } catch {
    const fallback = path.resolve(
      __dirname,
      "../.cache/sharp-runner/node_modules/sharp/lib/index.js",
    );
    return (await import(pathToFileURL(fallback).href)).default;
  }
}

const sharp = await loadSharp();
const assetsDir = path.resolve(__dirname, "../src/assets");

const MAX_WIDTH = 1080;
const WEBP_QUALITY = 74;

async function main() {
  const entries = await readdir(assetsDir);
  const pngs = entries.filter((name) => name.endsWith(".png"));
  let converted = 0;

  for (const name of pngs) {
    const pngPath = path.join(assetsDir, name);
    const webpPath = path.join(assetsDir, name.replace(/\.png$/i, ".webp"));
    const pngStat = await stat(pngPath);
    const webpStat = await stat(webpPath).catch(() => null);

    if (webpStat && webpStat.mtimeMs >= pngStat.mtimeMs) {
      continue;
    }

    const image = sharp(pngPath);
    const meta = await image.metadata();
    const pipeline =
      meta.width && meta.width > MAX_WIDTH
        ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
        : image;

    await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(webpPath);
    converted += 1;
    const after = await stat(webpPath);
    console.log(
      `${name}: ${(pngStat.size / 1024).toFixed(0)}KB → webp ${(after.size / 1024).toFixed(0)}KB`,
    );
  }

  console.log(`Done. ${converted} webp file(s) written/updated.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
