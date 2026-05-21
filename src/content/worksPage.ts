export const WORKS_HERO = {
  label: "WORKS",
  title: "Selected projects",
  subtitle:
    "Real outcomes from B2B SaaS engagements. Each started with constraints and chaos, and ended with measurable change.",
};

export type WorksProjectCategory = "full-time" | "case-studies" | "contract" | "concepts";

export const WORKS_PROJECT_FILTERS = [
  { id: "all", label: "All projects" },
  { id: "full-time", label: "Full time" },
  { id: "case-studies", label: "Case studies" },
  { id: "contract", label: "Contract" },
  { id: "concepts", label: "Concepts" },
] as const;

export type WorksProjectFilterId = (typeof WORKS_PROJECT_FILTERS)[number]["id"];

export type WorksProject = {
  id: string;
  company: string;
  title: string;
  showcaseTitle: string;
  showcaseSummary: string;
  role: string;
  years: string;
  tags: string[];
  description: string;
  metrics: { label: string; value: string }[];
  caseStudySlug: string;
  logoKey?: string;
  screenshot?: WorkScreenshot;
  categories?: WorksProjectCategory[];
};

export type WorkScreenshot = {
  src: string;
  alt: string;
  aspectRatio: string;
  width?: number;
  height?: number;
};

export const FEATURED_PROJECTS: WorksProject[] = [
  {
    id: "default",
    company: "Default.com",
    title: "Revenue operations platform for GTM teams",
    showcaseTitle: "Revenue operations platform",
    showcaseSummary:
      "Led design through platform iterations, built scalable design system foundations, and shaped GTM workflows used by revenue teams.",
    role: "Design Lead",
    years: "2023–2026",
    tags: ["Revenue Ops", "Design Systems", "B2B SaaS"],
    description:
      "Led design through multiple platform iterations, built foundations for scalable design systems, and shaped product workflows used by revenue teams. Navigated 3 major scope changes and shipped without dedicated research.",
    metrics: [
      { label: "Trial→Paid", value: "+34%" },
      { label: "Dev Velocity", value: "1.8×" },
      { label: "ARR Impact", value: "$2.5M" },
    ],
    caseStudySlug: "default",
    categories: ["full-time", "case-studies"],
  },
  {
    id: "apollo",
    company: "Apollo.io",
    title: "Design system unification at scale",
    showcaseTitle: "Design system unification",
    showcaseSummary:
      "Standardized platform and brand systems across squads, closing the gap between design language and implementation.",
    role: "Design System Lead",
    years: "2021–2023",
    tags: ["Design Systems", "Platform", "Cross-team"],
    description:
      "Standardized platform and brand systems across 5 squads with zero initial documentation. Closed the gap between design language and implementation, established token foundations and cross-team consistency.",
    metrics: [
      { label: "Time-to-Value", value: "−35%" },
      { label: "Alignment", value: "92%" },
      { label: "Team Growth", value: "3×" },
    ],
    caseStudySlug: "apollo",
    categories: ["full-time", "case-studies"],
  },
  {
    id: "p2p",
    company: "P2P.org",
    title: "Crypto banking from zero to launch",
    showcaseTitle: "Crypto banking launch",
    showcaseSummary:
      "Founding designer building a crypto bank on Solana from scratch — new market, no playbook, multiple hats.",
    role: "Founding Designer",
    years: "2020–2021",
    tags: ["0→1", "Crypto", "Founding Designer"],
    description:
      "Founding product designer creating a crypto bank on Solana network from scratch. Wore 5 hats (design, PM support, QA, UX research) in a new market with no playbook. Won 2nd place at hackathon.",
    metrics: [
      { label: "TVL Month 1", value: "$1M+" },
      { label: "Hackathon", value: "2nd Place" },
      { label: "Time to Launch", value: "4 months" },
    ],
    caseStudySlug: "p2p",
    categories: ["full-time", "case-studies"],
  },
];

export const MORE_PROJECTS: WorksProject[] = [
  {
    id: "kinescope",
    company: "Kinescope",
    title: "Video hosting platform redesign",
    showcaseTitle: "Video hosting platform redesign",
    showcaseSummary: "Senior product design on a video hosting platform — improving upload, playback, and admin workflows.",
    role: "Senior Product Designer",
    years: "2018–2020",
    tags: ["B2B SaaS", "Video", "Platform"],
    description:
      "Led redesign of core video hosting experiences: upload flows, player customization, and analytics dashboards for enterprise customers.",
    metrics: [],
    caseStudySlug: "kinescope",
    categories: ["full-time"],
  },
  {
    id: "round-2",
    company: "Round 2 App",
    title: "Sneaker marketplace mobile app",
    showcaseTitle: "Sneaker marketplace mobile app",
    showcaseSummary: "Lead UX/UI for a mobile marketplace connecting sneaker buyers and sellers.",
    role: "Lead UX/UI Designer",
    years: "2018",
    tags: ["Mobile", "Marketplace", "Consumer"],
    description:
      "Designed end-to-end mobile experience for listing, discovery, and checkout in a peer-to-peer sneaker marketplace.",
    metrics: [],
    caseStudySlug: "round-2",
    categories: ["contract"],
  },
  {
    id: "mid-tv",
    company: "MID.TV",
    title: "Media streaming platform",
    showcaseTitle: "Media streaming platform",
    showcaseSummary: "Product design for a media streaming product — content discovery and viewing experience.",
    role: "Product Designer",
    years: "2017–2018",
    tags: ["Streaming", "Media", "Consumer"],
    description:
      "Shaped content browsing, playback, and subscription flows for an early-stage streaming platform.",
    metrics: [],
    caseStudySlug: "mid-tv",
    categories: ["contract"],
  },
  {
    id: "rentor",
    company: "Rentor",
    title: "Real estate rental platform",
    showcaseTitle: "Real estate rental platform",
    showcaseSummary: "Senior lead design on a rental platform connecting landlords and tenants.",
    role: "Senior Lead Designer",
    years: "2015–2017",
    tags: ["Real Estate", "Marketplace", "B2C"],
    description:
      "Led design for listing creation, search, and rental agreement flows on a real-estate rental marketplace.",
    metrics: [],
    caseStudySlug: "rentor",
    categories: ["full-time"],
  },
];

export const ALL_WORKS_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];

export const WORKS_LOAD_MORE_BATCH = 2;

export function filterWorksProjects(projects: WorksProject[], filter: WorksProjectFilterId): WorksProject[] {
  if (filter === "all") return projects;
  return projects.filter((project) => project.categories?.includes(filter));
}

export function getProjectByCaseStudySlug(slug: string): WorksProject | undefined {
  return ALL_WORKS_PROJECTS.find((p) => p.caseStudySlug === slug);
}

export function getProjectById(id: string): WorksProject | undefined {
  return ALL_WORKS_PROJECTS.find((p) => p.id === id);
}

export function getOtherWorksProjects(projects: WorksProject[], slug: string, limit = 4): WorksProject[] {
  return projects.filter((project) => project.caseStudySlug !== slug).slice(0, limit);
}
