import { useLocation } from "react-router";
import { usePageSeo } from "../seo/usePageSeo";

/** Syncs document title and meta tags when the client route changes. */
export function SeoManager() {
  const { pathname } = useLocation();
  usePageSeo(pathname);
  return null;
}
