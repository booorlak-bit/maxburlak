import {
  PHOTO_SRC,
  WORKED_WITH_GRID_ITEMS,
  type WorkedWithGridItem,
} from "./workedWithGridItems";

const GRID_COLS = 23;
const GRID_ROWS = 5;
/** Figma pitch: 36px circle + 10px gap */
const CELL_PX = 36;
const GAP_PX = 10;
const GRID_WIDTH_PX = GRID_COLS * CELL_PX + (GRID_COLS - 1) * GAP_PX;

const PLACEHOLDER_CLASS = {
  s1: "bg-[#f9f9fa]",
  s2: "bg-[#f2f2f4]",
  s3: "bg-[#ececf0]",
} as const;

export type WorkedWithPhotoSelection = {
  cellId: string;
  photoNum: keyof typeof PHOTO_SRC;
};

type WorkedWithAvatarsProps = {
  isDark?: boolean;
  activeCellId: string;
  onPhotoSelect: (selection: WorkedWithPhotoSelection) => void;
};

function PlaceholderDot({
  isDark,
  variant,
}: {
  isDark: boolean;
  variant: keyof typeof PLACEHOLDER_CLASS;
}) {
  if (isDark) {
    return <div aria-hidden className="mx-auto size-9 shrink-0 rounded-full bg-[#2a2a2a]" />;
  }
  return (
    <div
      aria-hidden
      className={`mx-auto size-9 shrink-0 rounded-full transition-colors duration-700 ${PLACEHOLDER_CLASS[variant]}`}
    />
  );
}

function PersonAvatar({
  src,
  isActive,
  isDark,
  onSelect,
}: {
  src: string;
  isActive: boolean;
  isDark: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      aria-pressed={isActive}
      className={`relative mx-auto block size-9 shrink-0 cursor-pointer rounded-full transition-[filter,opacity,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isDark ? "focus-visible:outline-white/40" : "focus-visible:outline-[#0a0c11]/20"
      } ${
        isActive
          ? `opacity-100 ring-2 ${isDark ? "ring-white" : "ring-[#0a0c11]"}`
          : "opacity-50 hover:opacity-100"
      }`}
      type="button"
      onClick={onSelect}
    >
      <img
        alt=""
        className={`pointer-events-none size-full rounded-full object-cover transition-[filter] duration-300 ${
          isActive ? "grayscale-0" : "grayscale hover:grayscale-0"
        }`}
        src={src}
      />
    </button>
  );
}

function renderItem(
  item: WorkedWithGridItem,
  isDark: boolean,
  index: number,
  activeCellId: string,
  onPhotoSelect: (selection: WorkedWithPhotoSelection) => void,
) {
  if (item.type === "placeholder") {
    return <PlaceholderDot key={`ph-${index}`} isDark={isDark} variant={item.variant} />;
  }

  const isActive = item.id === activeCellId;

  return (
    <PersonAvatar
      key={item.id}
      isActive={isActive}
      isDark={isDark}
      src={PHOTO_SRC[item.num]}
      onSelect={() => onPhotoSelect({ cellId: item.id, photoNum: item.num })}
    />
  );
}

export function WorkedWithAvatars({
  isDark = false,
  activeCellId,
  onPhotoSelect,
}: WorkedWithAvatarsProps) {
  return (
    <div
      className="relative w-full shrink-0 overflow-x-hidden py-10 md:py-[48px]"
      data-name="WorkedWithAvatars"
    >
      <div
        className="mx-auto w-full overflow-x-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
        }}
      >
        <div className="flex w-full justify-center">
          <div
            className="grid shrink-0 justify-items-center py-2"
            style={{
              width: GRID_WIDTH_PX,
              gridTemplateColumns: `repeat(${GRID_COLS}, ${CELL_PX}px)`,
              gridTemplateRows: `repeat(${GRID_ROWS}, ${CELL_PX}px)`,
              gap: GAP_PX,
            }}
          >
            {WORKED_WITH_GRID_ITEMS.map((item, index) =>
              renderItem(item, isDark, index, activeCellId, onPhotoSelect),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
