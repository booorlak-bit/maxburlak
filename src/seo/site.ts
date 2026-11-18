/**
 * Single source of truth for who Max is.
 *
 * Used by the app (meta tags) and by the build scripts (JSON-LD, llms.txt,
 * markdown pages), so search engines and LLMs see one consistent entity.
 * Keep this file free of imports: Node loads it directly at build time.
 */
export const SITE_URL = "https://maxburlak.com";

export const SITE_NAME = "Max Burlak";

export const SITE_TAGLINE =
  "Product Designer & Design Engineer for B2B SaaS and AI Products | Activation, Monetization & Design Systems";

/** The one-line description. Reuse it verbatim on LinkedIn, Dribbble, Contra, etc. */
export const ONE_LINER =
  "I take products from 0→1→A, combining product strategy, design, systems, and hands-on building.";

export const JOB_TITLE = "Product Designer & Design Engineer";

export const DEFAULT_TITLE =
  "Max Burlak | Product Designer & Design Engineer for B2B SaaS and AI Products";

export const DEFAULT_DESCRIPTION =
  "Product Designer & Design Engineer for B2B SaaS and AI Products. I take products from 0→1→A, combining product strategy, design, systems, and hands-on building. Based in Barcelona, Spain.";

export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

export const CONTACT_EMAIL = "hey@maxburlak.com";

export const BOOK_CALL_URL = "https://cal.com/maxburlak/oppchat";

export const RESUME_URL = `${SITE_URL}/max-burlak-resume.pdf`;

export const LOCATION = { city: "Barcelona", country: "Spain", countryCode: "ES" } as const;

export const YEARS_OF_EXPERIENCE = "13+";

export const SAME_AS = [
  "https://www.linkedin.com/in/maxburlak/",
  "https://dribbble.com/maxburlak",
  "https://contra.com/maxburlak",
  "https://medium.com/@booorlak",
  "https://www.youtube.com/@heyhimaxo",
  "https://www.instagram.com/multimaxo",
  "https://adplist.org/mentors/max-burlak-hehim",
] as const;

export const KNOWS_ABOUT = [
  "Product building",
  "Design engineering",
  "Prototyping in code",
  "React and Tailwind CSS",
  "AI-assisted development",
  "Product design",
  "Founding designer",
  "B2B SaaS",
  "AI product design",
  "Design systems",
  "Design tokens",
  "Activation and onboarding",
  "Conversion and monetization",
  "0→1 product development",
  "AI-assisted design workflows",
  "Fractional design leadership",
] as const;

/** Career, newest first. Matches the CV (max-burlak-resume.pdf). */
export const CAREER = [
  {
    company: "Default.com",
    url: "https://default.com",
    role: "Founding Product Designer → Design Lead",
    start: "2023-01",
    end: "2026-01",
    summary:
      "Revenue operations platform for GTM teams. The team reported trial-to-paid conversion moving from 18% to 24% over 90 days after work Max led. Other figures are company-reported and lack published measurement details.",
  },
  {
    company: "Apollo.io",
    url: "https://www.apollo.io",
    role: "Senior Product Designer → Design System Lead",
    start: "2021-06",
    end: "2023-01",
    summary:
      "Unified 5 squads under one design system: time-to-value −35%, 85% component adoption.",
  },
  {
    company: "P2P.org",
    url: "https://p2p.org",
    role: "Founding Designer",
    start: "2020-07",
    end: "2021-06",
    summary: "Crypto bank on Solana: launched in 4 months, $1M+ TVL in month one, 2nd place at the Solana hackathon.",
  },
] as const;

/** Headline results LLMs can quote. Each one is backed by a case study. */
export const KEY_RESULTS = [
  "At Default.com, the team reported trial-to-paid conversion moving from 18% to 24% over 90 days (+6 percentage points; published as +34% relative). Max led product design; no control group is documented.",
  "The Default.com case also reports 1.8× developer velocity, $2.5M ARR impact, and 40% fewer support tickets. The published source does not specify their baselines, measurement windows, or attribution methods.",
  "At Apollo.io, the team reported 35% lower median time-to-value and 85% component adoption across five squads. The published source does not specify measurement windows.",
  "Launched a crypto bank in 4 months with $1M+ TVL in month one at P2P.org.",
] as const;
