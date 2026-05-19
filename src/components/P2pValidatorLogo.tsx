import imgP2pValidator from "figma:asset/9d377e968ee1f18efc01fec8ae05bf2a9368fbcc.png";

type P2pValidatorLogoProps = {
  size?: number;
  className?: string;
};

/** P2P Validator brand mark, shared across sidebar and career path. */
export function P2pValidatorLogo({ size = 34, className = "" }: P2pValidatorLogoProps) {
  return (
    <div
      className={`pointer-events-none relative shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgP2pValidator} />
      <div
        aria-hidden
        className="absolute inset-0 border border-solid border-[rgba(0,0,0,0.09)]"
        style={{ borderRadius: "inherit" }}
      />
    </div>
  );
}
