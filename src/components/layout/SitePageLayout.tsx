import type { ReactNode } from "react";
import { SitePageEnd } from "./SitePageEnd";
import { SiteSidebar } from "./SiteSidebar";

type SitePageLayoutProps = {
  isDark: boolean;
  route: string;
  bookCallUrl?: string;
  contactEmailUrl?: string;
  withSidebar?: boolean;
  mainClassName?: string;
  showPageEnd?: boolean;
  showContact?: boolean;
  children: ReactNode;
};

const sidebarMainClassName =
  "relative my-0 min-h-px w-full min-w-0 flex-[1_0_0] flex-col items-start py-0 md:my-[24px] md:py-[32px]";
const fullWidthMainClassName =
  "relative my-0 min-h-px w-full min-w-0 flex-col items-start py-0 md:my-[24px] md:py-[32px]";

/** Page shell — index uses sticky sidebar + main column; other routes stay full width. */
export function SitePageLayout({
  isDark,
  route,
  bookCallUrl,
  contactEmailUrl,
  withSidebar = false,
  mainClassName,
  showPageEnd = true,
  showContact = true,
  children,
}: SitePageLayoutProps) {
  const useSidebar = withSidebar && Boolean(bookCallUrl && contactEmailUrl);
  const resolvedMainClassName = mainClassName ?? (useSidebar ? sidebarMainClassName : fullWidthMainClassName);

  if (useSidebar) {
    return (
      <div
        data-layout="with-sidebar"
        data-route={route}
        className="relative my-0 box-content flex w-full shrink-0 flex-col items-start gap-4 rounded-[20px] border-0 md:my-[24px] md:gap-8 lg:flex-row lg:gap-[32px]"
      >
        <SiteSidebar isDark={isDark} bookCallUrl={bookCallUrl!} contactEmailUrl={contactEmailUrl!} />
        <div className={resolvedMainClassName}>
          {children}
          {showPageEnd ? (
            <SitePageEnd isDark={isDark} showContact={showContact} className="mt-12 md:mt-16 lg:mt-[104px]" />
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      data-layout="full-width"
      data-route={route}
      className="relative my-0 box-content flex w-full shrink-0 flex-col items-start rounded-[20px] border-0 md:my-[24px]"
    >
      <div className={resolvedMainClassName}>
        {children}
        {showPageEnd ? (
          <SitePageEnd isDark={isDark} showContact={showContact} className="mt-12 md:mt-16 lg:mt-[104px]" />
        ) : null}
      </div>
    </div>
  );
}
