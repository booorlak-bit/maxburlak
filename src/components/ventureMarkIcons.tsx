export function GradeStudioMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      aria-label="grade-1.studio"
      shapeRendering="geometricPrecision"
    >
      <title>grade-1.studio</title>
      <rect width="36" height="36" rx="24" fill="#252525" />
      {/* Two parallel pill bars, ~−45°, white (upper-left) + lime (lower-right) */}
      <g transform="translate(18 18) rotate(-45)">
        <rect x="-8.75" y="-5.85" width="17.5" height="3.5" rx="1.75" fill="#ffffff" />
        <rect x="-8.75" y="2.35" width="17.5" height="3.5" rx="1.75" fill="#C8FF3D" />
      </g>
    </svg>
  );
}

export function FliqMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.894 35.894"
      fill="none"
      aria-label="Fliq"
      shapeRendering="geometricPrecision"
    >
      <title>Fliq</title>
      <rect fill="#FFE53D" height="35.894" width="35.894" />
      <circle cx="17.8755" cy="11.4464" fill="#0a0c11" r="2.57143" />
      <circle cx="12.0893" cy="14.6607" fill="#0a0c11" r="2.57143" />
      <circle cx="12.0893" cy="21.0893" fill="#0a0c11" r="2.57143" />
      <circle cx="17.8755" cy="24.3036" fill="#0a0c11" r="2.57143" />
      <circle cx="23.6607" cy="21.0893" fill="#FFB20D" r="2.57143" />
      <circle cx="23.6607" cy="14.6607" fill="#FFB20D" r="2.57143" />
    </svg>
  );
}

export function PinnboardsMarkIcon({
  className,
  glowFilterId = "pinnboardsGlow",
}: {
  className?: string;
  glowFilterId?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      aria-label="Pinnboards"
      shapeRendering="geometricPrecision"
    >
      <title>Pinnboards</title>
      <rect width="36" height="36" rx="12" fill="#232323" />
      <rect x="9" y="9" width="18" height="18" rx="4" stroke="#7466FF" strokeWidth="5" />
      <rect
        x="9"
        y="9"
        width="18"
        height="18"
        rx="4"
        stroke="#7466FF"
        strokeOpacity="0.65"
        strokeWidth="5"
        filter={`url(#${glowFilterId})`}
      />
      <rect x="0.5" y="0.5" width="35" height="35" rx="11.5" stroke="white" strokeOpacity="0.08" />
      <defs>
        <filter id={glowFilterId} x="-4" y="-4" width="44" height="44" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
    </svg>
  );
}
