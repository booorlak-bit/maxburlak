import imgImage10 from "figma:asset/a5471198fada2ad0c4d341dba7cd2666fc7898ba.png";
import imgImage17 from "figma:asset/3b4613d13d275b7dbaf4a7a2106f20c0163fec1a.png";
import imgImage349 from "figma:asset/a8154bba40fd1019b262715b7a3bbd1009a33013.png";
import type { WorkScreenshot } from "./worksPage";

export type { WorkScreenshot };

export const WORK_SCREENSHOTS: Record<string, WorkScreenshot> = {
  default: {
    src: imgImage17,
    alt: "Default.com workflow builder product screens",
    aspectRatio: "4096 / 2592",
    width: 4096,
    height: 2592,
  },
  apollo: {
    src: imgImage10,
    alt: "Apollo.io product screens",
    aspectRatio: "4096 / 2592",
    width: 4096,
    height: 2592,
  },
  p2p: {
    src: imgImage349,
    alt: "P2P.org crypto banking product screens",
    aspectRatio: "4096 / 2592",
    width: 4096,
    height: 2592,
  },
};
