import { ApolloLogo } from "../ApolloLogo";
import { CommunLogo } from "../CommunLogo";
import { DefaultLogo } from "../DefaultLogo";
import { KinescopeLogo } from "../KinescopeLogo";
import { P2pValidatorLogo } from "../P2pValidatorLogo";
import { SiteGhostAnchor } from "../site/SiteButtons";
import { PortfolioImage } from "../PortfolioImage";
import { FliqMarkIcon, GradeStudioMarkIcon, PinnboardsMarkIcon } from "../ventureMarkIcons";
import svgPaths from "../../imports/svg-j4zqqnzmwo";
import imgImage37 from "figma:asset/2d16d174ec27b3b77746f2c1f3da26f857b3f18f.png";

type SiteSidebarProps = {
  isDark: boolean;
  bookCallUrl: string;
  contactEmailUrl: string;
};

export function SiteSidebar({ isDark, bookCallUrl, contactEmailUrl }: SiteSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:sticky lg:top-[84px] lg:w-1/4 lg:min-w-[280px] lg:overflow-x-hidden 2xl:w-[33%]" data-name="Site sidebar">
      <div className="relative box-border flex w-full flex-col items-start justify-between p-4 md:p-[24px] lg:min-h-[calc(100svh-84px)] lg:p-[32px]">
        <div className="content-stretch flex w-full flex-col items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full my-0 md:my-[24px] box-content border-0">
            <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#ececf0]'} transition-colors duration-700 content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[16px] shrink-0`}>
              <div className="bg-[#54cfa4] rounded-[12px] shrink-0 size-[8px]" />
              <div className={`flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[clamp(14px,1.15vw,15px)] whitespace-nowrap`}>
                <p className="font-normal leading-[18px] text-[13px]">3x times Founding Designer</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[22px] items-start relative shrink-0 w-full">
              <h1 className={`font-medium leading-[1.14] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[clamp(26px,7vw,32px)] tracking-[-0.4px] w-full`}>Max, AI-driven product designer who helps founders to design experience, build systems and foundations.</h1>
              <p className={`font-normal leading-[1.4] relative shrink-0 ${isDark ? 'text-[#b8bcc4]' : 'text-[#5b616d]'} transition-colors duration-700 text-[clamp(14px,1.2vw,15px)] w-full max-w-[92%]`}>Helped to gain ARR from 0 to 2,5M+ in less then a year for various startups and to prepare for multiple funding rounds for different companies with total amount around $ 150M</p>
            </div>
            <div className="content-stretch flex flex-wrap gap-[10px] items-start mt-[10px] relative shrink-0">
              <a href={bookCallUrl} target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[8px] h-[44px] min-h-[44px] items-center justify-center px-[12px] py-[4px] relative rounded-[28px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg no-underline" data-name="Button">
                <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[28px] transition-all duration-200`} />
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[14px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>Book a call</p>
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
              <a href={contactEmailUrl} className="content-stretch flex gap-[2px] h-[44px] min-h-[44px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
                <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px] transition-all duration-200`} />
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[14px] whitespace-nowrap`}>Chat with me</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                  <div className="overflow-clip relative shrink-0 size-[18px]" data-name="filled=on, stroke=1, radius=0, join=round">
                    <div className="absolute inset-[20.83%_12.5%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 10.5">
                        <path clipRule="evenodd" d={svgPaths.p42a1880} fill={isDark ? "#B8BCC4" : "#6B7280"} className="transition-colors duration-700" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
              </a>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start mt-0 mb-[24px] pt-[32px] relative shrink-0 w-full box-content border-0 transition-colors duration-700">
              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-[400] leading-[18px] min-w-full relative shrink-0 ${isDark ? 'text-[#b8bcc4]' : 'text-[#5b616d]'} transition-colors duration-700 text-[clamp(13px,1.15vw,15px)] w-[min-content]`}>Trusted by many companies for over a decade</p>
              <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="Wallet_group">
                <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                  <DefaultLogo size={34} className="rounded-[6.448px]" />
                </div>
                <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                  <ApolloLogo size={34} className="rounded-[6px]" />
                </div>
                <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                  <div className="relative shrink-0 size-[34px]">
                    <div className="absolute inset-[0_-0.85%_-0.84%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2206 26.2196">
                        <g id="Frame 1000004181">
                          <rect fill="var(--fill-0, #323D4C)" height="26" rx="6" width="26" />
                          <rect height="25.4421" rx="5.72107" stroke="var(--stroke-0, black)" strokeOpacity="0.09" strokeWidth="0.557861" width="25.4421" x="0.278931" y="0.278931" />
                          <g id="Contrast border">
                            <rect height="25.732" rx="5.75625" stroke="var(--stroke-0, black)" strokeOpacity="0.08" strokeWidth="0.4875" width="25.732" x="0.244845" y="0.243868" />
                          </g>
                          <g id="Vector">
                            <path d={svgPaths.p3c111f20} fill="#0EE471" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                  <KinescopeLogo size={34} className="rounded-[6px]" />
                </div>
                <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                  <P2pValidatorLogo size={34} className="rounded-[6px]" />
                </div>
                <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                  <CommunLogo size={34} className="rounded-[6.448px]" />
                </div>
                <div className="content-stretch flex flex-col items-start p-[3px] relative shrink-0 h-[40px] w-[78px]">
                  <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative rounded-[8px] shrink-0 w-full`}>
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
                        <div className={`flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${isDark ? 'text-[#b8bcc4]' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>
                          <p className="leading-[18px]">30+ more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full mt-[24px] mb-[24px] box-content border-0">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start mt-[24px] mb-0 relative shrink-0 w-full">
              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-[#b8bcc4]' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Ventures</p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Wallet_group">
                <div className="content-stretch flex isolate items-center pr-[22px] relative shrink-0">
                  <div className="flex items-center justify-center mr-[-22px] relative shrink-0 size-[53.889px] z-[3]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "19" } as React.CSSProperties}>
                    <div className="flex-none rotate-15">
                      <div className="content-stretch flex items-center p-[4.125px] relative rounded-[11px] size-[44px]">
                        <div className="overflow-clip relative rounded-[8px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03)] shrink-0 size-[36px]" data-name="icon">
                          <div className="absolute inset-0 overflow-clip rounded-[9px] border border-[#252525] border-solid bg-[#252525] size-[36px]" data-name=".icon">
                            <GradeStudioMarkIcon className="block size-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mr-[-22px] relative shrink-0 size-[53.889px] z-[2]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "19" } as React.CSSProperties}>
                    <div className="flex-none rotate-15">
                      <div className="content-stretch flex items-center p-[4.125px] relative rounded-[11px] size-[44px]">
                        <div className="overflow-clip relative rounded-[8px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03)] shrink-0 size-[36px]" data-name="icon">
                          <div className="absolute inset-0 overflow-clip rounded-[9px] size-[36px]" data-name=".icon">
                            <FliqMarkIcon className="block size-full" idSuffix="sidebar" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mr-[-22px] relative shrink-0 size-[53.889px] z-[1]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "51" } as React.CSSProperties}>
                    <div className="flex-none rotate-15">
                      <div className="content-stretch flex items-center p-[4.125px] relative rounded-[11px] size-[44px]">
                        <div className="relative rounded-[8px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)] shrink-0 size-[36.089px]" data-name="icon">
                          <PinnboardsMarkIcon className="block size-full" glowFilterId="pinnboardsGlowSidebar" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={`box-content mb-0 mt-2 flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-light leading-[0] min-h-px min-w-px relative ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[13px]`}>
                  <span className="leading-[18px]">{`Building 3 pet-projects and `}</span>
                  <span className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline cursor-pointer transition-colors duration-200 hover:text-black">wrote 1 playbook</span>
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="map-pin, location">
              <div className="absolute inset-[8.33%_16.67%_10.4%_16.67%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6277">
                  <path clipRule="evenodd" d={svgPaths.p3a68b400} fill={isDark ? "#B8BCC4" : "#6B7280"} className="transition-colors duration-700" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-[#b0b4bb]' : 'text-[#0a0c11]'} transition-colors duration-700 text-[13px]`}>Currently in Barcelona, Spain</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
