import { useEffect } from "react";
import { useWorksContent } from "../sanity/useWorksContent";
import { useCaseStudies, useFeedPosts } from "../sanity/CmsProvider";
import { canonicalUrl, getPageMeta } from "./getPageMeta";
import { OG_IMAGE_URL, SITE_NAME } from "./site";

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  content: string,
) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageSeo(pathname: string) {
  const { hero, allProjects } = useWorksContent();
  const caseStudies = useCaseStudies();
  const feedPosts = useFeedPosts();

  useEffect(() => {
    const meta = getPageMeta(pathname, { hero, allProjects, caseStudies }, { feedPosts });
    const canonical = canonicalUrl(meta.canonicalPath);
    const isHome = meta.canonicalPath === "/";

    document.title = meta.title;

    upsertMeta('meta[name="description"]', { name: "description" }, meta.description);
    upsertMeta('meta[name="robots"]', { name: "robots" }, meta.robots);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, meta.title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      meta.description,
    );
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, OG_IMAGE_URL);
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_US");
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, meta.title);
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      meta.description,
    );
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, OG_IMAGE_URL);

    if (isHome) {
      upsertMeta('meta[name="twitter:creator"]', { name: "twitter:creator" }, "@heyhimaxo");
    }

    upsertLink("canonical", canonical);

    document.documentElement.setAttribute(
      "data-seo-indexable",
      meta.robots.startsWith("index") ? "true" : "false",
    );
  }, [pathname, hero, allProjects, caseStudies, feedPosts]);
}
