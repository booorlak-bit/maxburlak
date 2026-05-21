export type PlaygroundItemType = "image" | "video" | "comment" | "stickyNote" | "link";

export type StickyNoteColor = "yellow" | "pink" | "green" | "blue";

export type PlaygroundCanvasItemCms = {
  _key?: string;
  itemType?: PlaygroundItemType;
  enabled?: boolean;
  x?: number;
  y?: number;
  width?: number;
  zIndex?: number;
  image?: import("./types").SanityImage;
  alt?: string;
  videoUrl?: string;
  poster?: import("./types").SanityImage;
  comment?: string;
  noteTitle?: string;
  noteBody?: string;
  noteColor?: StickyNoteColor;
  linkUrl?: string;
  linkTitle?: string;
  linkDescription?: string;
  linkPreviewImage?: import("./types").SanityImage;
};

export type PlaygroundPageCms = {
  items?: PlaygroundCanvasItemCms[];
};

export type PlaygroundImageItem = {
  id: string;
  itemType: "image";
  x: number;
  y: number;
  width?: number;
  zIndex: number;
  src: string;
  alt: string;
};

export type PlaygroundVideoItem = {
  id: string;
  itemType: "video";
  x: number;
  y: number;
  width?: number;
  zIndex: number;
  videoUrl: string;
  posterSrc?: string;
  embedUrl?: string;
};

export type PlaygroundCommentItem = {
  id: string;
  itemType: "comment";
  x: number;
  y: number;
  width?: number;
  zIndex: number;
  comment: string;
};

export type PlaygroundStickyNoteItem = {
  id: string;
  itemType: "stickyNote";
  x: number;
  y: number;
  width?: number;
  zIndex: number;
  title?: string;
  body: string;
  color: StickyNoteColor;
};

export type PlaygroundLinkItem = {
  id: string;
  itemType: "link";
  x: number;
  y: number;
  width?: number;
  zIndex: number;
  url: string;
  title: string;
  description?: string;
  previewSrc?: string;
};

export type PlaygroundCanvasItem =
  | PlaygroundImageItem
  | PlaygroundVideoItem
  | PlaygroundCommentItem
  | PlaygroundStickyNoteItem
  | PlaygroundLinkItem;

export type PlaygroundContent = {
  items: PlaygroundCanvasItem[];
  fromCms: boolean;
};
