export function OrganicaaaMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      aria-label="Organicaaa"
      shapeRendering="geometricPrecision"
    >
      <title>Organicaaa</title>
      <rect width="36" height="36" rx="12" fill="#FFE53D" />
      <circle cx="17.947" cy="11.482" r="2.571" fill="#0a0c11" />
      <circle cx="12.125" cy="14.696" r="2.571" fill="#0a0c11" />
      <circle cx="12.125" cy="21.125" r="2.571" fill="#0a0c11" />
      <circle cx="17.947" cy="24.339" r="2.571" fill="#0a0c11" />
      <circle cx="23.768" cy="21.125" r="2.571" fill="#FFB20D" />
      <circle cx="23.768" cy="14.696" r="2.571" fill="#FFB20D" />
    </svg>
  );
}

export function TheFirstMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      aria-label="The First"
      shapeRendering="geometricPrecision"
    >
      <title>The First</title>
      <rect width="36" height="36" rx="12" fill="#0a0c11" />
      <text
        x="18"
        y="18.5"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontFamily="'Switzer Variable', sans-serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="-0.4"
      >
        1st
      </text>
    </svg>
  );
}

export function MndfrndMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      aria-label="mndfrnd"
      shapeRendering="geometricPrecision"
    >
      <title>mndfrnd</title>
      <rect width="36" height="36" rx="12" fill="#E8F5F1" />
      <circle cx="18" cy="18" r="8.5" stroke="#2F8F7A" strokeWidth="2.2" />
      <path
        d="M18 24.2c-3.6 0-6.5-2.4-6.5-5.4 0-1.8 1.6-2.2 3.1-1.4 1 .5 1.8 1.4 3.4 1.4s2.4-.9 3.4-1.4c1.5-.8 3.1-.4 3.1 1.4 0 3-2.9 5.4-6.5 5.4Z"
        fill="#2F8F7A"
      />
    </svg>
  );
}

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

export function FliqMarkIcon({
  className,
  idSuffix = "default",
}: {
  className?: string;
  idSuffix?: string;
}) {
  const bgId = `fliqMarkBg-${idSuffix}`;
  const leftId = `fliqMarkLeft-${idSuffix}`;
  const rightId = `fliqMarkRight-${idSuffix}`;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      aria-label="Fliq"
      shapeRendering="geometricPrecision"
    >
      <title>Fliq</title>
      <rect width="36" height="36" rx="12" fill={`url(#${bgId})`} />
      <path
        d="M16.405 24.477C16.405 28.079 13.485 31 9.882 31L-4.793 31C-6.594 31 -8.054 29.54 -8.054 27.739V-3.243L16.405-3.243V24.477Z"
        fill={`url(#${leftId})`}
      />
      <path
        d="M19.665 27.812H13.29V25.196H16.002V17.855H13.29V15.239H16.002V13.557C16.002 12.454 16.002 9.703 17.366 8.245C18.954 6.657 19.769 6.616 25.965 6.549C22.465 6.686 19.665 9.587 19.665 13.016V27.812Z"
        fill="#EAEEE5"
      />
      <path
        d="M19.666 13.063C19.666 9.461 22.586 6.541 26.188 6.541H40.864C42.665 6.541 44.125 8.001 44.125 9.802V39.152H19.666V13.063Z"
        fill={`url(#${rightId})`}
      />
      <defs>
        <radialGradient
          id={bgId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18 18) rotate(90) scale(18)"
        >
          <stop stopColor="#080808" />
          <stop offset="1" stopColor="#1D1D1D" />
        </radialGradient>
        <radialGradient
          id={leftId}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-18 -8.4 9.16 -21.64 21.946 28.942)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DED700" />
          <stop offset="0.979" stopColor="#566A41" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id={rightId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.125 8.5) rotate(23.963) scale(19.698 22.553)"
        >
          <stop stopColor="#DED700" />
          <stop offset="0.979" stopColor="#566A41" stopOpacity="0" />
        </radialGradient>
      </defs>
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
