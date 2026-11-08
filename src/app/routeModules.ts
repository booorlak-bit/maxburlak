/**
 * Route-level code splitting that plays well with prerendering.
 *
 * Each secondary page lives in its own chunk. `preloadRoute()` loads the chunk
 * for the current URL before React renders; after that, `lazyRoute` hands React
 * a synchronously-resolved thenable, so the prerendered HTML is replaced by the
 * same markup instead of a Suspense fallback.
 */
import { lazy, type ComponentType } from "react";
import { parseFeedPostSlug, parseWorksCaseStudySlug } from "../nav/routes";

type Loader = () => Promise<Record<string, unknown>>;

const loaders = {
  works: () => import("../pages/WorksPage"),
  approach: () => import("../pages/ApproachPage"),
  ventures: () => import("../pages/VenturesPage"),
  feed: () => import("../pages/feed/FeedPage"),
  feedPost: () => import("../pages/feed/FeedPostPage"),
  about: () => import("../pages/AboutPage"),
  playground: () => import("../pages/PlaygroundPage"),
  privacy: () => import("../pages/PrivacyPage"),
} satisfies Record<string, Loader>;

type RouteKey = keyof typeof loaders;
const loaded: Partial<Record<RouteKey, Record<string, unknown>>> = {};

function load(key: RouteKey) {
  return loaders[key]().then((mod) => {
    loaded[key] = mod as Record<string, unknown>;
    return mod;
  });
}

export function routeKeyFor(pathname: string): RouteKey | null {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/works" || parseWorksCaseStudySlug(path)) return "works";
  if (path === "/approach") return "approach";
  if (path === "/ventures") return "ventures";
  if (path === "/feed") return "feed";
  if (parseFeedPostSlug(path)) return "feedPost";
  if (path === "/about") return "about";
  if (path === "/playground") return "playground";
  if (path === "/privacy") return "privacy";
  return null;
}

export function preloadRoute(pathname: string): Promise<unknown> {
  const key = routeKeyFor(pathname);
  return key ? load(key).catch(() => undefined) : Promise.resolve();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazyRoute<P = any>(key: RouteKey, exportName: string) {
  return lazy<ComponentType<P>>(() => {
    const mod = loaded[key];
    if (mod) {
      const resolved = { default: mod[exportName] as ComponentType<P> };
      // Sync thenable: React.lazy marks it resolved without suspending.
      return { then: (resolve: (value: typeof resolved) => void) => resolve(resolved) } as unknown as Promise<typeof resolved>;
    }
    return load(key).then((m) => ({ default: (m as Record<string, unknown>)[exportName] as ComponentType<P> }));
  });
}
