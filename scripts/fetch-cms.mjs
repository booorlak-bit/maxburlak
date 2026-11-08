/**
 * Build-time CMS snapshot.
 *
 * Fetches every Sanity document the site renders and writes it to
 * src/generated/cms-snapshot.json. The app imports that file instead of
 * calling Sanity from the browser, so:
 *   - the read token never ships in the client bundle,
 *   - @sanity/client is not part of the client JS,
 *   - prerendered HTML and the client render use identical data.
 *
 * Content changes in Sanity go live on the next deploy (connect a Sanity
 * webhook to a Vercel deploy hook to make that automatic).
 */
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  allCaseStudiesQuery,
  feedPostsQuery,
  homePageQuery,
  playgroundPageQuery,
  siteSettingsQuery,
  worksPageQuery,
} from "../src/sanity/queries.ts";

if (existsSync(".env")) process.loadEnvFile(".env");

const PROJECT_ID = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || "1r0eu2jx";
const DATASET = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
const API_VERSION = process.env.SANITY_API_VERSION || process.env.VITE_SANITY_API_VERSION || "2024-01-01";
// Prefer the server-only name; the VITE_ name is still read for older env setups.
const TOKEN = process.env.SANITY_API_READ_TOKEN || process.env.VITE_SANITY_API_READ_TOKEN || "";

const OUT_FILE = path.join("src", "generated", "cms-snapshot.json");

const EMPTY = {
  siteSettings: null,
  homePage: null,
  worksPage: null,
  caseStudies: [],
  feedPosts: [],
  playgroundPage: null,
};

async function query(groq) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?perspective=published&query=${encodeURIComponent(groq)}`;
  const res = await fetch(url, TOKEN ? { headers: { Authorization: `Bearer ${TOKEN}` } } : {});
  if (!res.ok) throw new Error(`Sanity ${res.status} ${res.statusText}`);
  const json = await res.json();
  return json.result ?? null;
}

async function main() {
  let payload;
  try {
    const [siteSettings, homePage, worksPage, caseStudies, feedPosts, playgroundPage] = await Promise.all([
      query(siteSettingsQuery),
      query(homePageQuery),
      query(worksPageQuery),
      query(allCaseStudiesQuery),
      query(feedPostsQuery),
      query(playgroundPageQuery),
    ]);
    payload = {
      siteSettings,
      homePage,
      worksPage,
      caseStudies: caseStudies ?? [],
      feedPosts: feedPosts ?? [],
      playgroundPage,
    };
    console.log(
      `[cms] Snapshot: ${payload.caseStudies.length} case studies, ${payload.feedPosts.length} feed posts.`,
    );
  } catch (error) {
    // Keep the last good snapshot rather than shipping an empty site.
    if (existsSync(OUT_FILE)) {
      console.warn(`[cms] Fetch failed (${error.message}); keeping existing snapshot.`);
      JSON.parse(await readFile(OUT_FILE, "utf8"));
      return;
    }
    console.warn(`[cms] Fetch failed (${error.message}); writing empty snapshot (local fallbacks).`);
    payload = EMPTY;
  }

  await mkdir(path.dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, `${JSON.stringify(payload)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
