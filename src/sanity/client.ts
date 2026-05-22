import { createClient, type SanityClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET ?? "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? "2024-01-01";
const token = import.meta.env.VITE_SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId);

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      token: token || undefined,
      useCdn: import.meta.env.PROD && Boolean(token),
      perspective: "published",
    })
  : null;
