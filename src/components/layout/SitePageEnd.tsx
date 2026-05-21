import { SiteContactSection } from "./SiteContactSection";
import { SiteFooter } from "./SiteFooter";
import { useSiteUrls } from "./useSiteUrls";

type SitePageEndProps = {
  isDark: boolean;
  className?: string;
  showContact?: boolean;
};

/** Shared contact CTA, email strip, and footer from the homepage. */
export function SitePageEnd({ isDark, className = "", showContact = true }: SitePageEndProps) {
  const urls = useSiteUrls();

  return (
    <div className={`content-stretch flex w-full flex-col items-start ${className}`}>
      {showContact ? (
        <section id="contact" className="content-stretch flex w-full flex-col items-start relative shrink-0">
          <SiteContactSection isDark={isDark} {...urls} />
        </section>
      ) : null}
      <SiteFooter isDark={isDark} />
    </div>
  );
}
