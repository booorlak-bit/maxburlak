import { useMemo, useState } from "react";
import { PortfolioImage } from "../../components/PortfolioImage";
import { SITE_FONT, type SiteTheme } from "../../components/site/siteTheme";
import { urlForSrc } from "../../sanity/image";
import type { FeedContentBlock } from "../../sanity/types";
import { isTextBlock } from "../../sanity/feedUtils";
import { FeedLightbox, type LightboxSlide } from "./FeedLightbox";
import { FeedPortableText } from "./FeedPortableText";
import type { SanityBlock } from "../../sanity/portableText";

type FeedContentProps = {
  content: FeedContentBlock[] | undefined;
  theme: SiteTheme;
  isDark: boolean;
  mode?: "full" | "preview";
  previewBlockCount?: number;
  includeMedia?: boolean;
  includeText?: boolean;
};

function FeedImage({
  block,
  onOpenLightbox,
}: {
  block: Extract<FeedContentBlock, { _type: "feedImageBlock" }>;
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}) {
  const src = urlForSrc(block.image, 1040);
  if (!src) return null;

  const canOpen = block.allowFullscreen !== false && !block.static;
  const slide: LightboxSlide = { src, alt: block.alt };

  return (
    <figure className="w-full">
      {canOpen ? (
        <button
          type="button"
          className="block w-full cursor-zoom-in overflow-hidden rounded-[12px] border-0 bg-transparent p-0"
          onClick={() => onOpenLightbox([slide], 0)}
        >
          <PortfolioImage alt={block.alt ?? ""} className="h-auto w-full object-cover" src={src} />
        </button>
      ) : (
        <PortfolioImage
          alt={block.alt ?? ""}
          className="h-auto w-full rounded-[12px] object-cover"
          src={src}
        />
      )}
    </figure>
  );
}

function FeedVideo({ block }: { block: Extract<FeedContentBlock, { _type: "feedVideoBlock" }> }) {
  const poster = urlForSrc(block.poster, 1040);
  if (!block.videoUrl) return null;

  return (
    <figure className="w-full overflow-hidden rounded-[12px]">
      <video className="h-auto w-full" controls playsInline preload="metadata" poster={poster} aria-label={block.alt ?? "Video"}>
        <source src={block.videoUrl} />
      </video>
    </figure>
  );
}

function FeedGallery({
  block,
  onOpenLightbox,
}: {
  block: Extract<FeedContentBlock, { _type: "feedGalleryBlock" }>;
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}) {
  const slides = useMemo(
    () =>
      (block.images ?? [])
        .map((item) => {
          const src = urlForSrc(item.image, 1200);
          if (!src) return null;
          return { src, alt: item.alt } satisfies LightboxSlide;
        })
        .filter(Boolean) as LightboxSlide[],
    [block.images],
  );

  if (slides.length === 0) return null;
  const canOpen = block.allowFullscreen !== false;

  if (slides.length === 1) {
    return (
      <figure className="w-full">
        {canOpen ? (
          <button
            type="button"
            className="block w-full cursor-zoom-in overflow-hidden rounded-[12px] border-0 bg-transparent p-0"
            onClick={() => onOpenLightbox(slides, 0)}
          >
            <PortfolioImage alt={slides[0].alt ?? ""} className="h-auto w-full object-cover" src={slides[0].src} />
          </button>
        ) : (
          <PortfolioImage
            alt={slides[0].alt ?? ""}
            className="h-auto w-full rounded-[12px] object-cover"
            src={slides[0].src}
          />
        )}
      </figure>
    );
  }

  return (
    <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
      {slides.map((slide, index) => (
        <button
          key={`${slide.src}-${index}`}
          type="button"
          className={`overflow-hidden rounded-[10px] border-0 bg-transparent p-0 ${canOpen ? "cursor-zoom-in" : ""}`}
          onClick={() => (canOpen ? onOpenLightbox(slides, index) : undefined)}
        >
          <PortfolioImage alt={slide.alt ?? ""} className="aspect-square w-full object-cover" src={slide.src} />
        </button>
      ))}
    </div>
  );
}

function FeedLinkCard({
  block,
  theme: t,
}: {
  block: Extract<FeedContentBlock, { _type: "feedLinkCard" }>;
  theme: SiteTheme;
}) {
  if (!block.url) return null;
  const imageSrc = urlForSrc(block.image, 800);

  return (
    <a
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${t.transition} flex w-full flex-col overflow-hidden rounded-[14px] border border-solid no-underline ${t.borderHairline} hover:opacity-90`}
    >
      {imageSrc ? <PortfolioImage alt="" className="h-[180px] w-full object-cover" src={imageSrc} /> : null}
      <div className="flex flex-col gap-1 px-4 py-3">
        <p className={`${SITE_FONT} ${t.text} ${t.bodyMedium}`}>
          {block.title || block.url}
        </p>
        {block.description ? (
          <p className={`${SITE_FONT} ${t.muted} ${t.body}`}>{block.description}</p>
        ) : null}
        <p className={`${SITE_FONT} ${t.muted} text-[12px] font-light leading-[16px]`}>{block.url}</p>
      </div>
    </a>
  );
}

export function FeedContent({
  content,
  theme: t,
  isDark,
  mode = "full",
  previewBlockCount = 4,
  includeMedia = true,
  includeText = true,
}: FeedContentProps) {
  const [lightbox, setLightbox] = useState<{ slides: LightboxSlide[]; index: number } | null>(null);
  let textBlockIndex = 0;

  const openLightbox = (slides: LightboxSlide[], index: number) => {
    setLightbox({ slides, index });
  };

  const blocks = content ?? [];

  return (
    <>
      <div className="flex w-full flex-col gap-5">
        {blocks.map((block, index) => {
          const key = block._key ?? `${block._type}-${index}`;

          if (isTextBlock(block)) {
            if (!includeText) return null;
            if (mode === "preview") {
              if (textBlockIndex >= previewBlockCount) return null;
              textBlockIndex += 1;
            }
            return <FeedPortableText key={key} blocks={[block as SanityBlock]} theme={t} />;
          }

          if (!includeMedia) return null;

          if (block._type === "feedImageBlock") {
            return <FeedImage key={key} block={block} onOpenLightbox={openLightbox} />;
          }
          if (block._type === "feedVideoBlock") {
            return <FeedVideo key={key} block={block} />;
          }
          if (block._type === "feedGalleryBlock") {
            return <FeedGallery key={key} block={block} onOpenLightbox={openLightbox} />;
          }
          if (block._type === "feedLinkCard") {
            return <FeedLinkCard key={key} block={block} theme={t} />;
          }
          return null;
        })}
      </div>
      {lightbox ? (
        <FeedLightbox
          slides={lightbox.slides}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndexChange={(index) => setLightbox((prev) => (prev ? { ...prev, index } : null))}
        />
      ) : null}
    </>
  );
}
