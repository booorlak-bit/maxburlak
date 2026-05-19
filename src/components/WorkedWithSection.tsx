import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WorkedWithAvatars, type WorkedWithPhotoSelection } from "./WorkedWithAvatars";
import type { PHOTO_SRC } from "./workedWithGridItems";
import {
  DEFAULT_TESTIMONIAL_ID,
  DEFAULT_WORKED_WITH_CELL_ID,
  getTestimonialForPhoto,
  type WorkedWithTestimonial,
} from "./workedWithTestimonials";

type WorkedWithSectionProps = {
  isDark?: boolean;
};

const testimonialMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
};

export function WorkedWithSection({ isDark = false }: WorkedWithSectionProps) {
  const [activeCellId, setActiveCellId] = useState(DEFAULT_WORKED_WITH_CELL_ID);
  const [activePhotoNum, setActivePhotoNum] =
    useState<keyof typeof PHOTO_SRC>(DEFAULT_TESTIMONIAL_ID);

  const handlePhotoSelect = ({ cellId, photoNum }: WorkedWithPhotoSelection) => {
    if (cellId === activeCellId) return;
    setActiveCellId(cellId);
    setActivePhotoNum(photoNum);
  };

  const testimonial: WorkedWithTestimonial = getTestimonialForPhoto(activePhotoNum);

  return (
    <>
      <WorkedWithAvatars
        activeCellId={activeCellId}
        isDark={isDark}
        onPhotoSelect={handlePhotoSelect}
      />
      <div className="transition-colors duration-700 relative shrink-0 w-full">
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-[minmax(0,0.50fr)_minmax(0,1fr)_minmax(0,0.50fr)] grid-rows-[auto] p-4 md:p-[32px] relative size-full">
          <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0 min-h-[120px] w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCellId}
                className="content-stretch flex w-full flex-col gap-[8px] items-center"
                {...testimonialMotion}
              >
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <p
                    className={`flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] min-h-px min-w-px relative ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700 text-[22px] text-center tracking-[-0.2px]`}
                  >
                    “{testimonial.quote}”
                  </p>
                </div>
                <div
                  className={`content-stretch flex font-['Switzer_Variable:Regular',sans-serif] font-light gap-[8px] items-center justify-center leading-[18px] relative shrink-0 ${isDark ? "text-white/64" : "text-[#5b616d]"} transition-colors duration-700 text-[13px] w-full flex-wrap justify-center whitespace-normal md:whitespace-nowrap`}
                >
                  <p className="relative shrink-0">{testimonial.name}</p>
                  <p className="relative shrink-0">·</p>
                  <p className="relative shrink-0">{testimonial.role}</p>
                  <p className="relative shrink-0">·</p>
                  <p className="relative shrink-0">{testimonial.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
