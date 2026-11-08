import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityDataset, sanityProjectId } from "./client";

const builder = sanityProjectId
  ? createImageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset })
  : null;

export function urlFor(source: SanityImageSource | undefined) {
  if (!builder || !source) return null;
  return builder.image(source).auto("format").quality(85);
}

export function urlForSrc(source: SanityImageSource | undefined, width?: number) {
  const url = urlFor(source);
  if (!url) return undefined;
  if (width) return url.width(width).url();
  return url.url();
}
