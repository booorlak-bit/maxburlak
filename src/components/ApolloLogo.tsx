import imgApollo from "figma:asset/7e94d6b628fcb29842f72aafdcdcb44098ae7c18.png";

type ApolloLogoProps = {
  size?: number;
  className?: string;
};

/** Apollo.io brand mark, shared across sidebar and career path. */
export function ApolloLogo({ size = 34, className = "" }: ApolloLogoProps) {
  return (
    <div
      className={`pointer-events-none relative shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgApollo} />
      <div
        aria-hidden
        className="absolute inset-0 border border-solid border-[rgba(0,0,0,0.09)]"
        style={{ borderRadius: "inherit" }}
      />
    </div>
  );
}
