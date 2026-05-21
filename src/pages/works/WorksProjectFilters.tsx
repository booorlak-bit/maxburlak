import {
  WORKS_PROJECT_FILTERS,
  type WorksProjectFilterId,
} from "../../content/worksPage";
import type { SiteTheme } from "../../components/site/siteTheme";

type WorksProjectFiltersProps = {
  theme: SiteTheme;
  isDark: boolean;
  activeFilter: WorksProjectFilterId;
  onFilterChange: (filter: WorksProjectFilterId) => void;
};

export function WorksProjectFilters({
  theme: t,
  isDark,
  activeFilter,
  onFilterChange,
}: WorksProjectFiltersProps) {
  return (
    <div
      className="mt-8 flex flex-wrap gap-2 md:mt-10 md:gap-3"
      role="tablist"
      aria-label="Filter projects"
    >
      {WORKS_PROJECT_FILTERS.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(filter.id)}
            className={`relative flex h-9 min-h-[36px] shrink-0 cursor-pointer items-center justify-center rounded-[1000px] border-0 px-4 py-1 transition-all duration-200 hover:scale-105 ${t.font} text-[13px] font-medium leading-[18px] whitespace-nowrap`}
          >
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] transition-colors duration-700 ${
                isActive
                  ? isDark
                    ? "bg-white"
                    : "bg-black"
                  : isDark
                    ? "bg-[rgba(255,255,255,0.1)]"
                    : "bg-[rgba(242,242,244,0.8)]"
              }`}
            />
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 rounded-[1000px] border border-solid ${
                isActive ? "border-[rgba(0,0,0,0.09)]" : t.borderHairline
              } shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]`}
            />
            <span
              className={`relative ${
                isActive ? (isDark ? "text-[#0a0c11]" : "text-white") : t.text
              }`}
            >
              {filter.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
