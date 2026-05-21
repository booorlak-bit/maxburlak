import type {
  PlaygroundCanvasItem,
  PlaygroundCanvasItemCms,
} from "../playground/playgroundTypes";
import { urlForSrc } from "./image";

function itemId(item: PlaygroundCanvasItemCms, index: number): string {
  return item._key?.trim() || `playground-item-${index}`;
}

function parseEmbedUrl(url: string): string | undefined {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
    }
    if (host === "youtu.be") {
      const videoId = parsed.pathname.replace(/^\//, "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
    }
    if (host === "vimeo.com") {
      const videoId = parsed.pathname.replace(/^\//, "");
      return videoId ? `https://player.vimeo.com/video/${videoId}` : undefined;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function mapItem(item: PlaygroundCanvasItemCms, index: number): PlaygroundCanvasItem | null {
  if (item.enabled === false || !item.itemType) return null;

  const base = {
    id: itemId(item, index),
    x: item.x ?? 0,
    y: item.y ?? 0,
    width: item.width,
    zIndex: item.zIndex ?? 1,
  };

  switch (item.itemType) {
    case "image": {
      const src = urlForSrc(item.image, item.width ?? 900);
      if (!src) return null;
      return {
        ...base,
        itemType: "image",
        src,
        alt: item.alt?.trim() || "Playground concept",
      };
    }
    case "video": {
      const videoUrl = item.videoUrl?.trim();
      if (!videoUrl) return null;
      return {
        ...base,
        itemType: "video",
        videoUrl,
        posterSrc: urlForSrc(item.poster, item.width ?? 720),
        embedUrl: parseEmbedUrl(videoUrl),
      };
    }
    case "comment": {
      const comment = item.comment?.trim();
      if (!comment) return null;
      return {
        ...base,
        itemType: "comment",
        comment,
      };
    }
    case "stickyNote": {
      const body = item.noteBody?.trim();
      if (!body && !item.noteTitle?.trim()) return null;
      return {
        ...base,
        itemType: "stickyNote",
        title: item.noteTitle?.trim() || undefined,
        body: body || "",
        color: item.noteColor ?? "yellow",
      };
    }
    case "link": {
      const url = item.linkUrl?.trim();
      if (!url) return null;
      return {
        ...base,
        itemType: "link",
        url,
        title: item.linkTitle?.trim() || url,
        description: item.linkDescription?.trim() || undefined,
        previewSrc: urlForSrc(item.linkPreviewImage, item.width ?? 640),
      };
    }
    default:
      return null;
  }
}

export function mapPlaygroundItems(items: PlaygroundCanvasItemCms[] | undefined): PlaygroundCanvasItem[] {
  if (!items?.length) return [];
  return items
    .map(mapItem)
    .filter((item): item is PlaygroundCanvasItem => item !== null)
    .sort((a, b) => a.zIndex - b.zIndex);
}
