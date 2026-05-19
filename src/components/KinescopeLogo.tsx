import imgKinescope from "figma:asset/065b294b0147a53b8885052d14dcc5cdb031adf3.png";

type KinescopeLogoProps = {
  size?: number;
  className?: string;
};

/** Kinescope brand mark, shared across sidebar and career path. */
export function KinescopeLogo({ size = 34, className = "" }: KinescopeLogoProps) {
  return (
    <div
      className={`pointer-events-none relative shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgKinescope} />
      <div
        aria-hidden
        className="absolute inset-0 border border-solid border-[rgba(0,0,0,0.09)]"
        style={{ borderRadius: "inherit" }}
      />
    </div>
  );
}
