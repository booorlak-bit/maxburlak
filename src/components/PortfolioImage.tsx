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
  ...props
}: PortfolioImageProps) {
  return (
    <img
      alt={alt}
      decoding={decoding}
      fetchPriority={priority ? "high" : fetchPriority}
      loading={priority ? "eager" : (loading ?? "lazy")}
      sizes={sizes}
      {...props}
    />
  );
}
