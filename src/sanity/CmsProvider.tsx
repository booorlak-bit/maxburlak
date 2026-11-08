import { createContext, useContext, type ReactNode } from "react";
import snapshot from "../generated/cms-snapshot.json";
import { isSanityConfigured } from "./client";
import type { CmsPayload, CaseStudy, FeedPost, HomePage, SiteSettings, WorksPageCms } from "./types";

type CmsContextValue = CmsPayload & {
  isLoading: boolean;
  isConfigured: boolean;
};

/** CMS content is fetched once at build time (scripts/fetch-cms.mjs). */
const cmsValue: CmsContextValue = {
  ...(snapshot as unknown as CmsPayload),
  isLoading: false,
  isConfigured: isSanityConfigured,
};

const CmsContext = createContext<CmsContextValue>(cmsValue);

export function CmsProvider({ children }: { children: ReactNode }) {
  return <CmsContext.Provider value={cmsValue}>{children}</CmsContext.Provider>;
}

export function useCms() {
  return useContext(CmsContext);
}

export function useSiteSettings(): SiteSettings | null {
  return useCms().siteSettings;
}

export function useHomePage(): HomePage | null {
  return useCms().homePage;
}

export function useWorksPageCms(): WorksPageCms | null {
  return useCms().worksPage;
}

export function useCaseStudies(): CaseStudy[] {
  return useCms().caseStudies;
}

export function usePlaygroundPageCms() {
  return useCms().playgroundPage;
}

export function useFeedPosts(): FeedPost[] {
  return useCms().feedPosts;
}
