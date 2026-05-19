import {
  BOOK_CALL_URL,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  KNOWS_ABOUT,
  OG_IMAGE_URL,
  RESUME_URL,
  SAME_AS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "./site";

export function buildHomeJsonLd(): Record<string, unknown> {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_NAME,
        url: SITE_URL,
        image: OG_IMAGE_URL,
        email: `mailto:${CONTACT_EMAIL}`,
        jobTitle: "Product Designer",
        description: DEFAULT_DESCRIPTION,
        knowsAbout: [...KNOWS_ABOUT],
        sameAs: [...SAME_AS],
        worksFor: [
          { "@type": "Organization", name: "Default.com" },
          { "@type": "Organization", name: "Apollo.io" },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME} — ${SITE_TAGLINE}`,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        provider: { "@id": personId },
        areaServed: "Worldwide",
        serviceType: [
          "Product design",
          "Design systems",
          "Founding designer engagements",
          "AI product design consulting",
        ],
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl: BOOK_CALL_URL,
            availableLanguage: "en",
          },
          {
            "@type": "ServiceChannel",
            serviceUrl: `mailto:${CONTACT_EMAIL}`,
            availableLanguage: "en",
          },
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: DEFAULT_DESCRIPTION,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": websiteId },
      },
      {
        "@type": "DigitalDocument",
        name: "Max Burlak — Resume (CV)",
        url: RESUME_URL,
        encodingFormat: "application/pdf",
        author: { "@id": personId },
      },
    ],
  };
}
