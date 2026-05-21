import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { isSanityConfigured } from "./client";
import { fetchCms } from "./fetch";
import type { CmsPayload, CaseStudy, HomePage, SiteSettings, WorksPageCms } from "./types";

type CmsContextValue = CmsPayload & {
  isLoading: boolean;
  isConfigured: boolean;
};

const CmsContext = createContext<CmsContextValue>({
  siteSettings: null,
  homePage: null,
  worksPage: null,
  caseStudies: [],
  playgroundPage: null,
  isLoading: false,
  isConfigured: false,
});

export function CmsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CmsPayload>({
    siteSettings: null,
    homePage: null,
    worksPage: null,
    caseStudies: [],
    playgroundPage: null,
  });
  const [isLoading, setIsLoading] = useState(isSanityConfigured);

  useEffect(() => {
    if (!isSanityConfigured) return;

    let cancelled = false;
    setIsLoading(true);

    fetchCms()
      .then((payload) => {
        if (!cancelled) setData(payload);
      })
      .catch((err) => {
        console.error("[cms] Failed to load Sanity content", err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      ...data,
      isLoading,
      isConfigured: isSanityConfigured,
    }),
    [data, isLoading],
  );

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
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
