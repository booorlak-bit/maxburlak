import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

const STORY_SLIDE_MS = 10_000;

export type StorySlide = {
  bg: string;
  iconSrc?: string;
  title: string;
  subtitle: string;
  body: string;
  caption: string;
};

type StoriesProps = {
  className?: string;
  isDark?: boolean;
  slides: readonly StorySlide[];
  renderIcon?: (slide: StorySlide) => ReactNode;
};

const storySlideMotion = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 1.04,
    x: direction >= 0 ? 28 : -28,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.98,
    x: direction >= 0 ? -28 : 28,
  }),
};

const storyItemMotion = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Stories({ className, isDark = false, slides, renderIcon }: StoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const advanceRef = useRef<() => void>(() => undefined);

  const goTo = useCallback((index: number) => {
    const nextIndex = ((index % slides.length) + slides.length) % slides.length;
    setActiveIndex((current) => {
      if (nextIndex !== current) {
        setDirection(nextIndex > current ? 1 : -1);
      }
      return nextIndex;
    });
    setProgressKey((key) => key + 1);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((index) => (index + 1) % slides.length);
    setProgressKey((key) => key + 1);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
    setProgressKey((key) => key + 1);
  }, [slides.length]);

  advanceRef.current = goNext;

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setTimeout(() => advanceRef.current(), STORY_SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, progressKey, paused]);

  const slide = slides[activeIndex];
  const fillClass = isDark ? "bg-[#1a1a1a]" : "bg-white";
  const rootClassName =
    className ??
    "flex h-[min(526px,80svh)] w-full max-w-[296px] flex-col justify-end rounded-[8px] shadow-[0px_32px_64px_0px_rgba(0,0,0,0),0px_28.513px_57.026px_0px_rgba(0,0,0,0.02),0px_22.567px_45.134px_0px_rgba(0,0,0,0.05),0px_16px_32px_0px_rgba(0,0,0,0.09),0px_9.432px_18.864px_0px_rgba(0,0,0,0.13),0px_3.487px_6.974px_0px_rgba(0,0,0,0.16)]";

  return (
    <div
      aria-label="Portfolio stories"
      aria-live="polite"
      className={`relative overflow-hidden ${rootClassName}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      style={{ ["--story-duration" as string]: `${STORY_SLIDE_MS}ms` }}
    >
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          key={`${activeIndex}-${progressKey}`}
          animate="center"
          className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-end gap-[20px] px-[20px] py-[40px]"
          custom={direction}
          exit="exit"
          initial="enter"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          variants={storySlideMotion}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[8px]">
            <img
              alt=""
              className="story-bg-ken-burns absolute size-full max-w-none object-cover"
              data-paused={paused ? "true" : "false"}
              key={`bg-${activeIndex}-${progressKey}`}
              src={slide.bg}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.5)]" />
          </div>

          <motion.div
            animate="show"
            className="absolute left-[20px] right-[20px] top-[34.5px] z-[1] flex flex-col items-center"
            custom={0.12}
            initial="hidden"
            variants={storyItemMotion}
          >
            {renderIcon ? (
              renderIcon(slide)
            ) : slide.iconSrc ? (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="relative size-[80px] shrink-0"
                initial={{ opacity: 0, scale: 0.85 }}
                transition={{ delay: 0.18, duration: 0.35 }}
              >
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={slide.iconSrc}
                />
              </motion.div>
            ) : null}
            <p className="mt-2 w-full text-center font-['Meraki_TRIAL:Book',sans-serif] text-[32px] leading-[normal] tracking-[-1.28px] text-white not-italic">
              {slide.title}
            </p>
            <p className="mt-1 w-full text-center font-['Open_Sauce_Two:Regular',sans-serif] text-[13px] leading-[18px] text-white not-italic">
              {slide.subtitle}
            </p>
          </motion.div>

          <motion.p
            animate="show"
            className="relative z-[1] w-full text-center font-['Open_Sauce_Two:Regular',sans-serif] text-[18px] leading-[24px] text-white not-italic text-balance"
            custom={0.22}
            initial="hidden"
            variants={storyItemMotion}
          >
            {slide.body}
          </motion.p>

          <motion.div
            animate="show"
            className="relative z-[1] w-full whitespace-pre-wrap text-center font-['Switzer_Variable:Regular',sans-serif] text-[13px] leading-[0] text-white not-italic"
            custom={0.3}
            initial="hidden"
            variants={storyItemMotion}
          >
            <p className="mb-0 font-['Open_Sauce_Two:Medium',sans-serif] leading-[18px]">{`How I handled it: `}</p>
            <p className="font-['Open_Sauce_Two:Regular',sans-serif] leading-[18px]">{slide.caption}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Instagram-style: tap left = previous, tap right = next */}
      <div className="absolute inset-0 z-40 flex">
        <button
          aria-label="Previous story"
          className="h-full w-[40%] cursor-w-resize border-0 bg-transparent p-0 transition-colors active:bg-white/10"
          onClick={(event) => {
            event.stopPropagation();
            goPrev();
          }}
          type="button"
        />
        <button
          aria-label="Next story"
          className="ml-auto h-full w-[40%] cursor-e-resize border-0 bg-transparent p-0 transition-colors active:bg-white/10"
          onClick={(event) => {
            event.stopPropagation();
            goNext();
          }}
          type="button"
        />
      </div>

      <div className="absolute left-[8px] right-[8px] top-[8px] z-50 flex gap-[8px]">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Story ${index + 1} of ${slides.length}`}
            aria-current={index === activeIndex ? "step" : undefined}
            className="flex min-h-[44px] flex-[1_0_0] cursor-pointer items-center border-0 bg-transparent px-0 py-3"
            onClick={(event) => {
              event.stopPropagation();
              goTo(index);
            }}
            type="button"
          >
            <span className="block h-[2px] w-full overflow-hidden rounded-[2px] bg-[rgba(255,255,255,0.4)]">
              <span
                className={`block h-full rounded-[2px] ${fillClass} ${index === activeIndex ? "story-progress-bar" : ""}`}
                data-active={index === activeIndex ? "true" : "false"}
                data-paused={paused ? "true" : "false"}
                key={index === activeIndex ? `progress-${activeIndex}-${progressKey}` : `segment-${index}`}
                style={{ width: index < activeIndex ? "100%" : index > activeIndex ? "0%" : undefined }}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
