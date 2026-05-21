import type { ReactNode } from "react";
import { SitePageEnd } from "./SitePageEnd";

type SitePageLayoutProps = {
  isDark: boolean;
  route: string;
  mainClassName?: string;
  showPageEnd?: boolean;
  showContact?: boolean;
  children: ReactNode;
};

/** Full-width page shell with optional footer end block. */
export function SitePageLayout({
  isDark,
  route,
  mainClassName = "relative my-0 min-h-px w-full min-w-0 flex-col items-start py-0 md:my-[24px] md:py-[32px]",
  showPageEnd = true,
  showContact = true,
  children,
}: SitePageLayoutProps) {
  return (
    <div
      data-layout="full-width"
      data-route={route}
      className="relative my-0 box-content flex w-full shrink-0 flex-col items-start rounded-[20px] border-0 md:my-[24px]"
    >
      <div className={mainClassName}>
        {children}
        {showPageEnd ? (
          <SitePageEnd isDark={isDark} showContact={showContact} className="mt-12 md:mt-16 lg:mt-[104px]" />
        ) : null}
      </div>
    </div>
  );
}
