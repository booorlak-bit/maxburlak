import { FOCUS_AREAS_CONTENT, SERVICES_CONTENT } from "../content/focusAreasServices";
import { SITE_FONT } from "./site/siteTheme";

function ServiceCheckIcon({ isDark }: { isDark: boolean }) {
  return (
    <svg aria-hidden className="size-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8.5" fill={isDark ? "#2a2a2a" : "#ececf0"} stroke={isDark ? "#404040" : "#d4d4d4"} />
      <path
        d="M6.75 10.15 8.55 11.95 13.35 7.15"
        stroke={isDark ? "#54cfa4" : "#409B3F"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function FocusAreasServices({ isDark = false }: { isDark?: boolean }) {
  const textColor = isDark ? "text-white" : "text-[#0a0c11]";
  const mutedColor = isDark ? "text-[#b8bcc4]" : "text-[#5b616d]";
  const cardSurface = isDark ? "bg-[#1a1a1a]" : "bg-white";
  const cardBorder = isDark ? "border-white/[0.06]" : "border-[rgba(0,0,0,0.06)]";

  return (
    <div className="w-full shrink-0 transition-colors duration-700" data-name="Focus Areas & Services">
      <div className="mx-auto w-full max-w-[1200px] px-[20px] py-[40px] md:px-[32px] md:py-[48px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="mx-8 flex min-w-0 flex-col gap-6">
            <h2
              className={`${SITE_FONT} text-[22px] font-medium leading-[1.2] tracking-[-0.2px] md:text-[25px] md:leading-[36px] ${textColor} transition-colors duration-700`}
            >
              {FOCUS_AREAS_CONTENT.title}
            </h2>
            <p className={`${SITE_FONT} text-[13px] font-light leading-[18px] md:text-[14px] md:leading-[20px] ${mutedColor} transition-colors duration-700`}>
              {FOCUS_AREAS_CONTENT.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {FOCUS_AREAS_CONTENT.chips.map((chip) => (
                <span
                  key={chip}
                  className={`${SITE_FONT} inline-flex items-center rounded-[1000px] border border-solid px-3 py-1.5 text-[13px] font-normal leading-[18px] shadow-[0px_1px_1px_rgba(0,0,0,0.03)] ${
                    isDark
                      ? "border-[rgba(0,0,0,0.08)] bg-white text-[#0a0c11]"
                      : "border-[rgba(0,0,0,0.08)] bg-[#f9f9fa] text-[#0a0c11]"
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`${cardSurface} ${cardBorder} min-w-0 rounded-[16px] border border-solid p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.03),0px_3px_3px_rgba(0,0,0,0.03)] transition-colors duration-700 md:p-8`}
          >
            <div className="flex flex-col gap-4">
              <h2
                className={`${SITE_FONT} text-[22px] font-medium leading-[1.2] tracking-[-0.2px] md:text-[25px] md:leading-[36px] ${textColor} transition-colors duration-700`}
              >
                {SERVICES_CONTENT.title}
              </h2>
              <p className={`${SITE_FONT} text-[13px] font-light leading-[18px] md:text-[14px] md:leading-[20px] ${mutedColor} transition-colors duration-700`}>
                {SERVICES_CONTENT.description}
              </p>
            </div>

            <ul className="m-0 mt-6 flex list-none flex-col gap-4 p-0 md:mt-8 md:gap-5">
              {SERVICES_CONTENT.items.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <ServiceCheckIcon isDark={isDark} />
                  <span className={`${SITE_FONT} pt-0.5 text-[13px] font-normal leading-[18px] md:text-[14px] md:leading-[20px] ${textColor} transition-colors duration-700`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
