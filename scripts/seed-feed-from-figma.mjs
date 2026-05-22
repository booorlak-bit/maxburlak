/**
 * Seed feed posts from Figma frame 2144:6284 (maxburlak.com design file).
 * Run: npx sanity exec scripts/seed-feed-from-figma.mjs --with-user-token
 */
import { getCliClient } from "sanity/cli";

const FIGMA_IMAGES = {
  multiplierModel:
    "https://www.figma.com/api/mcp/asset/88170234-efeb-4c5b-a950-3bc17737d38d",
  nycStreet: "https://www.figma.com/api/mcp/asset/4aaa0bf9-7b4b-483e-8c3b-60dacc7e29a6",
  designBooks: "https://www.figma.com/api/mcp/asset/9bb57672-efdf-4ce8-a336-b8938b9de872",
};

const client = getCliClient({ apiVersion: "2024-01-01" });

function blockKey() {
  return Math.random().toString(36).slice(2, 12);
}

function textBlock(text, { listItem } = {}) {
  const block = {
    _type: "block",
    _key: blockKey(),
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: blockKey(),
        text,
        marks: [],
      },
    ],
  };
  if (listItem) {
    block.listItem = listItem;
    block.level = 1;
  }
  return block;
}

function paragraphs(lines) {
  return lines.filter((line) => line?.trim()).map((line) => textBlock(line));
}

async function uploadImage(url, filename) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to download ${url}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get("content-type") ?? "image/png";
  return client.assets.upload("image", buffer, { filename, contentType });
}

function imageBlock(asset, alt) {
  return {
    _type: "feedImageBlock",
    _key: blockKey(),
    image: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    },
    alt,
    allowFullscreen: true,
    static: false,
  };
}

const DESIGN_PROCESS_BODY = [
  "AI didn't kill design jobs. It killed the old way of doing them.",
  "I've been a product designer for 13 years. Three years ago, I could tell you exactly how I worked: Double Diamond, user research sprints, polished decks, weeks of iteration before showing anything.",
  "That playbook is now obsolete.",
  "Between 2024 and 2026, three things happened fast:",
  "AI made execution cheap. \"Can you design a dashboard?\" stopped being a differentiating question. Tools like v0, Figma AI, and Claude generate functional interfaces in minutes. The craft of production — wireframes, copy variations, component specs — became table stakes.",
  "Design systems made consistency easy. Most mid-to-large companies already have systems. \"Making things look cohesive\" is encoded in Figma libraries and tokens. It still requires judgment, but the infrastructure exists.",
  "The job changed without the title changing. My day-to-day shifted from Figma time to roadmap planning, dependency mapping, and justifying investment. My title stayed \"designer\" while my work became something else entirely.",
];

const BOOKS_LIST = [
  "\"The Design of Everyday Things\" — Don Norman. Still the foundation. AI changes tools, not human cognition.",
  "\"Thinking in Systems\" — Donella Meadows. AI is a system. Learn to see systems.",
  "\"The Inmates Are Running the Asylum\" — Alan Cooper. Why engineers shouldn't design alone. Still true with AI.",
  "\"Inspired\" — Marty Cagan. Product thinking > pixel pushing. More relevant than ever.",
  "\"Sprint\" — Jake Knapp. Compress cycles. AI makes this 10x faster now.",
  "\"Articulating Design Decisions\" — Tom Greever. AI can't do stakeholder alignment. You still can.",
  "\"Don't Make Me Think\" — Steve Krug. Simplicity wins. AI makes complexity easier to create — resist it.",
  "\"The Mom Test\" — Rob Fitzpatrick. How to talk to users without lying to yourself. AI can't do this for you.",
  "\"Refactoring UI\" — Adam Wathan & Steve Schoger. Practical craft. Ship better, faster.",
  "\"Co-Intelligence\" — Ethan Mollick. The only book written FOR the AI era. Required reading.",
];

const POSTS = [
  {
    _id: "feedPost.design-process-dead",
    title: "The Design Process You Learned Is Dead. Here's What Replaced It.",
    slug: "design-process-you-learned-is-dead",
    publishedAt: "2026-05-18T10:00:00.000Z",
    tags: ["thoughts", "process", "ai", "product management"],
    previewBlockCount: 4,
    imageKey: "multiplierModel",
    imageAlt: "Multiplier Model — diagnosis, strategy, execution, and shipping phases",
    contentExtra: DESIGN_PROCESS_BODY,
  },
  {
    _id: "feedPost.chilling-big-apple",
    title: "Chilling in Big Apple, let's connect",
    slug: "chilling-in-big-apple",
    publishedAt: "2026-05-20T14:00:00.000Z",
    tags: [],
    previewBlockCount: 2,
    imageKey: "nycStreet",
    imageAlt: "Park Avenue, New York City",
    contentExtra: [
      "Will be there next two months. Who is on side — let's meet and network.",
    ],
  },
  {
    _id: "feedPost.design-books-2026",
    title: "10 books every product designer should read in 2026",
    slug: "10-books-product-designer-2026",
    publishedAt: "2026-05-22T09:00:00.000Z",
    tags: ["ProductDesign", "AI", "DesignBooks", "UX", "designeducation", "education"],
    previewBlockCount: 4,
    imageKey: "designBooks",
    imageAlt: "Design books on a table",
    intro: "10 books every product designer should read in 2026:",
    numberedItems: BOOKS_LIST,
    outro: [
      "The books didn't change. How you apply them did.",
      "What's on your list?",
    ],
  },
];

async function main() {
  console.log("Uploading Figma images…");
  const assets = {};
  for (const [key, url] of Object.entries(FIGMA_IMAGES)) {
    assets[key] = await uploadImage(url, `${key}.png`);
    console.log(`  ✓ ${key} → ${assets[key]._id}`);
  }

  console.log("Creating feed posts…");
  for (const post of POSTS) {
    const asset = assets[post.imageKey];
    let content;
    let seoDescription;

    if (post.numberedItems) {
      content = [
        imageBlock(asset, post.imageAlt),
        textBlock(post.intro),
        ...post.numberedItems.map((item) => textBlock(item, { listItem: "number" })),
        ...paragraphs(post.outro),
      ];
      seoDescription = post.intro;
    } else {
      content = [imageBlock(asset, post.imageAlt), ...paragraphs(post.contentExtra)];
      seoDescription = post.contentExtra[0];
    }

    const doc = {
      _id: post._id,
      _type: "feedPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      publishedAt: post.publishedAt,
      status: "published",
      tags: post.tags,
      layout: "default",
      previewBlockCount: post.previewBlockCount,
      content,
      seo: {
        title: post.title,
        description: seoDescription,
      },
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${post.slug}`);
  }

  console.log("Done. Open /feed or https://maxburlak.sanity.studio");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
