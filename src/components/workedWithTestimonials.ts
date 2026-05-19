import { PHOTO_SRC } from "./workedWithGridItems";

export type WorkedWithTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const DEFAULT_TESTIMONIAL_ID: keyof typeof PHOTO_SRC = "39361";

/** Featured avatar cell in the Figma grid (unique per position) */
export const DEFAULT_WORKED_WITH_CELL_ID = "1985:6700";

const DEFAULT: WorkedWithTestimonial = {
  quote:
    "Max can hold the entire product in his head and still care about the details. Rare combination.",
  name: "Elena Kovacs",
  role: "Head of Product",
  company: "p2p.org",
};

/** Per-photo testimonials — extend as you add real quotes */
export const WORKED_WITH_TESTIMONIALS: Partial<Record<keyof typeof PHOTO_SRC, WorkedWithTestimonial>> = {
  "39361": DEFAULT,
};

export function getTestimonialForPhoto(photoNum: keyof typeof PHOTO_SRC): WorkedWithTestimonial {
  return WORKED_WITH_TESTIMONIALS[photoNum] ?? DEFAULT;
}
