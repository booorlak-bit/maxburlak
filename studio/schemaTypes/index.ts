import { caseStudy } from "./documents/caseStudy";
import { experience } from "./documents/experience";
import { focusArea } from "./documents/focusArea";
import { homePage } from "./documents/homePage";
import { page } from "./documents/page";
import { siteSettings } from "./documents/siteSettings";
import { story } from "./documents/story";
import { testimonial } from "./documents/testimonial";
import { venture } from "./documents/venture";
import { homeSectionSlot } from "./objects/homeSectionSlot";
import { metric } from "./objects/metric";
import { seo } from "./objects/seo";

export const schemaTypes = [
  siteSettings,
  homePage,
  page,
  caseStudy,
  venture,
  story,
  experience,
  testimonial,
  focusArea,
  seo,
  metric,
  homeSectionSlot,
];
