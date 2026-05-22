import { getSiteTheme, SITE_FONT } from "../../components/site/siteTheme";
import { useCms } from "../../sanity/CmsProvider";
import { FeedPostCard } from "./FeedPostCard";

type FeedPageProps = {
  isDark: boolean;
};

export function FeedPage({ isDark }: FeedPageProps) {
  const t = getSiteTheme(isDark);
  const { feedPosts: posts, isLoading, isConfigured } = useCms();

  return (
    <div
      data-route="feed"
      className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col px-4 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12">
        <h1
          className={`${SITE_FONT} ${t.text} mx-auto w-full max-w-[520px] text-[22px] font-medium leading-[30px] tracking-[-0.2px]`}
        >
          Feed
        </h1>

        {isLoading ? (
          <p className={`${SITE_FONT} ${t.muted} mx-auto mt-16 w-full max-w-[520px] text-[15px] font-light leading-[20px]`}>
            Loading…
          </p>
        ) : posts.length === 0 ? (
          <p className={`${SITE_FONT} ${t.muted} mx-auto mt-16 w-full max-w-[520px] text-[15px] font-light leading-[20px]`}>
            {isConfigured
              ? "No posts yet. Publish feed posts in Sanity Studio to see them here."
              : "CMS not configured. Set VITE_SANITY_PROJECT_ID and VITE_SANITY_API_READ_TOKEN in .env."}
          </p>
        ) : (
          <div className="mx-auto mt-16 flex w-full max-w-[520px] flex-col gap-16">
            {posts.map((post) => (
              <FeedPostCard key={post._id} post={post} theme={t} isDark={isDark} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
