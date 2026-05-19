import svgPaths from "../imports/svg-j4zqqnzmwo";

type CommunLogoProps = {
  size?: number;
  className?: string;
};

/** Commun brand mark, shared across sidebar and career path. */
export function CommunLogo({ size = 34, className = "" }: CommunLogoProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g>
          <rect fill="#6A80F5" height="26" rx="6.448" width="26" />
          <path d={svgPaths.p2d605e00} fill="#FCFDFE" />
        </g>
      </svg>
    </div>
  );
}
