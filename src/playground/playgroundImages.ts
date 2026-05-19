import imgRectangle39339 from "figma:asset/d665988e589771ed34426718cec121110f16de24.png";
import imgRectangle39352 from "figma:asset/cd5c95b21b80c2f899dddae92c6ee1a1ca5d908d.png";
import imgRectangle39350 from "figma:asset/ec60ad6011cb82dbd00b6d9ce09d61636914390d.png";
import imgRectangle39353 from "figma:asset/bc45eaec0e330362a19783dd2bd9416cab98c9f2.png";
import imgRectangle39351 from "figma:asset/fd5439a818a2af65a0ab365914cff24ca548c57d.png";
import imgRectangle39354 from "figma:asset/0c8a000ae670088ae4b43f3ae82c5b4dd8ede1a7.png";
import imgRectangle39355 from "figma:asset/e14c0785a11f061a8d7d09a3cf6526d9dcb846da.png";
import imgRectangle39356 from "figma:asset/4b1955d8e10fed6656eebda4c9e9f17f53bd8765.png";
import imgRectangle39357 from "figma:asset/da1c81a5386946c91b9c29359676f5435757c65f.png";
import imgRectangle39358 from "figma:asset/cad5bcb48ecec3d972771718c36c544165ea328b.png";
import imgRectangle39359 from "figma:asset/89dc44418c4ea8f9657791af6a1075ffd66791ae.png";
import imgRectangle39360 from "figma:asset/52c3cc7f5da1e8362aea713ef34daac263a139c0.png";
import imgRectangle39361 from "figma:asset/c3ef8c31e72eb4652c9ca201c01de310aec3e084.png";
import imgRectangle39362 from "figma:asset/5a55db7d30becbfd694a2a90c3300e8a38665730.png";
import imgFrame2147229843 from "figma:asset/46a134eeede999dea479f9eb03718582b64569fd.png";

export { imgFrame2147229843 };

export type PlaygroundCell = { src: string; alt: string } | null;

/** 5×4 grid matching the portfolio preview layout; null = empty cell */
export const PLAYGROUND_GRID: PlaygroundCell[][] = [
  [
    { src: imgRectangle39339, alt: "Concept 1" },
    { src: imgRectangle39352, alt: "Concept 2" },
    { src: imgRectangle39350, alt: "Concept 3" },
    { src: imgRectangle39353, alt: "Concept 4" },
    { src: imgRectangle39351, alt: "Concept 5" },
  ],
  [
    null,
    null,
    { src: imgRectangle39354, alt: "Concept 6" },
    { src: imgRectangle39355, alt: "Concept 7" },
    { src: imgRectangle39356, alt: "Concept 8" },
  ],
  [
    null,
    { src: imgRectangle39357, alt: "Concept 9" },
    { src: imgRectangle39358, alt: "Concept 10" },
    { src: imgRectangle39359, alt: "Concept 11" },
    null,
  ],
  [
    null,
    { src: imgRectangle39360, alt: "Concept 12" },
    { src: imgRectangle39361, alt: "Concept 13" },
    null,
    { src: imgRectangle39362, alt: "Concept 14" },
  ],
];

export const PLAYGROUND_CELL_WIDTH = 220;
export const PLAYGROUND_GAP = 32;
export const PLAYGROUND_COLUMNS = 5;

export function playgroundGridSize() {
  const width =
    PLAYGROUND_COLUMNS * PLAYGROUND_CELL_WIDTH + (PLAYGROUND_COLUMNS - 1) * PLAYGROUND_GAP;
  const rows = PLAYGROUND_GRID.length;
  const height = rows * PLAYGROUND_CELL_WIDTH + (rows - 1) * PLAYGROUND_GAP;
  return { width, height };
}
