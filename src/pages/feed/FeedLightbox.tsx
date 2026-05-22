import { useCallback, useEffect } from "react";
import { PortfolioImage } from "../../components/PortfolioImage";
import { SITE_FONT } from "../../components/site/siteTheme";

export type LightboxSlide = {
  src: string;
  alt?: string;
};

type FeedLightboxProps = {
  slides: LightboxSlide[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function FeedLightbox({ slides, index, onClose, onIndexChange }: FeedLightboxProps) {
  const slide = slides[index];

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + slides.length) % slides.length);
  }, [index, onIndexChange, slides.length]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % slides.length);
  }, [index, onIndexChange, slides.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [goNext, goPrev, onClose]);

  if (!slide) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
      onClick={onClose}
    >
      <button
        type="button"
        className={`${SITE_FONT} absolute right-4 top-4 z-10 rounded-full px-3 py-2 text-[13px] font-medium text-white/90 transition hover:bg-white/10 md:right-8 md:top-8`}
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        Close
      </button>

      {slides.length > 1 ? (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full px-3 py-4 text-2xl text-white/80 transition hover:bg-white/10 md:left-6"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full px-3 py-4 text-2xl text-white/80 transition hover:bg-white/10 md:right-6"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
          >
            ›
          </button>
          <p
            className={`${SITE_FONT} absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[13px] text-white/70`}
          >
            {index + 1} / {slides.length}
          </p>
        </>
      ) : null}

      <div
        className="relative flex max-h-[90vh] max-w-[min(1200px,100%)] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <PortfolioImage
          alt={slide.alt ?? ""}
          className="max-h-[90vh] max-w-full object-contain"
          src={slide.src}
        />
      </div>
    </div>
  );
}
