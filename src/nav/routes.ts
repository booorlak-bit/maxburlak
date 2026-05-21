export const NAV_ROUTES = [
  { label: "Index", path: "/" },
  { label: "Works", path: "/works" },
  { label: "Approach", path: "/approach" },
  { label: "Ventures", path: "/ventures" },
  { label: "Feed", path: "/feed" },
  { label: "Playground", path: "/playground" },
  { label: "About", path: "/about" },
] as const;

export type NavLabel = (typeof NAV_ROUTES)[number]["label"];

export function isNavPath(pathname: string): boolean {
  return NAV_ROUTES.some((r) => r.path === pathname);
}

export function placeholderTitleForPath(pathname: string): string | null {
  if (pathname === "/" || pathname === "") return null;
  const hit = NAV_ROUTES.find((r) => r.path === pathname);
  return hit ? hit.label : null;
}

const WORKS_CASE_STUDY_RE = /^\/works\/([a-z0-9-]+)$/;

export function parseWorksCaseStudySlug(pathname: string): string | null {
  const match = pathname.match(WORKS_CASE_STUDY_RE);
  return match?.[1] ?? null;
}

export function isAllowedPath(pathname: string): boolean {
  if (isNavPath(pathname)) return true;
  return parseWorksCaseStudySlug(pathname) !== null;
}
