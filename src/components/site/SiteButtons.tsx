import type { ReactNode } from "react";
import { Link } from "react-router";
import imgImage37 from "figma:asset/2d16d174ec27b3b77746f2c1f3da26f857b3f18f.png";
import { PortfolioImage } from "../PortfolioImage";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { SITE_FONT } from "./siteTheme";

type ButtonBaseProps = {
  isDark: boolean;
  children: ReactNode;
  className?: string;
};

/** Filled primary — matches header “Book a call”. */
export function SiteBookCallButton({
  isDark,
  href,
  children,
  className = "",
}: ButtonBaseProps & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex h-[44px] min-h-[44px] shrink-0 cursor-pointer items-center justify-center gap-[8px] rounded-[1000px] px-[12px] py-[4px] no-underline transition-all duration-200 hover:scale-105 hover:shadow-lg ${className}`}
      data-name="Button"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] ${isDark ? "bg-white" : "bg-black"}`}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.09)] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]"
      />
      <span
        className={`${SITE_FONT} relative px-[4px] text-[13px] font-medium leading-[18px] whitespace-nowrap ${isDark ? "text-[#0a0c11]" : "text-white"}`}
      >
        {children}
      </span>
      <span className="relative flex size-[18px] shrink-0 items-center justify-center">
        <PortfolioImage alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={imgImage37} />
      </span>
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" aria-hidden />
    </a>
  );
}

/** Glass pill — matches “Chat with me” / secondary actions. */
export function SiteGhostButton({
  isDark,
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonBaseProps & { onClick?: () => void; type?: "button" | "submit" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative flex h-[44px] min-h-[44px] shrink-0 cursor-pointer items-center justify-center gap-[2px] rounded-[1000px] border-0 px-[10px] py-[4px] transition-all duration-200 hover:scale-105 ${isDark ? "text-white" : "text-[#0a0c11]"} ${className}`}
      data-name="Button"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] ${isDark ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(242,242,244,0.8)]"} transition-colors duration-700`}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.06)] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]"
      />
      <span className={`${SITE_FONT} relative px-[4px] text-[13px] font-medium leading-[18px] whitespace-nowrap`}>{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" aria-hidden />
    </button>
  );
}

/** Inverted pill with arrow — matches “View full approach”. */
export function SiteInvertedLink({
  isDark,
  to,
  children,
  className = "",
}: ButtonBaseProps & { to: string }) {
  return (
    <Link
      to={to}
      className={`relative flex h-11 min-h-[44px] shrink-0 items-center overflow-hidden rounded-[1000px] px-[10px] py-1 no-underline transition-all duration-200 hover:scale-105 ${className}`}
      data-name="Button"
    >
      <span aria-hidden className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] ${isDark ? "bg-white" : "bg-black"}`} />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.09)] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]"
      />
      <span className={`${SITE_FONT} relative px-[4px] text-[13px] font-medium leading-[18px] whitespace-nowrap ${isDark ? "text-[#0a0c11]" : "text-white"}`}>
        {children}
      </span>
      <ArrowRightIcon className={isDark ? "relative text-[#0a0c11]" : "relative text-white"} />
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" aria-hidden />
    </Link>
  );
}
