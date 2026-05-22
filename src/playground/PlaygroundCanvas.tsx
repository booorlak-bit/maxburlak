import { useCallback, useEffect, useRef, useState } from "react";
import { usePlaygroundContent } from "../sanity/usePlaygroundContent";
import { PlaygroundFrame } from "./PlaygroundFrame";

type Transform = { x: number; y: number; scale: number };

const MIN_SCALE = 0.15;
const MAX_SCALE = 2.5;
const DOT_GRID_SPACING = 16;

const dotGridBackground = (isDark: boolean) =>
  isDark
    ? "radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px)"
    : "radial-gradient(rgba(10, 12, 17, 0.1) 1px, transparent 1px)";

type PlaygroundCanvasProps = {
  isDark: boolean;
  embed?: boolean;
};

export function PlaygroundCanvas({ isDark, embed = false }: PlaygroundCanvasProps) {
  const { items } = usePlaygroundContent();
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<Transform>({ x: 0, y: 0, scale: 1 });
  const [isPanning, setIsPanning] = useState(false);
  const panState = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);

  const fitToView = useCallback(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    const cw = content.offsetWidth;
    const ch = content.offsetHeight;
    if (!vw || !vh || !cw || !ch) return;

    if (embed) {
      const padding = 20;
      const controlsReserve = 64;
      const availableW = vw - controlsReserve;
      const scale = Math.min(
        (availableW - padding * 2) / cw,
        (vh - padding * 2) / ch,
        MAX_SCALE,
      );
      const clamped = Math.max(MIN_SCALE, scale);
      setTransform({
        scale: clamped,
        x: (availableW - cw * clamped) / 2,
        y: (vh - ch * clamped) / 2,
      });
      return;
    }

    const padding = 48;
    const scale = Math.min((vw - padding) / cw, (vh - padding) / ch, 1);
    setTransform({
      scale,
      x: (vw - cw * scale) / 2,
      y: (vh - ch * scale) / 2,
    });
  }, [embed]);

  useEffect(() => {
    fitToView();
    const raf = requestAnimationFrame(() => fitToView());
    const viewport = viewportRef.current;
    const content = contentRef.current;
    const images = content?.querySelectorAll("img") ?? [];
    const onImageLoad = () => fitToView();
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onImageLoad);
    });
    if (!viewport) {
      return () => {
        cancelAnimationFrame(raf);
        images.forEach((img) => img.removeEventListener("load", onImageLoad));
      };
    }
    const ro = new ResizeObserver(() => fitToView());
    ro.observe(viewport);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      images.forEach((img) => img.removeEventListener("load", onImageLoad));
    };
  }, [fitToView, isDark, items]);

  useEffect(() => {
    if (!isPanning) return;
    const prevUserSelect = document.body.style.userSelect;
    const prevWebkitUserSelect = document.body.style.webkitUserSelect;
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    return () => {
      document.body.style.userSelect = prevUserSelect;
      document.body.style.webkitUserSelect = prevWebkitUserSelect;
    };
  }, [isPanning]);

  const setScaleAtPoint = useCallback((nextScale: number, px: number, py: number) => {
    const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, nextScale));
    setTransform((t) => {
      if (t.scale === clamped) return t;
      const ratio = clamped / t.scale;
      return {
        scale: clamped,
        x: px - (px - t.x) * ratio,
        y: py - (py - t.y) * ratio,
      };
    });
  }, []);

  const setScaleAtCenter = useCallback(
    (nextScale: number) => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const rect = viewport.getBoundingClientRect();
      setScaleAtPoint(nextScale, rect.width / 2, rect.height / 2);
    },
    [setScaleAtPoint],
  );

  useEffect(() => {
    if (embed) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const delta = e.deltaY;
      const factor = Math.exp(-delta * 0.002);
      setTransform((t) => {
        const nextScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.scale * factor));
        const ratio = nextScale / t.scale;
        return {
          scale: nextScale,
          x: px - (px - t.x) * ratio,
          y: py - (py - t.y) * ratio,
        };
      });
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [embed]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.button !== 1) return;
    e.preventDefault();
    setIsPanning(true);
    viewportRef.current?.setPointerCapture(e.pointerId);
    panState.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      originX: transform.x,
      originY: transform.y,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const pan = panState.current;
    if (!pan || pan.pointerId !== e.pointerId) return;
    setTransform((t) => ({
      ...t,
      x: pan.originX + (e.clientX - pan.startX),
      y: pan.originY + (e.clientY - pan.startY),
    }));
  };

  const endPan = (pointerId: number) => {
    if (panState.current?.pointerId !== pointerId) return;
    panState.current = null;
    setIsPanning(false);
    viewportRef.current?.releasePointerCapture(pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    endPan(e.pointerId);
  };

  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden bg-transparent select-none" data-name="playground-canvas">
      <div
        ref={viewportRef}
        className="absolute inset-0 cursor-grab touch-none select-none active:cursor-grabbing"
        onDragStart={(e) => e.preventDefault()}
        onAuxClick={(e) => {
          if (e.button === 1) e.preventDefault();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={(e) => endPan(e.pointerId)}
        onLostPointerCapture={(e) => endPan(e.pointerId)}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: dotGridBackground(isDark),
            backgroundSize: `${DOT_GRID_SPACING * transform.scale}px ${DOT_GRID_SPACING * transform.scale}px`,
            backgroundPosition: `${transform.x}px ${transform.y}px`,
          }}
        />
        <div
          ref={contentRef}
          className="absolute left-0 top-0 will-change-transform select-none"
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            transformOrigin: "0 0",
          }}
        >
          <PlaygroundFrame items={items} isDark={isDark} />
        </div>
      </div>

      <div
        data-playground-controls
        className={`pointer-events-none absolute top-1/2 z-[1100] flex -translate-y-1/2 ${embed ? "right-3 scale-90" : "right-6"}`}
      >
        <div className="pointer-events-auto flex flex-col items-center gap-2 rounded-[20px] border border-black/6 bg-white/90 px-1.5 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#242831]/90">
          <button
            type="button"
            aria-label="Reset view"
            className="shrink-0 px-1 font-['Switzer_Variable:Regular',sans-serif] text-[11px] text-[#5b616d] hover:text-[#0a0c11] dark:text-gray-400 dark:hover:text-white"
            onClick={fitToView}
          >
            Reset
          </button>
          <span
            className="font-['Switzer_Variable:Regular',sans-serif] text-[10px] leading-none text-[#8c929c] dark:text-white/48"
            aria-hidden
          >
            +
          </span>
          <input
            type="range"
            min={Math.round(MIN_SCALE * 100)}
            max={Math.round(MAX_SCALE * 100)}
            step={1}
            value={Math.round(transform.scale * 100)}
            onChange={(e) => setScaleAtCenter(Number(e.target.value) / 100)}
            aria-label="Zoom level"
            aria-valuemin={Math.round(MIN_SCALE * 100)}
            aria-valuemax={Math.round(MAX_SCALE * 100)}
            aria-valuenow={Math.round(transform.scale * 100)}
            className={`h-24 w-1 shrink-0 cursor-pointer appearance-none rounded-full bg-black/10 [direction:rtl] [writing-mode:vertical-lr] dark:bg-white/15 ${isDark ? "accent-white" : "accent-[#0a0c11]"}`}
          />
          <span
            className="font-['Switzer_Variable:Regular',sans-serif] text-[10px] leading-none text-[#8c929c] dark:text-white/48"
            aria-hidden
          >
            −
          </span>
          <span className="shrink-0 font-['Switzer_Variable:Regular',sans-serif] text-[10px] tabular-nums text-[#5b616d] dark:text-white/64">
            {Math.round(transform.scale * 100)}%
          </span>
        </div>
      </div>

      <p
        className={`pointer-events-none absolute z-[1100] font-['Switzer_Variable:Regular',sans-serif] text-[12px] text-[#8c929c] ${embed ? "bottom-3 left-3" : "bottom-8 left-6"}`}
      >
        {embed ? "Drag to pan · Zoom with slider" : "Drag or middle-click to pan · Scroll to zoom"}
      </p>
    </div>
  );
}
