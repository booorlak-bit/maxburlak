import type { CSSProperties, ReactNode } from "react";
import type { HomeSectionId } from "./sectionIds";
import { useHomeSections } from "./useHomeSections";

type HomeSectionProps = {
  id: HomeSectionId;
  children: ReactNode;
  className?: string;
};

/** Wraps a homepage block — visibility and flex order come from Sanity. */
export function HomeSection({ id, children, className }: HomeSectionProps) {
  const { sectionProps } = useHomeSections();
  const { style, hidden } = sectionProps(id);

  if (hidden) return null;

  return (
    <section
      className={className}
      data-home-section={id}
      style={style as CSSProperties}
    >
      {children}
    </section>
  );
}
