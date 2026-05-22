import type { FeedContentBlock, FeedPost } from "./types";
import type { SanityBlock } from "./portableText";

export function getFeedPostSlug(post: FeedPost): string | null {
  return post.slug?.current?.trim() || null;
}

export function getFeedPostPath(post: FeedPost): string | null {
  const slug = getFeedPostSlug(post);
  return slug ? `/feed/${slug}` : null;
}

export function formatFeedTag(tag: string): string {
  const trimmed = tag.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
}

export function isTextBlock(block: FeedContentBlock): block is SanityBlock & { _type: "block" } {
  return block._type === "block";
}

export function splitFeedContent(content: FeedContentBlock[] | undefined) {
  const mediaBlocks: FeedContentBlock[] = [];
  const textBlocks: SanityBlock[] = [];

  for (const block of content ?? []) {
    if (isTextBlock(block)) textBlocks.push(block);
    else mediaBlocks.push(block);
  }

  return { mediaBlocks, textBlocks };
}

export function truncateTextBlocks(blocks: SanityBlock[], maxBlocks: number): SanityBlock[] {
  if (maxBlocks <= 0) return [];
  return blocks.filter((b) => b._type === "block").slice(0, maxBlocks);
}

export function feedPostHasMoreOnList(post: FeedPost): boolean {
  if (post.layout === "titleOnly") return Boolean(getFeedPostSlug(post) && post.content?.length);
  const { textBlocks } = splitFeedContent(post.content);
  const previewCount = post.previewBlockCount ?? 4;
  return textBlocks.length > previewCount;
}

export function findFeedPostBySlug(posts: FeedPost[], slug: string): FeedPost | undefined {
  return posts.find((post) => getFeedPostSlug(post) === slug);
}
