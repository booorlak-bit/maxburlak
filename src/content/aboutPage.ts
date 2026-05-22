export type AboutContactLink = {
  label: string;
  display: string;
  href: string;
  external?: boolean;
};

export const ABOUT_HERO = {
  label: "About",
  title: "Max Burlak",
  subtitle: "Product Design Lead. Builder. Based in Barcelona.",
};

export const ABOUT_BIO = {
  headline: "Who I am",
  paragraphs: [
    "14+ years designing products. 3x founding designer. Currently building ventures and consulting for B2B SaaS companies.",
    "I've led design at Default.com, Apollo.io, and P2P.org. Built design systems from scratch, shipped features that moved revenue metrics, and mentored designers across multiple teams.",
    "Now I split my time between consulting and building my own products — Pinnboards, Fliq, The First, mndfrnd, and Organicaaa.",
    "Based in Barcelona. Originally from Ukraine. I've worked remotely with teams across the US, Europe, and beyond.",
  ],
};

export const ABOUT_HOW_I_WORK = {
  headline: "How I work",
  paragraphs: [
    "I'm direct. I prefer async over meetings. I document decisions. I protect scope.",
    "I use AI daily — Claude, Cursor, Figma AI. Not experimenting. Working. It's changed how I operate: less time on production, more time on decisions that matter.",
    "I care about clarity. If something is confusing, it's probably wrong. I'd rather cut features than ship confusion.",
  ],
};

export const ABOUT_OUTSIDE_WORK = {
  headline: "Outside work",
  hobbies: [
    "DJing",
    "Photography",
    "Via Ferrata",
    "Scuba Diving",
    "Drone Pilot",
    "Cycling",
    "Padel",
    "Gym",
    "Hiking",
  ],
  countries: [
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇬🇪", name: "Georgia" },
    { flag: "🇦🇲", name: "Armenia" },
    { flag: "🇩🇴", name: "Dominican Republic" },
    { flag: "🇹🇭", name: "Thailand" },
    { flag: "🇷🇸", name: "Serbia" },
  ],
  languages: [
    "Russian (native)",
    "Ukrainian (native)",
    "English (professional)",
    "German (basic)",
    "Spanish (beginner)",
  ],
  mentorship: {
    intro:
      "ADPList mentor since 2023 — product design, founding designer roles, design systems, and B2B SaaS career growth.",
    stats: ["1000+ mentorship minutes", "25+ 1:1 sessions"],
    note: "Previously mentored designers at Default, Apollo.io, and startup teams.",
    profileUrl: "https://adplist.org/mentors/max-burlak-hehim",
  },
};

export const ABOUT_NOW = {
  headline: "Now",
  intro: "Elevating building skills. Shipping ventures. Staying dangerous.",
  focus: [
    "Building Pinnboards — design system control plane",
    "Co-building Fliq — professional social network",
    "Writing The First — playbook for founding designers",
    "Developing mndfrnd — CBT toolset",
    "Consulting for B2B SaaS companies",
    "Open to full-time, fractional, or contract roles",
  ],
  lastUpdated: "May 21, 2026",
};

export const ABOUT_CONNECT = {
  headline: "Connect",
  body: "Best way to reach me: email or DM.",
  contacts: [
    { label: "Email", display: "booorlak@gmail.com", href: "mailto:booorlak@gmail.com" },
    {
      label: "LinkedIn",
      display: "linkedin.com/in/maxburlak",
      href: "https://linkedin.com/in/maxburlak",
      external: true,
    },
    {
      label: "Instagram",
      display: "@multimaxo",
      href: "https://www.instagram.com/multimaxo",
      external: true,
    },
    {
      label: "YouTube",
      display: "@heyhimaxo",
      href: "https://www.youtube.com/@heyhimaxo",
      external: true,
    },
  ] satisfies AboutContactLink[],
};
