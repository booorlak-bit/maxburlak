import type { PlaygroundCanvasItem, StickyNoteColor } from "./playgroundTypes";

const cardShadow =
  "rounded-[14px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03)]";

const stickyColors: Record<StickyNoteColor, string> = {
  yellow: "bg-[#fff4a8] text-[#3d3a1f]",
  pink: "bg-[#ffd6ef] text-[#4a2038]",
  green: "bg-[#d7f5c8] text-[#1f3d24]",
  blue: "bg-[#d6ebff] text-[#1f2f4a]",
};

type PlaygroundItemViewProps = {
  item: PlaygroundCanvasItem;
  isDark: boolean;
};

export function PlaygroundItemView({ item, isDark }: PlaygroundItemViewProps) {
  const maxWidth = item.width ?? 280;

  switch (item.itemType) {
    case "image":
      return (
        <div className={`shrink-0 overflow-hidden ${cardShadow}`} style={{ maxWidth }}>
          <img
            alt={item.alt}
            src={item.src}
            draggable={false}
            className="block h-auto max-h-[220px] w-auto object-contain"
            style={{ maxWidth }}
          />
        </div>
      );

    case "video":
      if (item.embedUrl) {
        return (
          <div className={`overflow-hidden ${cardShadow}`} style={{ width: maxWidth, maxWidth }}>
            <iframe
              title="Playground video"
              src={item.embedUrl}
              className="aspect-video w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }
      return (
        <div className={`overflow-hidden ${cardShadow}`} style={{ width: maxWidth, maxWidth }}>
          <video
            controls
            playsInline
            preload="metadata"
            poster={item.posterSrc}
            className="block max-h-[320px] w-full object-cover"
            style={{ maxWidth }}
          >
            <source src={item.videoUrl} />
          </video>
        </div>
      );

    case "comment":
      return (
        <div
          className={`max-w-[280px] rounded-[16px] border px-4 py-3 font-['Switzer_Variable:Regular',sans-serif] text-[14px] leading-[20px] ${
            isDark
              ? "border-white/10 bg-[#242831]/95 text-white/90"
              : "border-black/8 bg-white/95 text-[#0a0c11]"
          } ${cardShadow}`}
          style={{ maxWidth }}
        >
          <p className="whitespace-pre-wrap">{item.comment}</p>
        </div>
      );

    case "stickyNote":
      return (
        <div
          className={`w-[220px] max-w-[280px] rotate-[-1.5deg] rounded-[4px] px-4 py-3 font-['Switzer_Variable:Regular',sans-serif] ${cardShadow} ${stickyColors[item.color]}`}
          style={{ maxWidth }}
        >
          {item.title ? (
            <p className="mb-2 text-[13px] font-medium leading-[18px]">{item.title}</p>
          ) : null}
          <p className="whitespace-pre-wrap text-[13px] leading-[18px]">{item.body}</p>
        </div>
      );

    case "link":
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block overflow-hidden no-underline ${cardShadow} ${
            isDark ? "border border-white/10 bg-[#242831]" : "border border-black/6 bg-white"
          }`}
          style={{ width: maxWidth, maxWidth }}
        >
          {item.previewSrc ? (
            <img
              alt=""
              src={item.previewSrc}
              draggable={false}
              className="block h-[140px] w-full object-cover"
            />
          ) : null}
          <div className="flex flex-col gap-1 px-4 py-3">
            <p
              className={`font-['Switzer_Variable:Regular',sans-serif] text-[14px] font-medium leading-[20px] ${
                isDark ? "text-white" : "text-[#0a0c11]"
              }`}
            >
              {item.title}
            </p>
            {item.description ? (
              <p
                className={`font-['Switzer_Variable:Regular',sans-serif] text-[12px] leading-[18px] ${
                  isDark ? "text-white/64" : "text-[#5b616d]"
                }`}
              >
                {item.description}
              </p>
            ) : null}
            <p
              className={`truncate font-['Switzer_Variable:Regular',sans-serif] text-[11px] leading-[16px] ${
                isDark ? "text-white/48" : "text-[#8c929c]"
              }`}
            >
              {item.url.replace(/^https?:\/\//, "")}
            </p>
          </div>
        </a>
      );

    default:
      return null;
  }
}
