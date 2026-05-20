import { Link } from "react-router";
import { SocialIconButtons } from "../SocialIconButtons";

type SiteFooterProps = {
  isDark: boolean;
};

export function SiteFooter({ isDark }: SiteFooterProps) {
  return (
    <footer
      data-site-footer
      className={`${isDark ? "bg-[#1a1a1a]" : "bg-[#f9f9fa]"} relative w-full shrink-0 transition-colors duration-700`}
      data-name="Pro Blocks / Footer / 7."
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 border-t border-solid transition-colors duration-700 ${isDark ? "border-[rgba(255,255,255,0.08)]" : "border-[rgba(0,0,0,0.12)]"}`}
      />
      <div className="relative w-full px-[32px] pb-16 pt-8 md:pb-24 md:pt-10">
        <div
          className="grid w-full grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.50fr)_minmax(0,0.50fr)]"
          data-name="Grid"
        >
          <div
            className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-center justify-self-stretch relative row-1 self-start shrink-0"
            data-name="Column"
          >
            <p
              className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[36px] relative shrink-0 text-[25px] tracking-[-0.2px] w-full ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"} transition-colors duration-700`}
            >
              2026
            </p>
            <p
              className={`font-['Switzer_Variable:Medium',sans-serif] font-semibold leading-[44px] relative shrink-0 ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700 text-[42px] tracking-[-0.2px] w-full`}
            >
              maxburlak.com
            </p>
            <p
              className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"} transition-colors duration-700 text-[13px] w-full`}
            >
              AI-driven product designer helping founders design experience, build systems and foundations.
            </p>
            <SocialIconButtons isDark={isDark} />
          </div>
          <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Column">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[18px] p-[32px] relative size-full">
              <p
                className={`font-['Switzer_Variable:Medium',sans-serif] font-medium relative shrink-0 ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700 text-[15px] w-full`}
              >
                Work
              </p>
              <div
                className={`content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-light gap-[12px] items-start relative shrink-0 ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"} transition-colors duration-700 text-[13px] w-full`}
                data-name="Flex Vertical"
              >
                <Link
                  className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"}`}
                  to="/works"
                >
                  Works
                </Link>
                <Link
                  className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"}`}
                  to="/approach"
                >
                  Approach
                </Link>
                <Link
                  className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"}`}
                  to="/ventures"
                >
                  Ventures
                </Link>
                <Link
                  className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"}`}
                  to="/feed"
                >
                  Feed
                </Link>
                <Link
                  className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"}`}
                  to="/playground"
                >
                  Playground
                </Link>
              </div>
            </div>
          </div>
          <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Column">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[18px] p-[32px] relative size-full">
              <p
                className={`font-['Switzer_Variable:Medium',sans-serif] font-medium relative shrink-0 ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700 text-[15px] w-full`}
              >
                Connect
              </p>
              <div
                className={`content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-light gap-[12px] items-start relative shrink-0 ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"} transition-colors duration-700 text-[13px] w-full`}
                data-name="Flex Vertical"
              >
                <Link
                  className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"}`}
                  to="/about"
                >
                  About
                </Link>
                <p className="relative shrink-0 w-full">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
