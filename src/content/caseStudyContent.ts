import type { WorksProject } from "./worksPage";
import type { CaseStudy } from "../sanity/types";
import { hasCmsCaseStudyContent, mapCaseStudyToPageContent } from "../sanity/mapCaseStudyContent";
import type { SanityBlock } from "../sanity/portableText";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

export type CaseStudyFeature = {
  title: string;
  body: string;
};

export type CaseStudyTableRow = {
  key: string;
  title: string;
  description: string;
};

export type CaseStudyPhase = {
  phase: string;
  title: string;
  description: string;
};

export type CaseStudyMetric = {
  value: string;
  label: string;
  detail: string;
};

export type CaseStudyMediaItem =
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "video"; src: string; poster?: string; alt?: string; caption?: string };

export type CaseStudySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  paragraphBlocks?: SanityBlock[];
  table?: CaseStudyTableRow[];
  phases?: CaseStudyPhase[];
  features?: CaseStudyFeature[];
  metrics?: CaseStudyMetric[];
  numberedList?: string[];
  media?: CaseStudyMediaItem[];
};

export type CaseStudyPageContent = {
  slug: string;
  pageTitle: string;
  lede: string;
  published?: string;
  visitUrl?: string;
  visitLabel?: string;
  meta?: {
    role: string;
    timeline: string;
    team: string;
    stage: string;
  };
  nav: CaseStudyNavItem[];
  sections: CaseStudySection[];
  notes?: string;
};

const CASE_STUDY_PAGES: Record<string, CaseStudyPageContent> = {
  default: {
    slug: "default",
    pageTitle: "Revenue operations platform for GTM teams",
    lede: "Led design through 3 major scope changes, shipping a platform that increased trial-to-paid conversion by 34% — without dedicated research.",
    published: "2023–2026",
    visitUrl: "https://default.com",
    visitLabel: "Visit site",
    meta: {
      role: "Design Lead",
      timeline: "2023–2026 (3 years)",
      team: "2 designers, 8 engineers",
      stage: "Series A → Series B",
    },
    nav: [
      { id: "challenge", label: "Challenge" },
      { id: "constraints", label: "Constraints" },
      { id: "approach", label: "Approach" },
      { id: "solution", label: "Solution" },
      { id: "results", label: "Results" },
      { id: "cut", label: "What got cut" },
      { id: "learnings", label: "Learnings" },
    ],
    sections: [
      {
        id: "challenge",
        title: "Revenue teams drowning in tool fragmentation",
        paragraphs: [
          "Default was building a unified platform for go-to-market teams. The vision was clear: replace 5–7 point solutions with one integrated workflow. The reality? Nobody had done this well before.",
          "When I joined as founding designer, we had a functional prototype, 12 beta customers, and exactly zero design system. The product worked, but the experience was held together with duct tape and good intentions.",
          "My job wasn't just to make it look better. It was to build foundations that could scale from 12 to 1,200 customers without breaking.",
        ],
      },
      {
        id: "constraints",
        title: "What I was working with",
        paragraphs: ["Most portfolios show the polished result. Here's the mess I navigated:"],
        table: [
          {
            key: "brief",
            title: "Brief changed 3 times",
            description:
              "CEO came back from conferences with \"new direction\" twice. Third time was market feedback that invalidated our pricing model. Each pivot meant rethinking core workflows mid-sprint.",
          },
          {
            key: "research",
            title: "No dedicated research budget",
            description:
              "Sales wanted features yesterday. No time for formal user research. I had to make do with Gong call reviews, support tickets, and 15-minute customer check-ins squeezed between demos.",
          },
          {
            key: "deadline",
            title: "6-week deadline (non-negotiable)",
            description:
              "Series B funding depended on shipping the enterprise tier. Six weeks to redesign pricing, onboarding, and admin controls. Miss the deadline, miss the round.",
          },
          {
            key: "stakeholders",
            title: "5 stakeholders, 5 opinions",
            description:
              "PM, CS, RevOps, Eng, and CEO all had \"feedback.\" Design reviews became design-by-committee. I was spending more time in meetings than actually designing.",
          },
        ],
      },
      {
        id: "approach",
        title: "From chaos to shipped product",
        phases: [
          {
            phase: "Week 1–2",
            title: "Audit & triage",
            description:
              "Mapped every screen, identified the 20% of features used by 80% of users. Created a \"cut list\" of everything we wouldn't ship in v1. Presented tradeoffs to leadership with clear recommendations.",
          },
          {
            phase: "Week 3–4",
            title: "Foundation sprint",
            description:
              "Built token system and core components while designing the new pricing flow. Parallel tracks: systems work that would pay off later, and feature work that needed to ship now.",
          },
          {
            phase: "Week 5",
            title: "Build & iterate",
            description:
              "Daily standups with eng. Designed in the morning, reviewed implementations in the afternoon. Fixed issues in real-time instead of waiting for formal QA cycles.",
          },
          {
            phase: "Week 6",
            title: "Ship & measure",
            description:
              "Launched to 50% of new trials. Set up tracking for key flows. Documented hypotheses for post-launch iteration. Handed off v2 roadmap to the team.",
          },
        ],
      },
      {
        id: "solution",
        title: "What we shipped",
        features: [
          {
            title: "Unified dashboard",
            body: "Pipeline, activities, and team performance in one view for revenue leaders.",
          },
          {
            title: "Pipeline management",
            body: "Drag-and-drop stages with real-time analytics for GTM teams.",
          },
          {
            title: "Role-aware onboarding",
            body: "Guided setup paths tailored to how each team actually works.",
          },
          {
            title: "Admin controls & integration hub",
            body: "Enterprise tier settings and connections to the rest of the GTM stack.",
          },
        ],
      },
      {
        id: "results",
        title: "What changed",
        metrics: [
          { value: "+34%", label: "Trial→Paid Conversion", detail: "Up from 18% to 24% in 90 days" },
          { value: "1.8×", label: "Dev Velocity", detail: "Design system reduced build time" },
          { value: "$2.5M", label: "ARR Impact", detail: "Attributed to UX improvements" },
          { value: "−40%", label: "Support Tickets", detail: "Clearer UI = fewer questions" },
        ],
      },
      {
        id: "cut",
        title: "The features we killed to ship on time",
        paragraphs: ["Shipping is about what you don't do. Here's what we consciously cut to hit the deadline:"],
        table: [
          {
            key: "analytics",
            title: "Custom analytics dashboard",
            description: "Users could export to their own BI tools. Built-in analytics was nice-to-have, not need-to-have.",
          },
          {
            key: "ai",
            title: "AI-powered recommendations",
            description: "Cool demo feature, but no validated use case. Moved to v2 roadmap pending customer feedback.",
          },
          {
            key: "admin",
            title: "3 admin views",
            description: "Consolidated into 1 settings page. Fewer screens to build, fewer screens to maintain.",
          },
          {
            key: "dark",
            title: "Dark mode",
            description: "Token system supports it, but implementation was 2 weeks. Shipped light mode, added dark mode in month 3.",
          },
        ],
      },
      {
        id: "learnings",
        title: "What I'd do differently",
        numberedList: [
          "Start the design system earlier. I waited until week 3 to formalize tokens. If I'd done it week 1, the parallel work would have been smoother.",
          "Decision memos from day 1. I only started writing them in week 4 to manage stakeholder chaos. Should have established the pattern immediately.",
          "Set explicit \"no new features\" gates. Scope creep happened because I didn't have a formal cutoff. Week 4 should have been a hard freeze.",
        ],
      },
    ],
  },
  apollo: {
    slug: "apollo",
    pageTitle: "Design system unification at scale",
    lede: "Unified 5 squads under one design language with zero initial documentation, reducing time-to-value by 35% and achieving 85% component adoption.",
    published: "2021–2023",
    visitUrl: "https://apollo.io",
    visitLabel: "Visit site",
    meta: {
      role: "Design System Lead",
      timeline: "2021–2023 (2 years)",
      team: "3 designers, 5 squads",
      stage: "Series C ($110M raised)",
    },
    nav: [
      { id: "challenge", label: "Challenge" },
      { id: "constraints", label: "Constraints" },
      { id: "approach", label: "Approach" },
      { id: "foundation", label: "Foundation" },
      { id: "system", label: "System" },
      { id: "adoption", label: "Adoption" },
      { id: "results", label: "Results" },
      { id: "cut", label: "What got cut" },
      { id: "learnings", label: "Learnings" },
    ],
    sections: [
      {
        id: "challenge",
        title: "5 squads, 5 different design languages",
        paragraphs: [
          "Apollo.io had scaled fast. Too fast for design to keep up. When I joined, the platform looked like 5 different products stitched together — because it was. Each squad had built their own patterns, their own components, their own interpretation of \"the brand.\"",
          "The symptoms were everywhere: inconsistent spacing, 12 different button styles, accessibility issues on every page, and a widening gap between what design shipped in Figma and what engineering actually built.",
          "My mandate was simple: make it feel like one product. My constraint? Zero existing documentation and five teams who were skeptical that a \"design system\" was anything more than a distraction from shipping features.",
        ],
      },
      {
        id: "constraints",
        title: "What I was working with",
        table: [
          {
            key: "squads",
            title: "5 squads, no alignment",
            description:
              "Each team had their own design patterns. Some used 8px grid, some used 4px. Button styles varied wildly. Getting agreement on anything meant 5 separate conversations.",
          },
          {
            key: "legacy",
            title: "Legacy debt everywhere",
            description:
              "The codebase had 3 years of accumulated patterns. Some components were used once, others duplicated 50 times with slight variations. Nobody knew what was \"official.\"",
          },
          {
            key: "docs",
            title: "Zero documentation",
            description:
              "No component library, no style guide, no token definitions. Knowledge lived in people's heads and Figma files scattered across 20 projects.",
          },
          {
            key: "brand",
            title: "Brand gap",
            description:
              "Marketing had just done a brand refresh. Platform still looked like 2019. Closing that gap was a top priority from leadership, but nobody had defined what \"brand on platform\" meant.",
          },
        ],
      },
      {
        id: "approach",
        title: "Governance first, components second",
        paragraphs: [
          "Most design systems fail because they start with components. I started with process: How do we make decisions? How do we resolve conflicts? How do we know if this is working?",
        ],
        phases: [
          {
            phase: "01",
            title: "Audit & inventory",
            description:
              "Catalogued every component across all squads. Found 47 button variations, 12 modal patterns, and 8 different approaches to form fields. Created a \"consolidation map\" showing what to keep, merge, or kill.",
          },
          {
            phase: "02",
            title: "Token foundation",
            description:
              "Before touching components, I built the token layer: colors, spacing, typography, shadows. These became the non-negotiable primitives that everything else would inherit from.",
          },
          {
            phase: "03",
            title: "Squad champions",
            description:
              "Recruited one designer from each squad as \"DS champion.\" They attended weekly syncs, surfaced adoption blockers, and evangelized the system within their teams.",
          },
        ],
      },
      {
        id: "foundation",
        title: "Token architecture",
        paragraphs: [
          "Tokens are the atoms of a design system. Get them wrong, and everything built on top inherits the chaos. Here's a sample of the semantic token layer:",
        ],
        table: [
          {
            key: "primary",
            title: "color.action.primary",
            description: "Primary buttons, key CTAs, links",
          },
          {
            key: "text-primary",
            title: "color.text.primary",
            description: "Headings, body text, labels",
          },
          {
            key: "text-secondary",
            title: "color.text.secondary",
            description: "Descriptions, helper text, metadata",
          },
          {
            key: "error",
            title: "color.feedback.error",
            description: "Error states, destructive actions",
          },
          {
            key: "success",
            title: "color.feedback.success",
            description: "Success messages, positive indicators",
          },
        ],
      },
      {
        id: "system",
        title: "What we built",
        features: [
          {
            title: "Core component library",
            body: "Variants, states, and usage documentation for every shared UI pattern.",
          },
          {
            title: "Token system",
            body: "Semantic naming mapped to code — one source of truth for design and engineering.",
          },
          {
            title: "Living documentation",
            body: "Code examples and adoption guidelines embedded where teams actually work.",
          },
        ],
      },
      {
        id: "adoption",
        title: "Tracking system health",
        paragraphs: [
          "A design system is only as good as its adoption. I implemented monthly tracking across all squads. Component adoption by squad at month 6:",
        ],
        table: [
          { key: "prospecting", title: "Prospecting", description: "92% adoption" },
          { key: "engagement", title: "Engagement", description: "88% adoption" },
          { key: "analytics", title: "Analytics", description: "85% adoption" },
          { key: "integrations", title: "Integrations", description: "78% adoption" },
          { key: "settings", title: "Settings", description: "82% adoption" },
        ],
      },
      {
        id: "results",
        title: "What changed",
        metrics: [
          { value: "−35%", label: "Time-to-Value", detail: "Faster first success via consistency" },
          { value: "92%", label: "Alignment Score", detail: "Cross-squad design consistency" },
          { value: "3×", label: "Team Growth", detail: "Onboarded 6 new designers" },
          { value: "85%", label: "Component Adoption", detail: "Across all product areas" },
        ],
      },
      {
        id: "cut",
        title: "Prioritization decisions",
        paragraphs: ["With limited resources, I had to make hard tradeoffs. Here's what we consciously deprioritized:"],
        table: [
          {
            key: "rebrand",
            title: "Full rebrand implementation",
            description: "Focused on consistency first, brand polish second. Shipped 60% of brand updates, deferred the rest.",
          },
          {
            key: "dark",
            title: "Dark mode v1",
            description: "Token system supports it, but implementation required 4 weeks. Moved to Q3.",
          },
          {
            key: "motion",
            title: "Motion system",
            description: "Defined easing curves, but full animation library was scope creep. Static first, motion later.",
          },
        ],
      },
      {
        id: "learnings",
        title: "What I'd tell past me",
        numberedList: [
          "Governance > Components. The weekly sync with squad champions was more valuable than any component I built. Process enables scale.",
          "Track adoption from day 1. I started measuring at month 3. Should have baselined earlier to show progress and justify investment.",
          "Engineering partnership is everything. The system only worked because I had a dedicated frontend engineer. Design systems without eng resources are just Figma files.",
        ],
      },
    ],
  },
  p2p: {
    slug: "p2p",
    pageTitle: "Crypto banking from zero to launch",
    lede: "Built a crypto bank on Solana as founding designer, wearing 5 hats in a market with no playbook. Won 2nd place at hackathon and hit $1M+ TVL in month one.",
    published: "2020–2021",
    visitUrl: "https://p2p.org",
    visitLabel: "Visit site",
    meta: {
      role: "Founding Designer",
      timeline: "2020–2021 (9 months)",
      team: "1 designer, 4 engineers",
      stage: "Startup within P2P Validator",
    },
    nav: [
      { id: "challenge", label: "Challenge" },
      { id: "constraints", label: "Constraints" },
      { id: "reality", label: "Reality" },
      { id: "process", label: "Process" },
      { id: "product", label: "Product" },
      { id: "hackathon", label: "Hackathon" },
      { id: "results", label: "Results" },
      { id: "learnings", label: "Learnings" },
    ],
    sections: [
      {
        id: "challenge",
        title: "Building in a market that didn't exist yet",
        paragraphs: [
          "P2P Validator wanted to build a crypto bank — but not just another DeFi dashboard. They wanted something that felt like a real banking experience, built on top of Solana (which was brand new at the time).",
          "The problem? Nobody had done this. There were no design patterns for crypto banking. No competitive research to reference. No established user expectations to anchor on.",
          "We were a laboratory inside a bigger company, operating like an independent startup. My job was to figure out what a \"crypto bank\" even meant from a user experience perspective — and then build it.",
        ],
      },
      {
        id: "constraints",
        title: "What I was working with",
        table: [
          {
            key: "playbook",
            title: "New market, no playbook",
            description:
              "Solana was months old. DeFi was exploding but chaotic. No established patterns for crypto banking UI. Had to create conventions from scratch.",
          },
          {
            key: "regulatory",
            title: "Regulatory uncertainty",
            description:
              "Crypto regulations were shifting weekly. Every feature decision had legal implications. Had to design for flexibility and rapid pivots.",
          },
          {
            key: "hats",
            title: "Wore 5 hats",
            description:
              "Not just design. Also PM support, QA, UX research, and occasionally front-end prototyping. Small team meant everyone did everything.",
          },
          {
            key: "timeline",
            title: "9 months to launch",
            description:
              "Aggressive timeline from concept to live product. Had to move fast while learning an entirely new domain (blockchain, DeFi, tokenomics).",
          },
        ],
      },
      {
        id: "reality",
        title: "What \"founding designer\" actually meant",
        paragraphs: ["In a 5-person team, job titles are suggestions. Here's what I actually did:"],
        table: [
          { key: "ux", title: "UX/UI Design", description: "Core flows, visual design, prototypes" },
          { key: "pm", title: "PM Support", description: "Roadmap input, stakeholder alignment" },
          { key: "research", title: "UX Research", description: "User interviews, usability testing" },
          { key: "qa", title: "QA", description: "Testing, bug tracking, edge cases" },
          { key: "fe", title: "Front-end", description: "Prototypes, CSS fixes, animations" },
        ],
      },
      {
        id: "process",
        title: "From unknown to launched",
        phases: [
          {
            phase: "Month 1–2",
            title: "Domain immersion",
            description:
              "Spent two weeks just learning. DeFi protocols, Solana architecture, staking mechanics. Couldn't design what I didn't understand. Created a \"DeFi dictionary\" for the team.",
          },
          {
            phase: "Month 3–4",
            title: "Core flows",
            description:
              "Designed the three critical paths: onboarding, staking, and portfolio view. Tested with internal users (other P2P employees) and iterated rapidly.",
          },
          {
            phase: "Month 5–6",
            title: "DTF product",
            description:
              "Added a second product line: Decentralized Token Fund (like an ETF for crypto). Entirely new flows, new mental models, compressed timeline.",
          },
          {
            phase: "Month 7–9",
            title: "Launch & hackathon",
            description:
              "Shipped v1 to public. Entered Solana hackathon with our DTF product. Won 2nd place. Used prize momentum to accelerate user acquisition.",
          },
        ],
      },
      {
        id: "product",
        title: "What we shipped",
        features: [
          {
            title: "Portfolio dashboard",
            body: "Main dashboard showing portfolio, staking positions, and rewards.",
          },
          {
            title: "One-click staking",
            body: "Clear reward projections with minimal friction for new crypto users.",
          },
          {
            title: "Mobile-first design",
            body: "On-the-go management for a market where users check positions constantly.",
          },
        ],
      },
      {
        id: "hackathon",
        title: "Solana Hackathon: 2nd Place",
        paragraphs: [
          "We entered the Solana DeFi hackathon with our DTF product — a way for users to invest in diversified crypto baskets with one click. Competed against 300+ teams.",
          "The judges highlighted our UX as a key differentiator. Most DeFi products at the time were built by developers for developers. We built for regular humans.",
        ],
      },
      {
        id: "results",
        title: "What changed",
        metrics: [
          { value: "$1M+", label: "TVL Month 1", detail: "Total value locked at launch" },
          { value: "2nd", label: "Hackathon Place", detail: "Solana DeFi track" },
          { value: "0→1", label: "Product Launch", detail: "From concept to live in 9 months" },
          { value: "DTF", label: "New Product Line", detail: "Created secondary revenue stream" },
        ],
      },
      {
        id: "learnings",
        title: "What founding design taught me",
        numberedList: [
          "Domain expertise is non-negotiable. I couldn't design a good crypto product without understanding DeFi mechanics. The first 2 weeks of pure learning paid off 10x.",
          "Constraints create focus. With 5 people and 9 months, we couldn't build everything. That forced us to ruthlessly prioritize what actually mattered to users.",
          "Multi-hat roles build perspective. Doing QA made me a better designer. Supporting PM gave me strategic context. Founding roles aren't diluted — they're enriched.",
        ],
      },
    ],
  },
};

function buildFallbackCaseStudy(project: WorksProject): CaseStudyPageContent {
  return {
    slug: project.caseStudySlug,
    pageTitle: project.showcaseTitle,
    lede: project.showcaseSummary,
    published: project.years,
    meta: {
      role: project.role,
      timeline: project.years,
      team: project.tags.join(", "),
      stage: project.tags[0] ?? "—",
    },
    nav: [
      { id: "overview", label: "Overview" },
      { id: "outcomes", label: "Outcomes" },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [project.description || project.showcaseSummary],
      },
      {
        id: "outcomes",
        title: "Outcomes",
        metrics:
          project.metrics.length > 0
            ? project.metrics.map((m) => ({
                value: m.value,
                label: m.label.replace(/→/g, " to "),
                detail: "",
              }))
            : [{ value: "—", label: "In progress", detail: "Detailed outcomes for this project are being documented." }],
      },
    ],
  };
}

export function getCaseStudyPageContent(
  project: WorksProject,
  cmsCaseStudy?: CaseStudy | null,
): CaseStudyPageContent {
  if (cmsCaseStudy && hasCmsCaseStudyContent(cmsCaseStudy)) {
    return mapCaseStudyToPageContent(cmsCaseStudy, project);
  }
  return CASE_STUDY_PAGES[project.caseStudySlug] ?? buildFallbackCaseStudy(project);
}
