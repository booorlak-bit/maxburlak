/**
 * Sanity is read at build time only (scripts/fetch-cms.mjs). The browser never
 * talks to the Sanity API and never receives a token; it only needs the
 * project id + dataset to build CDN image URLs.
 */
export const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID ?? "1r0eu2jx";
export const sanityDataset = import.meta.env.VITE_SANITY_DATASET ?? "production";

export const isSanityConfigured = Boolean(sanityProjectId);
