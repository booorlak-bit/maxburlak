import type { ImgHTMLAttributes } from "react";

type PortfolioImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Set on the LCP candidate only */
  priority?: boolean;
  /** Hint for responsive layout (reduces oversized downloads) */
  sizes?: string;
};

/** Portfolio image with lazy loading and async decode by default. */
export function PortfolioImage({
  priority = false,
  loading,
  decoding = "async",
  fetchPriority,
  sizes,
  alt = "",
  width,
  height,
  className,
  style,
  ...props
}: PortfolioImageProps) {
  const aspectStyle =
    width && height ? ({ aspectRatio: `${width} / ${height}` } as const) : undefined;

  return (
    <img
      alt={alt}
      className={className}
      decoding={decoding}
      fetchPriority={priority ? "high" : fetchPriority}
      height={height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      sizes={sizes ?? (priority ? undefined : "(max-width: 1024px) 100vw, 800px")}
      style={aspectStyle ? { ...aspectStyle, ...style } : style}
      width={width}
      {...props}
    />
  );
}
