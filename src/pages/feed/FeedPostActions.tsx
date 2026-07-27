import { useState } from "react";
import { usePostHog } from "@posthog/react";
import { SITE_FONT, type SiteTheme } from "../../components/site/siteTheme";
import { getFeedPostPath } from "../../sanity/feedUtils";
import type { FeedPost } from "../../sanity/types";

function CopyLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type FeedPostActionsProps = {
  post: FeedPost;
  theme: SiteTheme;
  showReadMore?: boolean;
  expanded?: boolean;
  onToggleExpand?: () => void;
};

export function FeedPostActions({
  post,
  theme: t,
  showReadMore,
  expanded = false,
  onToggleExpand,
}: FeedPostActionsProps) {
  const posthog = usePostHog();
  const [copied, setCopied] = useState(false);
  const detailPath = getFeedPostPath(post);

  const copyLink = async () => {
    if (!detailPath) return;
    const url = `${window.location.origin}${detailPath}`;
    try {
      await navigator.clipboard.writeText(url);
      posthog?.capture("feed_post_link_copied", {
        post_slug: post.slug?.current,
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex w-full items-center gap-4">
      <div className="min-w-0 flex-1">
        {showReadMore && onToggleExpand ? (
          <button
            type="button"
            onClick={onToggleExpand}
            aria-expanded={expanded}
            className={`${SITE_FONT} ${t.muted} border-0 bg-transparent p-0 text-left text-[13px] font-normal leading-[18px] transition-colors hover:underline`}
          >
            {expanded ? "Read less..." : "Read more..."}
          </button>
        ) : null}
      </div>
      {detailPath ? (
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "Link copied" : "Copy link"}
          className={`${SITE_FONT} ${t.muted} ml-auto inline-flex shrink-0 items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] font-normal leading-[18px] transition-colors hover:underline`}
        >
          {copied ? (
            <>
              <CheckLinkIcon />
              <span>Link copied</span>
            </>
          ) : (
            <>
              <CopyLinkIcon />
              <span>Copy link</span>
            </>
          )}
        </button>
      ) : null}
    </div>
  );
}

export function FeedTags({ tags, theme: t }: { tags?: string[]; theme: SiteTheme }) {
  if (!tags?.length) return null;

  return (
    <div className={`${SITE_FONT} ${t.feedTag} flex flex-wrap gap-4 text-[13px] font-normal leading-[18px]`}>
      {tags.map((tag) => {
        const label = tag.trim().startsWith("#") ? tag.trim() : `#${tag.trim()}`;
        return (
          <span key={label} className="shrink-0 font-normal">
            {label}
          </span>
        );
      })}
    </div>
  );
}
