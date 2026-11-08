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

// GROQ returns null for references to unpublished or deleted documents
// (e.g. `featuredProjects[]->`). Drop those so the renderer never sees them.
function dropNullItems(value) {
  if (Array.isArray(value)) return value.filter((item) => item != null).map(dropNullItems);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, dropNullItems(item)]));
  }
  return value;
}

async function keepExisting(reason) {
  if (existsSync(OUT_FILE)) {
    console.warn(`[cms] ${reason}; keeping the committed snapshot.`);
    JSON.parse(await readFile(OUT_FILE, "utf8"));
    return true;
  }
  return false;
}

async function main() {
  // Without a token a private dataset answers 200 with empty results, which
  // would silently ship a site without CMS content. Use the committed snapshot.
  if (!TOKEN && (await keepExisting("No SANITY_API_READ_TOKEN in this environment"))) return;

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
    payload = dropNullItems({
      siteSettings,
      homePage,
      worksPage,
      caseStudies: caseStudies ?? [],
      feedPosts: feedPosts ?? [],
      playgroundPage,
    });
    if (payload.caseStudies.length === 0 || !payload.siteSettings) {
      throw new Error("Sanity returned no case studies or site settings (token without read access?)");
    }
    console.log(
      `[cms] Snapshot: ${payload.caseStudies.length} case studies, ${payload.feedPosts.length} feed posts.`,
    );
  } catch (error) {
    // Keep the last good snapshot rather than shipping an empty site.
    if (await keepExisting(`Fetch failed (${error.message})`)) return;
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
