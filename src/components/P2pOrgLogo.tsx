import svgPaths from "../imports/svg-j4zqqnzmwo";

type P2pOrgLogoProps = {
  size?: number;
  className?: string;
};

/** P2P.org brand mark — green glyph on slate, shared across sidebar and works. */
export function P2pOrgLogo({ size = 34, className = "" }: P2pOrgLogoProps) {
  return (
    <div
      className={`pointer-events-none relative shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2206 26.2196">
        <rect fill="#323D4C" height="26" rx="6" width="26" />
        <rect
          height="25.4421"
          rx="5.72107"
          stroke="black"
          strokeOpacity="0.09"
          strokeWidth="0.557861"
          width="25.4421"
          x="0.278931"
          y="0.278931"
        />
        <rect
          height="25.732"
          rx="5.75625"
          stroke="black"
          strokeOpacity="0.08"
          strokeWidth="0.4875"
          width="25.732"
          x="0.244845"
          y="0.243868"
        />
        <path d={svgPaths.p3c111f20} fill="#0EE471" />
      </svg>
    </div>
  );
}
