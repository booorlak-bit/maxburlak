import { sanityClient, isSanityConfigured } from "./client";
import {
  allCaseStudiesQuery,
  feedPostsQuery,
  homePageQuery,
  playgroundPageQuery,
  siteSettingsQuery,
  worksPageQuery,
} from "./queries";
import type { CaseStudy, CmsPayload, FeedPost, HomePage, SiteSettings, WorksPageCms } from "./types";
import type { PlaygroundPageCms } from "../playground/playgroundTypes";

export async function fetchCms(): Promise<CmsPayload> {
  if (!sanityClient || !isSanityConfigured) {
    return {
      siteSettings: null,
      homePage: null,
      worksPage: null,
      caseStudies: [],
      feedPosts: [],
      playgroundPage: null,
    };
  }

  const [siteSettings, homePage, worksPage, caseStudies, feedPosts, playgroundPage] = await Promise.all([
    sanityClient.fetch<SiteSettings | null>(siteSettingsQuery),
    sanityClient.fetch<HomePage | null>(homePageQuery),
    sanityClient.fetch<WorksPageCms | null>(worksPageQuery),
    sanityClient.fetch<CaseStudy[]>(allCaseStudiesQuery),
    sanityClient.fetch<FeedPost[]>(feedPostsQuery),
    sanityClient.fetch<PlaygroundPageCms | null>(playgroundPageQuery),
  ]);

  return {
    siteSettings,
    homePage,
    worksPage,
    caseStudies: caseStudies ?? [],
    feedPosts: feedPosts ?? [],
    playgroundPage,
  };
}
