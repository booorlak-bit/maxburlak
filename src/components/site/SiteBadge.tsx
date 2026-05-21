import type { ReactNode } from "react";
import { GreenCheckIcon } from "./GreenCheckIcon";
import { SITE_FONT } from "./siteTheme";

type SiteBadgeProps = {
  isDark: boolean;
  children: ReactNode;
  variant?: "chip" | "pill";
  className?: string;
  showCheckIcon?: boolean;
};

/** Small rounded chip — matches homepage date/meta chips. */
export function SiteBadge({ isDark, children, variant = "pill", className = "", showCheckIcon = false }: SiteBadgeProps) {
  if (variant === "chip") {
    return (
      <span
        className={`${SITE_FONT} relative inline-flex h-6 shrink-0 items-center justify-center rounded-[6px] px-[6px] py-1 text-[12px] font-light leading-[14px] whitespace-nowrap transition-colors duration-700 ${isDark ? "bg-[rgba(255,255,255,0.1)] text-white" : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"} ${className}`}
        data-name="Chip"
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[6px] border border-solid border-[rgba(0,0,0,0.06)]" />
        <span className="relative px-1">{children}</span>
      </span>
    );
  }

  return (
    <span
      className={`${SITE_FONT} inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-[1000px] px-2 py-1 text-[12px] font-medium leading-[16px] whitespace-nowrap opacity-90 backdrop-blur-[12px] transition-colors duration-700 ${isDark ? "bg-[#2a2a2a] text-[#c3c6cc]" : "bg-[#f2f2f4] text-[#5b616d]"} ${className}`}
      data-name="Badge"
    >
      {showCheckIcon ? <GreenCheckIcon isDark={isDark} /> : null}
      {children}
    </span>
  );
}
