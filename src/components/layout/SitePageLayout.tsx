import type { ReactNode } from "react";
import { SitePageEnd } from "./SitePageEnd";
import { SiteSidebar } from "./SiteSidebar";

type SitePageLayoutProps = {
  isDark: boolean;
  route: string;
  bookCallUrl: string;
  contactEmailUrl: string;
  mainClassName?: string;
  children: ReactNode;
};

/** Index-style two-column shell: sticky sidebar + full-width main column. */
export function SitePageLayout({
  isDark,
  route,
  bookCallUrl,
  contactEmailUrl,
  mainClassName = "relative my-0 min-h-px w-full min-w-0 flex-[1_0_0] flex-col items-start py-0 md:my-[24px] md:py-[32px]",
  children,
}: SitePageLayoutProps) {
  return (
    <div
      data-layout="with-sidebar"
      data-route={route}
      className="relative my-0 box-content flex w-full shrink-0 flex-col items-start gap-4 rounded-[20px] border-0 md:my-[24px] md:gap-8 lg:flex-row lg:gap-[32px]"
    >
      <SiteSidebar isDark={isDark} bookCallUrl={bookCallUrl} contactEmailUrl={contactEmailUrl} />
      <div className={mainClassName}>
        {children}
        <SitePageEnd isDark={isDark} className="mt-12 md:mt-16 lg:mt-[104px]" />
      </div>
    </div>
  );
}
