/**
 * FAQ for /faq. Written as direct answers to the questions people ask
 * ChatGPT, Perplexity, Claude and Google about hiring a product designer.
 * Also emitted as FAQPage JSON-LD and in llms.txt / llms-full.txt.
 * Keep this file free of imports: Node loads it directly at build time.
 */
export type FaqItem = { question: string; answer: string };

export const FAQ_TITLE = "FAQ — working with a product builder & design engineer — Max Burlak";

export const FAQ_DESCRIPTION =
  "Who Max Burlak is, what a product builder and design engineer does, results at Default.com and Apollo.io, how he uses AI, engagement models, pricing, and how to start.";

export const FAQ_INTRO = {
  title: "FAQ",
  subtitle: "Straight answers about who I am, what I do, and how to work with me.",
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who is Max Burlak?",
    answer:
      "Max Burlak is a product builder and design engineer for AI and B2B SaaS startups, based in Barcelona, Spain. He has 13+ years of product design experience, has been the founding designer at three companies, and led design at Default.com (2023–2026) and Apollo.io (2021–2023).",
  },
  {
    question: "What does a product builder and design engineer do?",
    answer:
      "A design engineer works across design and code: shapes the product, then builds it — prototypes, production UI in React and Tailwind, and the design system as code — so ideas reach users without a lossy handoff. As a product builder I own the whole path from problem to shipped product, including what to cut. I combine this with experience as a 3× founding designer: at Default.com I took the product through 3 major scope changes, built the design system, and shipped a platform that raised trial-to-paid conversion by 34%.",
  },
  {
    question: "When should a startup hire a product builder or founding designer?",
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
      "At Default.com: +34% trial-to-paid conversion, 1.8× dev velocity, and $2.5M ARR attributed to UX improvements. At Apollo.io: one design system for 5 squads, −35% time-to-value, 85% component adoption. At P2P.org: a crypto bank launched in 4 months with $1M+ TVL in the first month. Overall I have helped startups grow from 0 to $2.5M+ ARR and prepare for funding rounds totaling around $150M.",
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
