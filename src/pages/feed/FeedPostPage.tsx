import { Link } from "react-router";
import { getSiteTheme, SITE_FONT } from "../../components/site/siteTheme";
import { useFeedPosts } from "../../sanity/CmsProvider";
import { findFeedPostBySlug } from "../../sanity/feedUtils";
import { FeedContent } from "./FeedContent";
import { FeedPostActions, FeedTags } from "./FeedPostActions";

type FeedPostPageProps = {
  isDark: boolean;
  slug: string;
};

export function FeedBackLink({ theme: t }: { theme: ReturnType<typeof getSiteTheme> }) {
  return (
    <nav className={`${SITE_FONT} ${t.muted} flex flex-wrap items-center gap-2 text-[13px] font-light leading-[18px]`} aria-label="Breadcrumb">
      <Link to="/" className={`${t.muted} no-underline transition-colors hover:underline`}>
        Index
      </Link>
      <span aria-hidden>/</span>
      <Link to="/feed" className={`${t.muted} no-underline transition-colors hover:underline`}>
        Feed
      </Link>
    </nav>
  );
}

export function FeedPostPage({ isDark, slug }: FeedPostPageProps) {
  const t = getSiteTheme(isDark);
  const posts = useFeedPosts();
  const post = findFeedPostBySlug(posts, slug);

  if (!post) {
    return (
      <div
        data-route="feed-post"
        className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
      >
        <div className="mx-auto flex w-full max-w-[900px] flex-col gap-8 px-4 py-20 md:px-8">
          <FeedBackLink theme={t} />
          <Link
            to="/feed"
            className={`${SITE_FONT} ${t.muted} text-[13px] font-light leading-[18px] no-underline transition-colors hover:underline`}
          >
            ← Go to feed
          </Link>
          <p className={`${SITE_FONT} ${t.muted} ${t.body}`}>Post not found.</p>
        </div>
      </div>
    );
  }

  const title = post.title?.trim();

  return (
    <div
      data-route="feed-post"
      className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-8 px-4 pb-20 pt-8 md:gap-10 md:px-8 md:pb-28 md:pt-12">
        <FeedBackLink theme={t} />

        <div className="mx-auto flex w-full max-w-[520px] flex-col gap-4">
          {title ? (
            <h1 className={`${SITE_FONT} ${t.text} text-[18px] font-medium leading-[24px]`}>{title}</h1>
          ) : null}
          <FeedTags tags={post.tags} theme={t} />
          <FeedContent content={post.content} theme={t} isDark={isDark} mode="full" />
          <div className="flex flex-col gap-4 pt-2">
            <FeedPostActions post={post} theme={t} />
            <Link
              to="/feed"
              className={`${SITE_FONT} ${t.muted} text-[13px] font-light leading-[18px] no-underline transition-colors hover:underline`}
            >
              ← Go to feed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
