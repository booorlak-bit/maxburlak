import type { ReactNode } from "react";
import { ApolloLogo } from "./ApolloLogo";
import { DefaultLogo } from "./DefaultLogo";
import { CommunLogo } from "./CommunLogo";
import { KinescopeLogo } from "./KinescopeLogo";
import { P2pValidatorLogo } from "./P2pValidatorLogo";
import { CvViewerButton } from "./CvViewer";

type CareerEntry = {
  company: string;
  role: string;
  period: string;
  projects?: string;
  logo: ReactNode;
};

const CAREER_ENTRIES: CareerEntry[] = [
  {
    company: "Default.com",
    role: "Founding Product Designer → Design Lead",
    period: "Jan 2023 — Jan 2026 · Full-time · 3 yrs 1 mo",
    logo: <DefaultLogo size={56} className="rounded-[8px]" />,
  },
  {
    company: "Apollo.io",
    role: "Senior Product Designer → Design Lead → Design System Lead",
    period: "Jun 2021 — Jan 2023 · Full-time · 1 yr 8 mos",
    logo: <ApolloLogo size={56} className="rounded-[8px]" />,
  },
  {
    company: "P2P Validator",
    role: "Senior Product Designer",
    period: "Oct 2020 — Jun 2021 · Full-time · 9 mos",
    logo: <P2pValidatorLogo size={56} className="rounded-[8px]" />,
  },
  {
    company: "Commun",
    role: "Lead Product Designer",
    period: "Jul 2020 — Oct 2020 · Full-time · 4 mos",
    projects: "P2P.org · commun.com",
    logo: <CommunLogo size={56} className="rounded-[8px]" />,
  },
  {
    company: "Kinescope",
    role: "Senior Product Designer",
    period: "Aug 2018 — May 2020 · Full-time · 1 yr 10 mos",
    logo: <KinescopeLogo size={56} className="rounded-[8px]" />,
  },
];

function CareerEntryBlock({ entry, isDark, isLast }: { entry: CareerEntry; isDark: boolean; isLast: boolean }) {
  const textColor = isDark ? "text-white" : "text-[#0a0c11]";
  const mutedColor = isDark ? "text-[#b8bcc4]" : "text-[#5b616d]";

  return (
    <li
      className={
        isLast
          ? "list-none"
          : `list-none border-b pb-8 mb-8 ${isDark ? "border-white/[0.08]" : "border-[#0a0c11]/[0.08]"}`
      }
    >
      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div className="min-w-0 flex-1 space-y-1 font-['Switzer_Variable:Regular',sans-serif] text-[15px] leading-[22px] md:text-[13px] md:leading-[20px]">
          <p className={`text-[18px] font-normal ${textColor} transition-colors duration-700`}>{entry.company}</p>
          <p className={`${textColor} transition-colors duration-700`}>{entry.role}</p>
          <p className={`font-normal ${mutedColor} transition-colors duration-700`}>{entry.period}</p>
          {entry.projects ? <p className={`font-normal ${mutedColor} transition-colors duration-700`}>{entry.projects}</p> : null}
        </div>
        <div className="shrink-0 pt-0.5">{entry.logo}</div>
      </div>
    </li>
  );
}

export function CareerPath({ isDark = false }: { isDark?: boolean }) {
  return (
    <div
      className="w-full shrink-0 transition-colors duration-700"
      data-name="Career Path"
    >
      <div className="mx-auto w-full max-w-[1200px] px-[20px] py-[40px] md:px-[32px] md:py-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)_minmax(0,1fr)]">
          <div aria-hidden className="hidden lg:block" />
          <div className="min-w-0">
            <div className="mb-8 text-center md:mb-10">
              <h2
                className={`font-['Switzer_Variable:Regular',sans-serif] text-[22px] font-medium tracking-[-0.2px] md:text-[25px] ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}
              >
                Career Path
              </h2>
            </div>
            <ul className="m-0 flex w-full flex-col p-0">
              {CAREER_ENTRIES.map((entry) => (
                <CareerEntryBlock
                  key={entry.company}
                  entry={entry}
                  isDark={isDark}
                  isLast={false}
                />
              ))}
              <li className="list-none">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p
                    className={`min-w-0 font-['Switzer_Variable:Regular',sans-serif] text-[15px] font-light leading-[22px] md:text-[15px] md:leading-[20px] ${isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"} transition-colors duration-700`}
                  >
                    6 More positions since 2012
                  </p>
                  <CvViewerButton isDark={isDark} />
                </div>
              </li>
            </ul>
          </div>
          <div aria-hidden className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
