import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const caseStudies = [
  {
    id: "default",
    company: "Default.com",
    title: "Revenue operations platform for GTM teams",
    showcaseTitle: "Revenue operations platform",
    showcaseSummary:
      "Led design through platform iterations, built scalable design system foundations, and shaped GTM workflows used by revenue teams.",
    role: "Design Lead",
    years: "2023-2026",
    tags: ["Revenue Ops", "Design Systems", "B2B SaaS"],
    description:
      "Led design through multiple platform iterations, built foundations for scalable design systems, and shaped product workflows used by revenue teams. Navigated 3 major scope changes and shipped without dedicated research.",
    metrics: [
      { label: "Trial->Paid", value: "+34%" },
      { label: "Dev Velocity", value: "1.8x" },
      { label: "ARR Impact", value: "$2.5M" },
    ],
    categories: ["full-time", "case-studies"],
    logoKey: "default",
    sortOrder: 10,
  },
  {
    id: "apollo",
    company: "Apollo.io",
    title: "Design system unification at scale",
    showcaseTitle: "Design system unification",
    showcaseSummary:
      "Standardized platform and brand systems across squads, closing the gap between design language and implementation.",
    role: "Design System Lead",
    years: "2021-2023",
    tags: ["Design Systems", "Platform", "Cross-team"],
    description:
      "Standardized platform and brand systems across 5 squads with zero initial documentation. Closed the gap between design language and implementation, established token foundations and cross-team consistency.",
    metrics: [
      { label: "Time-to-Value", value: "-35%" },
      { label: "Alignment", value: "92%" },
      { label: "Team Growth", value: "3x" },
    ],
    categories: ["full-time", "case-studies"],
    logoKey: "apollo",
    sortOrder: 20,
  },
  {
    id: "p2p",
    company: "P2P.org",
    title: "Crypto banking from zero to launch",
    showcaseTitle: "Crypto banking launch",
    showcaseSummary:
      "Founding designer building a crypto bank on Solana from scratch - new market, no playbook, multiple hats.",
    role: "Founding Designer",
    years: "2020-2021",
    tags: ["0->1", "Crypto", "Founding Designer"],
    description:
      "Founding product designer creating a crypto bank on Solana network from scratch. Wore 5 hats (design, PM support, QA, UX research) in a new market with no playbook. Won 2nd place at hackathon.",
    metrics: [
      { label: "TVL Month 1", value: "$1M+" },
      { label: "Hackathon", value: "2nd Place" },
      { label: "Time to Launch", value: "4 months" },
    ],
    categories: ["full-time", "case-studies"],
    logoKey: "p2p",
    sortOrder: 30,
  },
  {
    id: "kinescope",
    company: "Kinescope",
    title: "Video hosting platform redesign",
    showcaseTitle: "Video hosting platform redesign",
    showcaseSummary:
      "Senior product design on a video hosting platform - improving upload, playback, and admin workflows.",
    role: "Senior Product Designer",
    years: "2018-2020",
    tags: ["B2B SaaS", "Video", "Platform"],
    description:
      "Led redesign of core video hosting experiences: upload flows, player customization, and analytics dashboards for enterprise customers.",
    metrics: [],
    categories: ["full-time"],
    logoKey: "kinescope",
    sortOrder: 40,
  },
  {
    id: "round-2",
    company: "Round 2 App",
    title: "Sneaker marketplace mobile app",
    showcaseTitle: "Sneaker marketplace mobile app",
    showcaseSummary:
      "Lead UX/UI for a mobile marketplace connecting sneaker buyers and sellers.",
    role: "Lead UX/UI Designer",
    years: "2018",
    tags: ["Mobile", "Marketplace", "Consumer"],
    description:
      "Designed end-to-end mobile experience for listing, discovery, and checkout in a peer-to-peer sneaker marketplace.",
    metrics: [],
    categories: ["contract"],
    sortOrder: 50,
  },
  {
    id: "mid-tv",
    company: "MID.TV",
    title: "Media streaming platform",
    showcaseTitle: "Media streaming platform",
    showcaseSummary:
      "Product design for a media streaming product - content discovery and viewing experience.",
    role: "Product Designer",
    years: "2017-2018",
    tags: ["Streaming", "Media", "Consumer"],
    description:
      "Shaped content browsing, playback, and subscription flows for an early-stage streaming platform.",
    metrics: [],
    categories: ["contract"],
    sortOrder: 60,
  },
  {
    id: "rentor",
    company: "Rentor",
    title: "Real estate rental platform",
    showcaseTitle: "Real estate rental platform",
    showcaseSummary:
      "Senior lead design on a rental platform connecting landlords and tenants.",
    role: "Senior Lead Designer",
    years: "2015-2017",
    tags: ["Real Estate", "Marketplace", "B2C"],
    description:
      "Led design for listing creation, search, and rental agreement flows on a real-estate rental marketplace.",
    metrics: [],
    categories: ["full-time"],
    sortOrder: 70,
  },
];

function ref(_ref) {
  return { _type: "reference", _ref };
}

function metric({ label, value }, index) {
  return { _key: `metric-${index}`, _type: "metric", label, value };
}

function caseStudyDoc(project) {
  return {
    _id: `caseStudy.${project.id}`,
    _type: "caseStudy",
    title: project.company,
    slug: { _type: "slug", current: project.id },
    client: project.company,
    role: project.role,
    years: project.years,
    pageTitle: project.title,
    metaLine: `${project.company} · ${project.tags.join(" · ")} · ${project.years}`,
    headline: project.showcaseTitle,
    summary: project.showcaseSummary,
    description: project.description,
    logoKey: project.logoKey,
    tags: project.tags,
    engagementCategories: project.categories,
    metrics: project.metrics.map(metric),
    status: "published",
    sortOrder: project.sortOrder,
    showCaseStudyPage: true,
    lede: project.showcaseSummary,
    publishedLabel: project.years,
    teamMeta: project.tags.join(", "),
    stageMeta: project.tags[0],
  };
}

const caseStudyRefs = caseStudies.map((project) => ref(`caseStudy.${project.id}`));

const docs = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Max Burlak",
    tagline: "AI-driven product designer for founders",
    contactEmail: "hey@maxburlak.com",
    bookCallUrl: "https://cal.com/maxburlak/oppchat",
    linkedinUrl: "https://www.linkedin.com/in/maxburlak/",
    dribbbleUrl: "https://dribbble.com/maxburlak",
    location: "Currently in Barcelona, Spain",
    heroBadge: "3x times Founding Designer",
    heroTitle:
      "Max, AI-driven product designer who helps founders to design experience, build systems and foundations.",
    heroSubtitle:
      "Helped to gain ARR from 0 to 2,5M+ in less then a year for various startups and to prepare for multiple funding rounds for different companies with total amount around $ 150M",
    trustedByLabel: "Trusted by many companies for over a decade",
    venturesSidebarLabel: "Ventures",
  },
  {
    _id: "homePage",
    _type: "homePage",
    title: "Homepage",
    sections: [
      "heroImage",
      "designPhilosophy",
      "focusOutcomes",
      "selectedWorks",
      "stories",
      "hiringPhilosophy",
      "approach",
      "ventures",
      "workedWith",
      "bio",
      "career",
      "focusAndServices",
      "contact",
    ].map((sectionType, index) => ({
      _key: `section-${index}-${sectionType}`,
      _type: "homeSectionSlot",
      enabled: true,
      sectionType,
    })),
    selectedWorksHeading: "Selected works",
    selectedWorksIntro:
      "A few projects where constraints, messy scope, and business pressure became shipped product work.",
    caseStudies: caseStudyRefs.slice(0, 4),
    contact: {
      heading: "Available for new projects",
      body: "Book a discovery call and let's create valuable digital experience together.",
      availabilityLabel: "Available for new projects",
    },
  },
  {
    _id: "worksPage",
    _type: "worksPage",
    heroLabel: "WORKS",
    heroTitle: "Selected projects",
    heroSubtitle:
      "Real outcomes from B2B SaaS engagements. Each started with constraints and chaos, and ended with measurable change.",
    loadMoreBatch: 2,
    moreWorksTitle: "More works",
    featuredProjects: caseStudyRefs.slice(0, 3),
    moreProjects: caseStudyRefs.slice(3),
  },
  ...caseStudies.map(caseStudyDoc),
];

const dir = await mkdtemp(path.join(tmpdir(), "maxburlak-sanity-seed-"));
const file = path.join(dir, "documents.json");
await writeFile(file, JSON.stringify(docs, null, 2));

const result = spawnSync(
  "npm",
  ["exec", "sanity", "--", "documents", "create", file, "--missing"],
  { stdio: "inherit" },
);

process.exit(result.status ?? 1);
