/** JSON-LD graphs. Every page carries the same Person node (@id) so search
 * engines and LLMs resolve one entity for "Max Burlak". */
import {
  BOOK_CALL_URL,
  CAREER,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  JOB_TITLE,
  KNOWS_ABOUT,
  LOCATION,
  OG_IMAGE_URL,
  ONE_LINER,
  RESUME_URL,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "../../src/seo/site.ts";
import { FAQ_ITEMS } from "../../src/content/faq.ts";
import { url } from "./markdown.mjs";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: OG_IMAGE_URL,
    email: `mailto:${CONTACT_EMAIL}`,
    jobTitle: JOB_TITLE,
    description: `${ONE_LINER} 3× founding designer with 13+ years in product design; led design at Default.com and Apollo.io.`,
    knowsAbout: [...KNOWS_ABOUT],
    knowsLanguage: ["English", "Russian", "Ukrainian"],
    sameAs: [...SAME_AS],
    address: { "@type": "PostalAddress", addressLocality: LOCATION.city, addressCountry: LOCATION.countryCode },
    homeLocation: { "@type": "Place", name: `${LOCATION.city}, ${LOCATION.country}` },
    hasOccupation: {
      "@type": "Occupation",
      name: JOB_TITLE,
      occupationLocation: { "@type": "City", name: LOCATION.city },
      skills: KNOWS_ABOUT.join(", "),
    },
    alumniOf: CAREER.map((c) => ({
      "@type": "OrganizationRole",
      roleName: c.role,
      startDate: c.start,
      endDate: c.end,
      alumniOf: { "@type": "Organization", name: c.company, url: c.url },
    })),
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

function breadcrumb(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.url })),
  };
}

const graph = (nodes) => JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }, null, 2);

export function homeJsonLd() {
  return graph([
    websiteNode(),
    personNode(),
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: `${SITE_NAME} — ${JOB_TITLE}`,
      mainEntity: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBSITE_ID },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${SITE_NAME} — founding product design for AI and B2B SaaS startups`,
      url: `${SITE_URL}/`,
      description: DEFAULT_DESCRIPTION,
      provider: { "@id": PERSON_ID },
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressLocality: LOCATION.city, addressCountry: LOCATION.countryCode },
      serviceType: ["Founding product designer", "Fractional design leadership", "Product design", "Design systems", "AI product design"],
      availableChannel: [
        { "@type": "ServiceChannel", serviceUrl: BOOK_CALL_URL, availableLanguage: "en" },
        { "@type": "ServiceChannel", serviceUrl: `mailto:${CONTACT_EMAIL}`, availableLanguage: "en" },
      ],
    },
    {
      "@type": "DigitalDocument",
      name: `${SITE_NAME} — Resume (CV)`,
      url: RESUME_URL,
      encodingFormat: "application/pdf",
      author: { "@id": PERSON_ID },
    },
  ]);
}

export function sectionJsonLd(page, { profile = false } = {}) {
  const pageUrl = url(page.route);
  return graph([
    {
      "@type": profile ? "ProfilePage" : "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.rawTitle,
      description: page.rawDescription,
      isPartOf: { "@id": WEBSITE_ID },
      ...(profile ? { mainEntity: { "@id": PERSON_ID } } : { about: { "@id": PERSON_ID } }),
    },
    personNode(),
    breadcrumb([
      { name: "Home", url: `${SITE_URL}/` },
      { name: page.crumb, url: pageUrl },
    ]),
  ]);
}

export function faqJsonLd(page) {
  const pageUrl = url(page.route);
  return graph([
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      name: page.rawTitle,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    personNode(),
    breadcrumb([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "FAQ", url: pageUrl },
    ]),
  ]);
}

export function caseStudyJsonLd(page, cs) {
  const pageUrl = url(page.route);
  const metrics = (cs.metrics ?? []).map((m) => `${m.value} ${m.label}`);
  return graph([
    {
      "@type": "Article",
      "@id": `${pageUrl}#case-study`,
      headline: `${cs.client}: ${cs.pageTitle || cs.headline}`,
      name: page.rawTitle,
      description: page.rawDescription,
      abstract: [cs.lede, metrics.length ? `Results: ${metrics.join("; ")}.` : ""].filter(Boolean).join(" "),
      url: pageUrl,
      ...(page.ogImage ? { image: page.ogImage } : {}),
      ...(cs._updatedAt ? { dateModified: cs._updatedAt } : {}),
      ...(cs.years ? { temporalCoverage: cs.years.replace(/\s*\(.*\)$/, "") } : {}),
      ...(cs.tags?.length ? { keywords: cs.tags.join(", ") } : {}),
      genre: "Product design case study",
      author: { "@id": PERSON_ID },
      creator: { "@id": PERSON_ID },
      about: { "@type": "Organization", name: cs.client, ...(cs.visitUrl ? { url: cs.visitUrl } : {}) },
      isPartOf: { "@id": WEBSITE_ID },
      mainEntityOfPage: pageUrl,
    },
    personNode(),
    breadcrumb([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Works", url: url("/works") },
      { name: cs.client, url: pageUrl },
    ]),
  ]);
}

export function feedPostJsonLd(page) {
  const pageUrl = url(page.route);
  return graph([
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#post`,
      headline: page.rawTitle.replace(` — ${SITE_NAME}`, ""),
      description: page.rawDescription,
      url: pageUrl,
      ...(page.ogImage ? { image: page.ogImage } : {}),
      ...(page.published ? { datePublished: page.published } : {}),
      ...(page.updated ? { dateModified: page.updated } : {}),
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBSITE_ID },
      mainEntityOfPage: pageUrl,
    },
    personNode(),
    breadcrumb([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Feed", url: url("/feed") },
      { name: page.rawTitle.replace(` — ${SITE_NAME}`, ""), url: pageUrl },
    ]),
  ]);
}
