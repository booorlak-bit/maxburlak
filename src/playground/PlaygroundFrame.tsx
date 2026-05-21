import { PlaygroundFrameLegacy } from "./PlaygroundFrameLegacy";
import { PlaygroundItemView } from "./PlaygroundItemView";
import { playgroundCanvasBounds } from "./playgroundLayout";
import type { PlaygroundCanvasItem } from "./playgroundTypes";

type PlaygroundFrameProps = {
  items: PlaygroundCanvasItem[];
  isDark: boolean;
};

export function PlaygroundFrame({ items, isDark }: PlaygroundFrameProps) {
  if (!items.length) {
    return <PlaygroundFrameLegacy />;
  }

  const bounds = playgroundCanvasBounds(items);

  return (
    <div
      className="pointer-events-none relative select-none"
      data-name="playground-frame"
      style={{ width: bounds.width, height: bounds.height }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: bounds.padding + item.x,
            top: bounds.padding + item.y,
            zIndex: item.zIndex,
          }}
        >
          <PlaygroundItemView item={item} isDark={isDark} />
        </div>
      ))}
    </div>
  );
}
