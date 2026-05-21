import type { PlaygroundCanvasItem } from "./playgroundTypes";

const DEFAULT_ITEM_WIDTH = 280;
const DEFAULT_ITEM_HEIGHT = 220;

function estimateItemHeight(item: PlaygroundCanvasItem): number {
  switch (item.itemType) {
    case "image":
      return 220;
    case "video":
      return item.width ? Math.round(item.width * 0.5625) : 200;
    case "comment":
      return 120;
    case "stickyNote":
      return 180;
    case "link":
      return item.previewSrc ? 260 : 140;
    default:
      return DEFAULT_ITEM_HEIGHT;
  }
}

export function playgroundCanvasBounds(items: PlaygroundCanvasItem[], padding = 32) {
  if (!items.length) {
    return { width: 960, height: 720, padding };
  }

  let maxX = 0;
  let maxY = 0;

  for (const item of items) {
    const width = item.width ?? DEFAULT_ITEM_WIDTH;
    const height = estimateItemHeight(item);
    maxX = Math.max(maxX, item.x + width);
    maxY = Math.max(maxY, item.y + height);
  }

  return {
    width: maxX + padding * 2,
    height: maxY + padding * 2,
    padding,
  };
}
