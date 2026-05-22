import { useState } from "react";
import { Link } from "react-router";
import { SITE_FONT, type SiteTheme } from "../../components/site/siteTheme";
import { feedPostHasMoreOnList, getFeedPostPath } from "../../sanity/feedUtils";
import type { FeedPost } from "../../sanity/types";
import { FeedContent } from "./FeedContent";
import { FeedPostActions, FeedTags } from "./FeedPostActions";

type FeedPostCardProps = {
  post: FeedPost;
  theme: SiteTheme;
  isDark: boolean;
};

export function FeedPostCard({ post, theme: t, isDark }: FeedPostCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailPath = getFeedPostPath(post);
  const titleOnly = post.layout === "titleOnly";
  const previewCount = post.previewBlockCount ?? 4;
  const hasMore = feedPostHasMoreOnList(post);
  const title = post.title?.trim();
  const showTextBody = !titleOnly && (expanded || previewCount > 0);

  return (
    <article className="flex w-full flex-col items-center gap-5">
      <div className="flex w-full max-w-[520px] flex-col gap-4">
        {!titleOnly ? (
          <FeedContent content={post.content} theme={t} isDark={isDark} includeText={false} />
        ) : null}

        {title ? (
          detailPath ? (
            <Link to={detailPath} className="no-underline">
              <h2
                className={`${SITE_FONT} ${t.text} text-[18px] font-medium leading-[24px] tracking-[-0.2px] transition-opacity hover:opacity-80`}
              >
                {title}
              </h2>
            </Link>
          ) : (
            <h2 className={`${SITE_FONT} ${t.text} text-[18px] font-medium leading-[24px] tracking-[-0.2px]`}>{title}</h2>
          )
        ) : null}

        <FeedTags tags={post.tags} theme={t} />

        {showTextBody ? (
          <FeedContent
            content={post.content}
            theme={t}
            isDark={isDark}
            mode={hasMore && !expanded ? "preview" : "full"}
            previewBlockCount={previewCount}
            includeMedia={false}
          />
        ) : null}

        {titleOnly && expanded ? (
          <FeedContent content={post.content} theme={t} isDark={isDark} mode="full" />
        ) : null}

        <FeedPostActions
          post={post}
          theme={t}
          showReadMore={hasMore}
          expanded={expanded}
          onToggleExpand={() => setExpanded((value) => !value)}
        />
      </div>
    </article>
  );
}
