export type VentureStatus = "Active" | "Coming Soon" | "In development" | "Paused" | "Archived";

export type VentureIconKey = "the-first" | "pinnboards" | "fliq" | "mndfrnd" | "organicaaa";

export type Venture = {
  id: string;
  name: string;
  url?: string;
  status: VentureStatus;
  role: string;
  icon: VentureIconKey;
  oneLiner: string;
  description: string;
  problemItSolves: string;
  currentStage: string[];
};

export const VENTURES_HERO = {
  label: "Ventures",
  title: "Things I'm building",
  subtitle:
    "Side projects, experiments, and products I'm creating outside of client work. Some ship. Some teach. All compound.",
};

export const ACTIVE_VENTURES: Venture[] = [
  {
    id: "the-first",
    name: "The First",
    url: "thefirst.design",
    status: "Coming Soon",
    role: "Creator",
    icon: "the-first",
    oneLiner: "A playbook for founding designers.",
    description:
      "A guide for designers who join startups as the first design hire. Covers everything from setting up design infrastructure to navigating founder relationships, building without a team, and scaling when the time comes.",
    problemItSolves:
      "Founding designers have no playbook. You're suddenly responsible for everything — product design, brand, systems, process — with no one to learn from. The First is the guide I wish I had when I was a founding designer the first time.",
    currentStage: ["Content in development", "Based on 3x founding designer experience"],
  },
  {
    id: "pinnboards",
    name: "Pinnboards",
    url: "pinnboards.com",
    status: "Active",
    role: "Founder",
    icon: "pinnboards",
    oneLiner: "A control plane for your design system.",
    description:
      "Cloud-based, AI-powered control center for design systems. Generate a design system from references, keep it healthy, and serve it to your codebase and AI agents through one source of truth.",
    problemItSolves:
      "Design systems are fragmented — scattered across Figma, code, documentation. Pinnboards centralizes generation, maintenance, and serving of design systems to both codebases and AI agents.",
    currentStage: [
      "Product live",
      "Early adopters testing",
      "AI-powered generation in development",
    ],
  },
  {
    id: "fliq",
    name: "Fliq",
    url: "fliq.club",
    status: "Active",
    role: "Co-Founder",
    icon: "fliq",
    oneLiner: "The business social network professionals actually want.",
    description:
      "Video-first profiles, AI startup scoring, events, and verified badges. A new approach to professional networking that prioritizes authentic connections over LinkedIn noise.",
    problemItSolves:
      "LinkedIn is broken — algorithm-driven feeds, engagement bait, no signal. Fliq offers video-first profiles and AI-powered startup scoring to surface real professional value.",
    currentStage: [
      "Co-founded January 2026",
      "Building core product",
      "Beta users onboarding",
    ],
  },
  {
    id: "mndfrnd",
    name: "mndfrnd",
    url: "mndfrnd.com",
    status: "Active",
    role: "Founder",
    icon: "mndfrnd",
    oneLiner: "Cognitive behavioral buddy and toolset.",
    description:
      "A CBT-based companion that helps users build healthier thinking patterns. Tools and exercises grounded in cognitive behavioral therapy, delivered through an accessible interface.",
    problemItSolves:
      "Mental health tools are either too clinical or too fluffy. mndfrnd brings evidence-based CBT techniques into a friendly, actionable format for daily use.",
    currentStage: ["In development", "Core toolset being designed"],
  },
  {
    id: "organicaaa",
    name: "Organicaaa",
    status: "In development",
    role: "Founder",
    icon: "organicaaa",
    oneLiner: "A social network aligned to save human identity.",
    description:
      "A social platform designed to protect and celebrate authentic human identity in an age of AI-generated content and algorithmic manipulation.",
    problemItSolves:
      "Social networks optimize for engagement, not humanity. Organicaaa prioritizes genuine human expression and identity preservation.",
    currentStage: ["Concept phase", "Core philosophy defined"],
  },
];

export const FAILED_EXPERIMENTS = {
  title: "Things that didn't work",
  subheadline: "It didn't fail. It's just another way that doesn't work.",
  body: "Nothing here yet. When something doesn't work, I'll document it honestly — what it was, what I tried, and why it didn't land. Failure is data.",
};

export const BUILDER_PHILOSOPHY = {
  title: "Why I build",
  intro: "Every venture teaches something that makes client work better:",
  paragraphs: [
    "Client work pays the bills. Side projects keep the edge sharp.",
    "Building my own products forces me to make real decisions with real consequences — not just recommendations I hand off to someone else. When I'm the PM, the designer, and the user, I learn faster.",
    "I'm not trying to build a startup empire. I'm trying to stay dangerous.",
  ],
  learnings: [
    "The First came from 3x founding designer pain — no playbook exists",
    "Pinnboards came from design system fragmentation I saw at every company",
    "mndfrnd came from personal experience with CBT tools",
  ],
};

export const VENTURES_CTA = {
  title: "Want to build something together?",
  subtitle: "I'm open to co-founding, advising, or collaborating on interesting problems.",
  primaryLabel: "Let's talk",
  secondaryLabel: "View client work →",
};
