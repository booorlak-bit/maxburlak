import { useId } from "react";
import svgPaths from "../imports/svg-j4zqqnzmwo";

type DefaultLogoProps = {
  size?: number;
  className?: string;
};

/** Default.com brand mark (white geometry on black), shared across sidebar and career path. */
export function DefaultLogo({ size = 34, className = "" }: DefaultLogoProps) {
  const clipId = useId();
  const markSize = Math.round((size * 21) / 34);

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-black ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className="relative"
        style={{ width: markSize, height: markSize, transform: "translateY(0.24px)" }}
        data-name="Logo Light"
      >
        <div className="absolute bottom-0 left-0 right-1/2 top-1/2">
          <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <g clipPath={`url(#${clipId})`}>
              <path d="M8 0H0V8H8V0Z" fill="white" />
            </g>
            <defs>
              <clipPath id={clipId}>
                <path d={svgPaths.p257300} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-3/4 right-0 top-0 bg-white" />
        <div
          className="absolute bottom-3/4 left-0 right-0 top-0 flex items-center justify-center"
          style={{ containerType: "size" }}
        >
          <div className="-rotate-90 h-[100cqw] w-[100cqh] flex-none">
            <div className="size-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
