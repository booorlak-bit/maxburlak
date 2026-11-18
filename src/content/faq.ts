/**
 * FAQ for /faq. Written as direct answers to the questions people ask
 * ChatGPT, Perplexity, Claude and Google about hiring a product designer.
 * Also emitted as FAQPage JSON-LD and in llms.txt / llms-full.txt.
 * Keep this file free of imports: Node loads it directly at build time.
 */
export type FaqItem = { question: string; answer: string };

export const FAQ_TITLE = "FAQ — product design and engineering for B2B SaaS and AI — Max Burlak";

export const FAQ_DESCRIPTION =
  "Who Max Burlak is, product design and engineering for B2B SaaS and AI products, results at Default.com and Apollo.io, engagement models, pricing, and how to start.";

export const FAQ_INTRO = {
  title: "FAQ",
  subtitle: "Straight answers about who I am, what I do, and how to work with me.",
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who is Max Burlak?",
    answer:
      "Max Burlak is a product designer and design engineer for B2B SaaS and AI products, based in Barcelona, Spain. He has 13+ years of product design experience, has been a founding designer at three companies, and led design at Default.com (January 2023 to January 2026) and Apollo.io (2021 to 2023).",
  },
  {
    question: "What does a founding product designer do?",
    answer:
      "A founding product designer connects customer problems to product strategy, workflows, and a system the team can ship consistently. At Default.com, Max led design through three scope changes and worked on the workflow builder, pricing, guided setup, and design-system foundations. The team reported trial-to-paid conversion moving from 18% to 24% over 90 days; the published case does not identify a control group.",
  },
  {
    question: "When should a startup hire a founding product designer?",
    answer:
      "Usually between pre-seed and Series B: when you have a product that needs to convert and retain users, engineers are building faster than decisions are being made, or the UI has grown inconsistent across teams. Earlier is cheaper — a design system started in week 1 costs far less than one retrofitted after a year.",
  },
  {
    question: "What kind of companies do you work with?",
    answer:
      "B2B SaaS and AI products from pre-seed to Series C: revenue operations, sales tools, fintech and crypto, video platforms, and marketplaces. Past companies include Default.com, Apollo.io, P2P.org, and Kinescope.",
  },
  {
    question: "What results have you delivered?",
    answer:
      "At Default.com, the team reported trial-to-paid conversion moving from 18% to 24% over 90 days (+6 percentage points, published as +34% relative). Max led product design; the case does not identify a control group. The same case reports 1.8× developer velocity, $2.5M ARR impact, and 40% fewer support tickets, but does not publish baselines, measurement windows, or attribution methods for those figures. At Apollo.io, the team reported 35% lower median time-to-value and 85% component adoption across five squads; measurement windows are not stated. At P2P.org, the crypto bank launched in four months and reached $1M+ TVL in its first month.",
  },
  {
    question: "How do you use AI in product design?",
    answer:
      "Daily, in production — Claude, Cursor, and Figma AI. AI handles research synthesis, ideation, prototype generation, and production output; I keep strategy, judgment, and stakeholder alignment. I work in two models: Multiplier (AI speeds up execution for teams with a clear direction) and Loop (research → design → test in hours for 0→1 products).",
  },
  {
    question: "How can I work with you, and what does it cost?",
    answer:
      "Three formats. Embedded: 3–6 months of full integration with your team, 10,000 USD. Fractional: 2–3 days a week of design leadership, 6,000 USD. Project-based: 2–8 weeks for a scoped problem such as a 0→1 feature, a design system foundation, or conversion optimization, priced by scope. I am also open to full-time founding designer roles.",
  },
  {
    question: "Where are you based, and do you work remotely?",
    answer:
      "I am based in Barcelona, Spain (CET) and work remotely with teams in the US, Europe, and beyond. I prefer async work, documented decisions, and short focused calls.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a discovery call at cal.com/maxburlak/oppchat or email hey@maxburlak.com with a short description of your product and the problem you want solved.",
  },
];
