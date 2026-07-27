import { usePostHog } from "@posthog/react";
import { ContactForm } from "../ContactForm";
import { PortfolioImage } from "../PortfolioImage";
import svgPaths from "../../imports/svg-j4zqqnzmwo";
import imgImage37 from "figma:asset/2d16d174ec27b3b77746f2c1f3da26f857b3f18f.png";

type SiteContactSectionProps = {
  isDark: boolean;
  bookCallUrl: string;
  contactEmailUrl: string;
  contactEmail: string;
  linkedinUrl: string;
  dribbbleUrl: string;
};

export function SiteContactSection({
  isDark,
  bookCallUrl,
  contactEmailUrl,
  contactEmail,
  linkedinUrl,
  dribbbleUrl,
}: SiteContactSectionProps) {
  const posthog = usePostHog();

  const handleBookCallClick = () => {
    posthog?.capture("book_call_clicked", { source: "contact_section" });
  };

  const handleSocialLinkClick = (platform: string) => {
    posthog?.capture("social_link_clicked", { platform });
  };

  return (
    <>
      <div className="content-stretch flex flex-col lg:flex-row items-stretch overflow-x-clip relative w-full shrink-0" data-name="Contact CTA">
        <div className={`relative w-full min-w-0 flex-[1_0_0] self-stretch ${isDark ? "bg-[#151515]" : "bg-[#f9f9fa]"} transition-colors duration-700`}>
          <div className="relative flex h-auto w-full flex-col items-start gap-4 p-[32px] md:p-8">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div
                className={`${isDark ? "bg-[rgba(64,155,63,0.2)]" : "bg-[#e3f6e2]"} transition-colors duration-700 content-stretch flex gap-[2px] h-[28px] items-center justify-center pl-[2px] pr-[6px] py-[4px] relative rounded-[9999px] shrink-0`}
                data-name="Tag_special"
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-0 border-solid inset-0 pointer-events-none rounded-[9999px] ${isDark ? "border-[rgba(64,155,63,0.4)]" : "border-[rgba(64,155,63,0.35)]"} transition-colors duration-700`}
                />
                <div
                  className="backdrop-blur-[12px] bg-gradient-to-b from-[rgba(64,155,63,0.56)] relative rounded-[1000px] shrink-0 size-[24px] to-[rgba(64,155,63,0.2)]"
                  data-name="avatar"
                >
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="Icon / Tick">
                    <div className="absolute inset-[4.17%]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
                        <path clipRule="evenodd" d={svgPaths.pa0b69f0} fill="var(--fill-0, #69C068)" fillRule="evenodd" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_md">
                  <p
                    className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-[#c8f0c7]" : "text-[#2d7a2c]"} transition-colors duration-700`}
                  >
                    Available for new projects
                  </p>
                </div>
              </div>
              <p
                className={`w-full max-w-full font-['Switzer_Variable:Regular',sans-serif] text-[22px] font-medium leading-[30px] tracking-[-0.2px] md:text-[25px] md:leading-[36px] ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}
              >
                Book a discovery call and let’s create valuable digital experience together.
              </p>
              <p
                className={`w-full max-w-full font-['Switzer_Variable:Regular',sans-serif] text-[15px] font-light leading-[22px] md:text-[13px] md:leading-[18px] ${isDark ? "text-[rgba(255,255,255,0.88)]" : "text-[#5b616d]"} transition-colors duration-700`}
              >
                {`Max works best with founders who value speed, clarity, and outcomes over pixel-perfect decks. If you're building something real, let's figure out how he can help.`}
              </p>
            </div>
            <div className="flex flex-wrap gap-[16px] items-start">
              {["Founding Designer", "Design systems", "Product Strategy", "AI Integration"].map((tag) => (
                <div
                  key={tag}
                  className="content-stretch flex gap-[2px] h-[28px] items-center justify-center px-[6px] py-[4px] relative rounded-[8px] shrink-0"
                  data-name="Tag_special"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[8px] ${isDark ? "bg-[rgba(46,46,46,0.8)]" : "bg-[#ececf0]"} transition-colors duration-700`}
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.09)] ${isDark ? "border-[rgba(255,255,255,0.03)]" : "border-[rgba(0,0,0,0.06)]"} transition-colors duration-700`}
                  />
                  <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_md">
                    <p
                      className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}
                    >
                      {tag}
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`relative w-full min-w-0 flex-[1_0_0] ${isDark ? "bg-[#151515]" : "bg-[#f9f9fa]"} transition-colors duration-700`}>
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 border-l border-solid ${isDark ? "border-[rgba(255,255,255,0.12)]" : "border-[#0a0c11]/[0.08]"} transition-colors duration-700 max-lg:border-l-0`}
          />
          <div className="flex h-auto w-full flex-col items-end">
            <div className="relative flex h-auto w-full flex-col items-end p-[32px] md:p-8">
              <ContactForm isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${isDark ? "bg-[#f9f9fa]" : "bg-[#151515]"} transition-colors duration-700 h-[238px] relative shrink-0 w-full`}>
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] p-4 md:p-8 relative size-full">
            <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0">
              <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative size-full">
                <p
                  className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] min-w-full relative shrink-0 ${isDark ? "text-[#5b616d]" : "text-[#d1d5db]"} transition-colors duration-700 text-[13px] w-[min-content]`}
                >
                  Skip the form
                </p>
                <a
                  className={`decoration-[6.5%] decoration-dotted font-['Open_Sauce_Two:Regular',sans-serif] font-medium leading-[36px] min-w-full not-italic relative shrink-0 ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700 text-[25px] tracking-[-0.2px] underline w-[min-content] cursor-pointer transition-colors duration-200 ${isDark ? "hover:text-black" : "hover:text-white/80"}`}
                  href={contactEmailUrl}
                >
                  {contactEmail}
                </a>
                <div className="content-stretch flex flex-col gap-3 sm:flex-row sm:gap-4 items-stretch sm:items-start relative shrink-0 w-full">
                  <a
                    href={bookCallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleBookCallClick}
                    className="content-stretch flex gap-[8px] h-[44px] min-h-[44px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline"
                    data-name="Button"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute backdrop-blur-[12px] ${isDark ? "bg-black" : "bg-white"} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]"
                    />
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                      <p
                        className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}
                      >
                        Grab 15 mins
                      </p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                      <div className="relative shrink-0 size-[18px]" data-name="icons / google meet">
                        <div className="absolute inset-[10%_0]" data-name="image 37">
                          <PortfolioImage alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialLinkClick("linkedin")}
                    className="content-stretch flex gap-[8px] h-[44px] min-h-[44px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline"
                    data-name="Button"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute backdrop-blur-[12px] ${isDark ? "bg-[rgba(242,242,244,0.8)]" : "bg-[rgba(255,255,255,0.1)]"} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]"
                    />
                    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Left_md">
                      <div
                        className={`relative shrink-0 size-[18px] ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`}
                        data-name="linkedin"
                      >
                        <div className="absolute inset-[12.5%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                            <path d={svgPaths.pbc58000} fill="currentColor" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                      <p
                        className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] whitespace-nowrap ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`}
                      >
                        Linkedin
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                  </a>
                  <a
                    href={dribbbleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialLinkClick("dribbble")}
                    className="content-stretch flex gap-[8px] h-[44px] min-h-[44px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline"
                    data-name="Button"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute backdrop-blur-[12px] ${isDark ? "bg-[rgba(242,242,244,0.8)]" : "bg-[rgba(255,255,255,0.1)]"} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]"
                    />
                    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Left_md">
                      <div
                        className={`overflow-clip relative shrink-0 size-[18px] ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`}
                        data-name="dribbble"
                      >
                        <div className="absolute inset-[8.33%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                            <path d={svgPaths.p1980ea00} fill="currentColor" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                      <p
                        className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] whitespace-nowrap ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`}
                      >
                        dribbble.com
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
