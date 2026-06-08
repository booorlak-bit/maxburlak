import { caseStudy } from "./documents/caseStudy";
import { feedPost } from "./documents/feedPost";
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
import { caseStudyImage } from "./objects/caseStudyImage";
import { caseStudyVideo } from "./objects/caseStudyVideo";
import { caseStudyNavItem } from "./objects/caseStudyNavItem";
import { caseStudyPhase } from "./objects/caseStudyPhase";
import { caseStudyResultMetric } from "./objects/caseStudyResultMetric";
import { caseStudySection } from "./objects/caseStudySection";
import { caseStudyTableRow } from "./objects/caseStudyTableRow";
import { homeSectionSlot } from "./objects/homeSectionSlot";
import { metric } from "./objects/metric";
import { playgroundCanvasItem } from "./objects/playgroundCanvasItem";
import { feedGalleryBlock } from "./objects/feedGalleryBlock";
import { feedImageBlock } from "./objects/feedImageBlock";
import { feedLinkCard } from "./objects/feedLinkCard";
import { feedVideoBlock } from "./objects/feedVideoBlock";
import { seo } from "./objects/seo";

export const schemaTypes = [
  siteSettings,
  homePage,
  worksPage,
  playgroundPage,
  page,
  caseStudy,
  feedPost,
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
  caseStudyImage,
  caseStudyVideo,
  caseStudySection,
  homeSectionSlot,
  playgroundCanvasItem,
  feedImageBlock,
  feedVideoBlock,
  feedGalleryBlock,
  feedLinkCard,
];
