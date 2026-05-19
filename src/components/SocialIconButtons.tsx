import type { ReactNode } from "react";
import svgPaths from "../imports/svg-j4zqqnzmwo";

type SocialIconButtonsProps = {
  isDark?: boolean;
  className?: string;
};

function IconPillLink({
  children,
  href,
  isDark,
  label,
}: {
  children: ReactNode;
  href: string;
  isDark: boolean;
  label: string;
}) {
  return (
    <a
      aria-label={label}
      className="relative flex size-[40px] shrink-0 items-center justify-center rounded-[1000px] transition-all duration-200 hover:scale-105"
      href={href}
      rel="noopener noreferrer"
      target={href.startsWith("mailto:") ? undefined : "_blank"}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] transition-colors duration-700 ${
          isDark ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(242,242,244,0.8)]"
        }`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[1000px] border border-solid shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] transition-colors duration-700 ${
          isDark ? "border-[rgba(255,255,255,0.1)]" : "border-[rgba(0,0,0,0.06)]"
        }`}
      />
      <span
        className={`relative flex size-[18px] items-center justify-center transition-colors duration-700 ${
          isDark ? "text-white" : "text-[#0a0c11]"
        }`}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]"
      />
    </a>
  );
}

export function SocialIconButtons({ isDark = false, className = "" }: SocialIconButtonsProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${className}`}
      data-name="Social icon buttons"
    >
      <IconPillLink href="https://www.linkedin.com/in/maxburlak/" isDark={isDark} label="LinkedIn">
        <svg className="size-full" fill="none" viewBox="0 0 13.5 13.5" aria-hidden>
          <path d={svgPaths.pbc58000} fill="currentColor" />
        </svg>
      </IconPillLink>

      <IconPillLink href="https://medium.com/@booorlak" isDark={isDark} label="Medium">
        <svg className="size-full" fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm6.45-6.78a1.14 1.14 0 00-1.99.78v11.56a1.14 1.14 0 001.99-.78V5.22a1.14 1.14 0 00-1.01-.78zm-3.2 0a1.14 1.14 0 00-1.99.78v11.56a1.14 1.14 0 001.99-.78V5.22a1.14 1.14 0 00-1.01-.78z"
            fill="currentColor"
          />
        </svg>
      </IconPillLink>

      <IconPillLink href="https://dribbble.com/maxburlak" isDark={isDark} label="Dribbble">
        <svg className="size-full" fill="none" viewBox="0 0 15 15" aria-hidden>
          <path d={svgPaths.p1980ea00} fill="currentColor" />
        </svg>
      </IconPillLink>

      <IconPillLink href="mailto:hey@maxburlak.com" isDark={isDark} label="Email">
        <svg className="size-full" fill="none" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="m22 6-10 7L2 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </IconPillLink>
    </div>
  );
}
