export const APPROACH_HERO = {
  label: "APPROACH",
  title: "How I work: From ambiguity to shipped impact",
  subtitle: "The design process you learned is dead. Here's what replaced it.",
};

export const OBSOLETE = {
  headline: "The decade-old playbook is obsolete",
  bodyParagraphs: [
    "The design process most of us learned—Double Diamond, persona research, pixel-perfect handoffs—was built for a world where production was the bottleneck. That world is gone.",
    "AI changed the equation. Production is cheap now. What's expensive is judgment: knowing what to build, what to cut, when to push back.",
  ],
  deadLabel: "What's dead:",
  practices: [
    "Double Diamond as gospel",
    "3-week persona research",
    "Pixel-perfect handoffs that never survive engineering",
    "Design reviews as status meetings",
    "40% of time on production work",
  ],
};

export type ApproachModel = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  iDo: string[];
  aiDoes: string[];
  bestFor: string;
  accent: "yellow" | "blue";
};

export const MODEL_OVERVIEW: ApproachModel[] = [
  {
    id: "multiplier",
    icon: "⚡",
    title: "Multiplier Model",
    tagline: "AI amplifies, I direct",
    description:
      "I use AI to 10x research, ideation, and production. The strategic work—knowing what to cut, when to push back, how to align stakeholders—stays human.",
    iDo: ["Strategy", "Judgment", "Stakeholder alignment"],
    aiDoes: ["Research synthesis", "Ideation velocity", "Production output"],
    bestFor: "Teams with clear direction needing faster execution",
    accent: "yellow",
  },
  {
    id: "loop",
    icon: "🔄",
    title: "Loop Model",
    tagline: "Research → Design → Test in hours",
    description:
      "Tight iteration cycles where each loop compounds insight. I use AI to compress what used to take weeks into hours.",
    iDo: ["Problem framing", "Pattern recognition", "Decision points"],
    aiDoes: ["Prototype generation", "Data synthesis", "Option exploration"],
    bestFor: "0→1 products, unclear problem spaces, rapid validation",
    accent: "blue",
  },
];

export const MULTIPLIER_PHASES = [
  {
    id: "diagnosis",
    title: "Phase 1: Diagnosis",
    duration: "Days 1-3",
    human: "Stakeholder interviews, constraint mapping, priority calls",
    ai: "Competitive analysis, market research synthesis, documentation parsing",
  },
  {
    id: "strategy",
    title: "Phase 2: Strategy",
    duration: "Days 3-5",
    human: "Define success metrics, scope boundaries, what to cut",
    ai: "Option generation, precedent research, risk mapping",
  },
  {
    id: "execution",
    title: "Phase 3: Execution",
    duration: "Days 5-10",
    human: "Design decisions, system thinking, review leadership",
    ai: "Component generation, variant exploration, documentation",
  },
  {
    id: "shipping",
    title: "Phase 4: Shipping",
    duration: "Days 10-14",
    human: "Engineering pairing, scope protection, launch decisions",
    ai: "QA checklists, edge case generation, handoff documentation",
  },
];

export const TIME_ALLOCATION = {
  beforeLabel: "Before (Traditional)",
  afterLabel: "After (AI-Native)",
  before: [
    { label: "Research", pct: 25 },
    { label: "Production", pct: 40 },
    { label: "Strategy", pct: 20 },
    { label: "Shipping", pct: 15 },
  ],
  after: [
    { label: "Research", pct: 10 },
    { label: "Production", pct: 15 },
    { label: "Strategy", pct: 40 },
    { label: "Shipping", pct: 35 },
  ],
};

export const LOOP_CYCLE_NOTE = "~8 hours (vs. 2-3 weeks traditional)";

export const LOOP_STEPS = [
  { step: "Frame", duration: "30 min", detail: "Define the specific question to answer" },
  { step: "Generate", duration: "2 hrs", detail: "AI produces 5-10 directional options" },
  { step: "Select", duration: "30 min", detail: "Pick 2-3 to test based on constraints" },
  { step: "Prototype", duration: "2 hrs", detail: "AI generates testable prototypes" },
  { step: "Test", duration: "2 hrs", detail: "Run with real users or stakeholders" },
  { step: "Learn", duration: "30 min", detail: "Document insights, decide: loop again or ship" },
];

export const REQUIREMENTS_INTRO = "What's needed for this approach to work:";

export const REQUIREMENTS = [
  {
    title: "Clear Constraints",
    description: "Ambiguity is fine. Unclear constraints aren't. I need to know what's fixed.",
  },
  {
    title: "Judgment Trust",
    description: "You hire me for decisions, not just execution. Trust the calls.",
  },
  {
    title: "Bias to Shipping",
    description: "Perfectionism kills velocity. We ship, then iterate.",
  },
  {
    title: "Prompt Fluency",
    description: "I work with AI daily. Teams should be comfortable with this.",
  },
  {
    title: "Knowing AI Limits",
    description: "AI accelerates—it doesn't replace judgment. I know the difference.",
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: "embedded",
    title: "Embedded",
    duration: "3-6 months",
    price: "10 000 USD",
    description:
      "Full integration with your team. Daily collaboration, design system ownership, strategic input.",
    bestFor: "Companies without senior design capacity",
  },
  {
    id: "fractional",
    title: "Fractional",
    duration: "2-3 days/week",
    price: "6 000 USD",
    description:
      "Part-time leadership. Design reviews, mentorship, system direction, strategic projects.",
    bestFor: "Teams with designers who need senior guidance",
  },
  {
    id: "project",
    title: "Project-based",
    duration: "2-8 weeks",
    price: "Ownership scope based",
    description:
      "Scoped engagement. 0→1 feature, design system foundation, conversion optimization.",
    bestFor: "Specific problems with clear boundaries",
  },
];

export const APPROACH_CTA = {
  title: "Ready to work differently?",
  subtitle: "Let's talk about your challenges and see if there's a fit.",
  primary: "Book a call",
  secondary: "View works →",
};
