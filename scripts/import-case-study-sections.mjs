import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createClient } from "@sanity/client";

const envText = await readFile(".env", "utf8").catch(() => "");
const env = Object.fromEntries(
  envText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .map((line) => {
      const [key, ...value] = line.split("=");
      return [key, value.join("=")];
    }),
);

const projectId = env.SANITY_STUDIO_PROJECT_ID || env.VITE_SANITY_PROJECT_ID;
const dataset = env.SANITY_STUDIO_DATASET || env.VITE_SANITY_DATASET || "production";
const token = env.SANITY_AUTH_TOKEN || env.VITE_SANITY_API_READ_TOKEN;

if (!projectId || !token) {
  throw new Error("Missing Sanity project ID or token in .env");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

function extractCaseStudyPages(source) {
  const start = source.indexOf("const CASE_STUDY_PAGES");
  if (start === -1) throw new Error("CASE_STUDY_PAGES not found");

  const objectStart = source.indexOf("{", start);
  let depth = 0;
  let inString = false;
  let stringQuote = "";
  let escaping = false;

  for (let index = objectStart; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaping) {
        escaping = false;
      } else if (char === "\\") {
        escaping = true;
      } else if (char === stringQuote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      stringQuote = char;
      continue;
    }

    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    if (depth === 0) {
      return source.slice(objectStart, index + 1);
    }
  }

  throw new Error("Could not parse CASE_STUDY_PAGES object");
}

function keyFrom(value, fallback) {
  const slug = String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
  return slug || fallback;
}

function blockFromText(text, key) {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${key}-span`,
        text,
        marks: [],
      },
    ],
  };
}

function mapNav(nav = []) {
  return nav.map((item, index) => ({
    _type: "caseStudyNavItem",
    _key: keyFrom(item.id, `nav-${index}`),
    id: item.id,
    label: item.label,
  }));
}

function mapSection(section, index) {
  return {
    _type: "caseStudySection",
    _key: keyFrom(section.id, `section-${index}`),
    id: section.id,
    title: section.title,
    paragraphs: section.paragraphs?.map((paragraph, paragraphIndex) =>
      blockFromText(paragraph, `${keyFrom(section.id, `section-${index}`)}-p-${paragraphIndex}`),
    ),
    table: section.table?.map((row, rowIndex) => ({
      _type: "caseStudyTableRow",
      _key: keyFrom(row.key || row.title, `row-${rowIndex}`),
      title: row.title,
      description: row.description,
    })),
    phases: section.phases?.map((phase, phaseIndex) => ({
      _type: "caseStudyPhase",
      _key: keyFrom(`${phase.phase}-${phase.title}`, `phase-${phaseIndex}`),
      phase: phase.phase,
      title: phase.title,
      description: phase.description,
    })),
    features: section.features?.map((feature, featureIndex) => ({
      _type: "caseStudyFeature",
      _key: keyFrom(feature.title, `feature-${featureIndex}`),
      title: feature.title,
      body: feature.body,
    })),
    metrics: section.metrics?.map((metric, metricIndex) => ({
      _type: "caseStudyResultMetric",
      _key: keyFrom(`${metric.value}-${metric.label}`, `metric-${metricIndex}`),
      value: metric.value,
      label: metric.label,
      detail: metric.detail,
    })),
    numberedList: section.numberedList,
  };
}

function fallbackPage(doc) {
  const metrics =
    doc.metrics?.length > 0
      ? doc.metrics.map((metric) => ({
          value: metric.value,
          label: metric.label?.replace(/→/g, " to "),
          detail: "",
        }))
      : [{ value: "-", label: "In progress", detail: "Detailed outcomes for this project are being documented." }];

  return {
    slug: doc.slug?.current,
    pageTitle: doc.pageTitle || doc.headline || doc.title,
    lede: doc.lede || doc.summary || doc.description,
    published: doc.publishedLabel || doc.years,
    meta: {
      role: doc.role || "",
      timeline: doc.years || "",
      team: doc.tags?.join(", ") || "",
      stage: doc.tags?.[0] || "-",
    },
    nav: [
      { id: "overview", label: "Overview" },
      { id: "outcomes", label: "Outcomes" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [doc.description || doc.summary || ""].filter(Boolean),
      },
      {
        id: "outcomes",
        title: "Outcomes",
        metrics,
      },
    ],
  };
}

const source = await readFile("src/content/caseStudyContent.ts", "utf8");
const pages = Function(`"use strict"; return (${extractCaseStudyPages(source)});`)();
const docs = await client.fetch(
  `*[_type == "caseStudy"] | order(sortOrder asc){
    _id,
    _type,
    title,
    slug,
    client,
    role,
    years,
    pageTitle,
    metaLine,
    headline,
    summary,
    description,
    logoKey,
    tags,
    engagementCategories,
    tradeoffs,
    metrics,
    heroImage,
    coverImage,
    status,
    sortOrder,
    showCaseStudyPage,
    lede,
    publishedLabel,
    visitUrl,
    visitLabel,
    teamMeta,
    stageMeta,
    nav,
    sections
  }`,
);

const replacements = docs.map((doc) => {
  const slug = doc.slug?.current;
  const page = pages[slug] || fallbackPage(doc);

  return {
    ...doc,
    pageTitle: page.pageTitle,
    lede: page.lede,
    publishedLabel: page.published,
    visitUrl: page.visitUrl,
    visitLabel: page.visitLabel,
    role: page.meta?.role || doc.role,
    years: page.meta?.timeline || doc.years,
    teamMeta: page.meta?.team,
    stageMeta: page.meta?.stage,
    nav: mapNav(page.nav),
    sections: page.sections.map(mapSection),
  };
});

const dir = await mkdtemp(path.join(tmpdir(), "maxburlak-case-sections-"));
const file = path.join(dir, "case-studies.json");
await writeFile(file, JSON.stringify(replacements, null, 2));

const result = spawnSync(
  "npm",
  ["exec", "sanity", "--", "documents", "create", file, "--replace"],
  { stdio: "inherit" },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

for (const doc of replacements) {
  console.log(`Updated ${doc._id}: ${doc.sections.length} section(s)`);
}
