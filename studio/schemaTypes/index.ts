import { caseStudy } from "./documents/caseStudy";
import { experience } from "./documents/experience";
import { focusArea } from "./documents/focusArea";
import { homePage } from "./documents/homePage";
import { page } from "./documents/page";
import { siteSettings } from "./documents/siteSettings";
import { story } from "./documents/story";
import { testimonial } from "./documents/testimonial";
import { venture } from "./documents/venture";
import { worksPage } from "./documents/worksPage";
import { playgroundPage } from "./documents/playgroundPage";
import { caseStudyFeature } from "./objects/caseStudyFeature";
import { caseStudyNavItem } from "./objects/caseStudyNavItem";
import { caseStudyPhase } from "./objects/caseStudyPhase";
import { caseStudyResultMetric } from "./objects/caseStudyResultMetric";
import { caseStudySection } from "./objects/caseStudySection";
import { caseStudyTableRow } from "./objects/caseStudyTableRow";
import { homeSectionSlot } from "./objects/homeSectionSlot";
import { metric } from "./objects/metric";
import { playgroundCanvasItem } from "./objects/playgroundCanvasItem";
import { seo } from "./objects/seo";

export const schemaTypes = [
  siteSettings,
  homePage,
  worksPage,
  playgroundPage,
  page,
  caseStudy,
  venture,
  story,
  experience,
  testimonial,
  focusArea,
  seo,
  metric,
  caseStudyNavItem,
  caseStudyTableRow,
  caseStudyPhase,
  caseStudyFeature,
  caseStudyResultMetric,
  caseStudySection,
  homeSectionSlot,
  playgroundCanvasItem,
];
