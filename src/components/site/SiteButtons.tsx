import type { ReactNode } from "react";
import { Link } from "react-router";
import imgImage37 from "figma:asset/2d16d174ec27b3b77746f2c1f3da26f857b3f18f.png";
import svgPaths from "../../imports/svg-j4zqqnzmwo";
import { PortfolioImage } from "../PortfolioImage";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { SITE_FONT } from "./siteTheme";

export type SiteButtonSize = "xs" | "md";

type ButtonBaseProps = {
  isDark: boolean;
  children: ReactNode;
  className?: string;
  size?: SiteButtonSize;
};

type GhostExtras = {
  icon?: "arrow";
};

const GHOST_SIZE = {
  xs: {
    shell:
      "content-stretch h-[36px] min-h-[36px] px-[12px] py-[8px] gap-[2px] text-muted-foreground",
    label: "text-[12px] leading-[16px] font-medium",
    icon: "size-[14px]",
    iconInset: "inset-[20.83%_12.5%]",
  },
  md: {
    shell: "h-[44px] min-h-[44px] px-[10px] py-[4px] gap-[2px]",
    label: "text-[13px] leading-[18px]",
    icon: "size-[18px]",
    iconInset: "inset-[20.83%_12.5%]",
  },
} as const;

function GhostArrowIcon({ isDark, size }: { isDark: boolean; size: SiteButtonSize }) {
  const s = GHOST_SIZE[size];
  const arrowFill = size === "xs" ? "currentColor" : isDark ? "#B8BCC4" : "#6B7280";
  return (
    <span className={`relative flex shrink-0 items-center justify-center ${s.icon}`} data-name="Right_md">
      <span className={`absolute ${s.iconInset}`} data-name="vector">
        <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 10.5">
          <path
            clipRule="evenodd"
            d={svgPaths.p42a1880}
            fill={arrowFill}
            className="transition-colors duration-700"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </span>
  );
}

function ghostBackdropClass(isDark: boolean, size: SiteButtonSize) {
  if (size === "xs") {
    return isDark ? "bg-[#2a2a2a]" : "bg-[#f2f2f4]";
  }
  return isDark ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(242,242,244,0.8)]";
}

function ghostShellClass(isDark: boolean, size: SiteButtonSize, className: string) {
  const s = GHOST_SIZE[size];
  const textTone = size === "xs" ? "" : isDark ? "text-white" : "text-[#0a0c11]";
  return `relative flex w-fit shrink-0 cursor-pointer items-center justify-center rounded-[1000px] border-0 no-underline backdrop-blur-[12px] transition-colors duration-700 transition-all duration-200 hover:scale-105 ${s.shell} ${textTone} ${className}`;
}

function GhostShell({
  isDark,
  size,
  children,
  icon,
}: {
  isDark: boolean;
  size: SiteButtonSize;
  children: ReactNode;
  icon?: GhostExtras["icon"];
}) {
  const s = GHOST_SIZE[size];
  return (
    <>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] ${ghostBackdropClass(isDark, size)} transition-colors duration-700`}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.06)] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]"
      />
      <span className={`${SITE_FONT} relative px-[4px] font-medium whitespace-nowrap ${s.label}`}>{children}</span>
      {icon === "arrow" ? <GhostArrowIcon isDark={isDark} size={size} /> : null}
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]"
        aria-hidden
      />
    </>
  );
}

/** Filled primary — matches header “Book a call”. */
export function SitePrimaryButton({
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
      className={`relative flex h-[44px] min-h-[44px] shrink-0 cursor-pointer items-center justify-center gap-[8px] rounded-[1000px] border-0 px-[12px] py-[4px] transition-all duration-200 hover:scale-105 hover:shadow-lg ${className}`}
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
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" aria-hidden />
    </button>
  );
}

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
  size = "md",
  icon,
  onClick,
  type = "button",
}: ButtonBaseProps & GhostExtras & { onClick?: () => void; type?: "button" | "submit" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={ghostShellClass(isDark, size, className)}
      data-name="Button"
    >
      <GhostShell isDark={isDark} size={size} icon={icon}>
        {children}
      </GhostShell>
    </button>
  );
}

/** Glass pill link — secondary navigation (e.g. “Chat with me”, case studies). */
export function SiteGhostLink({
  isDark,
  to,
  children,
  className = "",
  size = "md",
  icon,
}: ButtonBaseProps & GhostExtras & { to: string }) {
  return (
    <Link to={to} className={ghostShellClass(isDark, size, className)} data-name="Button">
      <GhostShell isDark={isDark} size={size} icon={icon}>
        {children}
      </GhostShell>
    </Link>
  );
}

/** Glass pill external link — mailto / outbound, same shell as SiteGhostLink. */
export function SiteGhostAnchor({
  isDark,
  href,
  children,
  className = "",
  size = "md",
  icon,
}: ButtonBaseProps & GhostExtras & { href: string }) {
  return (
    <a href={href} className={ghostShellClass(isDark, size, className)} data-name="Button">
      <GhostShell isDark={isDark} size={size} icon={icon}>
        {children}
      </GhostShell>
    </a>
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
      className={`relative flex h-11 min-h-[44px] w-fit shrink-0 items-center overflow-hidden rounded-[1000px] px-[10px] py-1 no-underline transition-all duration-200 hover:scale-105 ${className}`}
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
