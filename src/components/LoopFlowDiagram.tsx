import { Fragment } from "react";
import svgPaths from "../imports/svg-j4zqqnzmwo";
import { SITE_FONT } from "./site/siteTheme";

const STEPS = ["Prompt", "Generate", "Judge", "Refine", "Ship"] as const;

function LoopArrow() {
  return (
    <div className="relative size-4 shrink-0 overflow-clip" aria-hidden>
      <div className="absolute inset-[20.83%_12.5%]">
        <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
          <path clipRule="evenodd" d={svgPaths.p7be9470} fill="#C3C6CC" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function LoopStep({ label, isDark }: { label: string; isDark: boolean }) {
  return (
    <div
      className={`relative flex min-w-0 shrink items-center justify-center overflow-clip rounded-[14px] px-2 py-3 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)] transition-colors duration-700 sm:px-3 sm:py-[14px] md:px-3 ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
    >
      <p
        className={`${SITE_FONT} relative shrink-0 text-[11px] font-medium leading-[18px] whitespace-nowrap transition-colors duration-700 sm:text-[13px] ${isDark ? "text-white" : "text-[#0a0c11]"}`}
      >
        {label}
      </p>
    </div>
  );
}

export function LoopFlowDiagram({
  isDark,
  className = "",
  caption = "(repeat in hours, not weeks)",
}: {
  isDark: boolean;
  className?: string;
  caption?: string;
}) {
  return (
    <div className={`flex w-full flex-col items-stretch justify-center gap-6 ${className}`} data-name="Loop flow">
      <div className="flex w-full flex-nowrap items-center justify-between gap-1 sm:gap-1.5">
        {STEPS.map((step, index) => (
          <Fragment key={step}>
            {index > 0 ? <LoopArrow /> : null}
            <LoopStep label={step} isDark={isDark} />
          </Fragment>
        ))}
      </div>
      <div className="relative h-[18px] w-full shrink-0">
        <svg className="block h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418.5 18.0054">
          <path className="w-full" d={svgPaths.p1ee0a600} fill="#C3C6CC" />
        </svg>
      </div>
      <p
        className={`${SITE_FONT} relative w-full shrink-0 text-center text-[13px] font-light leading-[18px] transition-colors duration-700 ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"}`}
      >
        {caption}
      </p>
    </div>
  );
}
