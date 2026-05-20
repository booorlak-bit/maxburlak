import type { ReactNode } from "react";
import type { SiteTheme } from "../../components/site/siteTheme";

export function PageSection({
  children,
  className = "",
  id,
  panel,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  panel?: boolean;
}) {
  return (
    <section id={id} className={`py-8 md:py-[32px] ${panel ? "" : ""} ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  theme: t,
  label,
  title,
  subtitle,
  id,
  centered,
}: {
  theme: SiteTheme;
  label?: string;
  title: string;
  subtitle?: string;
  id?: string;
  centered?: boolean;
}) {
  return (
    <header className={`mb-8 flex flex-col gap-2 md:mb-10 md:gap-[8px] ${centered ? "text-center" : ""}`}>
      {label ? (
        <p className={`${t.font} ${t.muted} text-[12px] font-medium uppercase tracking-[0.12em]`}>{label}</p>
      ) : null}
      <h2 id={id} className={`${t.font} ${t.text} ${t.h2} ${t.transition}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`${t.font} ${t.muted} ${t.caption} ${t.transition} ${centered ? "mx-auto max-w-[640px]" : "max-w-[640px]"}`}>
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

export function FlowArrow({ theme: t }: { theme: SiteTheme }) {
  return (
    <span className={`shrink-0 text-[13px] ${t.muted}`} aria-hidden>
      →
    </span>
  );
}

export function TimeBars({
  label,
  rows,
  theme: t,
  variant,
}: {
  label: string;
  rows: { label: string; pct: number }[];
  theme: SiteTheme;
  variant: "before" | "after";
}) {
  const barBg = variant === "before" ? t.barMuted : t.barAccent;

  return (
    <div className="flex flex-1 flex-col gap-4">
      <p className={`${t.font} ${t.label} ${t.muted} uppercase tracking-[0.08em]`}>{label}</p>
      <ul className="flex flex-col gap-3">
        {rows.map((row) => (
          <li key={row.label}>
            <div className="mb-1.5 flex justify-between gap-2">
              <span className={`${t.font} ${t.bodyMedium} ${t.text}`}>{row.label}</span>
              <span className={`${t.font} ${t.caption} tabular-nums`}>{row.pct}%</span>
            </div>
            <div className={`h-2 w-full overflow-hidden rounded-full ${t.track}`}>
              <div className={`h-full rounded-full ${barBg}`} style={{ width: `${row.pct}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DataTable({
  theme: t,
  columns,
  rows,
  minWidth = 640,
}: {
  theme: SiteTheme;
  columns: string[];
  rows: { key: string; cells: ReactNode[] }[];
  minWidth?: number;
}) {
  return (
    <div className={`overflow-x-auto rounded-[16px] border border-solid ${t.borderHairline}`}>
      <table className={`${t.font} w-full border-collapse text-left`} style={{ minWidth }}>
        <thead>
          <tr className={t.cardInset}>
            {columns.map((h) => (
              <th key={h} className={`border-b border-solid px-4 py-3 ${t.borderHairline} ${t.label} ${t.muted}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className={t.card}>
              {row.cells.map((cell, i) => {
                const colCount = row.cells.length;
                const emphasize =
                  i === 0 || (colCount === 4 && i === 2) || (colCount === 3 && i === 2);
                return (
                  <td
                    key={i}
                    className={`border-b border-solid px-4 py-3 ${t.borderHairline} ${emphasize ? `${t.text} font-medium` : t.muted} ${i === 1 ? "whitespace-nowrap" : ""}`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
