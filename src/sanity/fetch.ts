import { sanityClient, isSanityConfigured } from "./client";
import { homePageQuery, siteSettingsQuery } from "./queries";
import type { CmsPayload, HomePage, SiteSettings } from "./types";

export async function fetchCms(): Promise<CmsPayload> {
  if (!sanityClient || !isSanityConfigured) {
    return { siteSettings: null, homePage: null };
  }

  const [siteSettings, homePage] = await Promise.all([
    sanityClient.fetch<SiteSettings | null>(siteSettingsQuery),
    sanityClient.fetch<HomePage | null>(homePageQuery),
  ]);

  return { siteSettings, homePage };
}
