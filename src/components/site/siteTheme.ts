/** Shared typography and surface tokens (matches MainV2 / homepage). */
export const SITE_FONT = "font-['Switzer_Variable:Regular',sans-serif]";

export function getSiteTheme(isDark: boolean) {
  return {
    font: SITE_FONT,
    text: isDark ? "text-white" : "text-[#0a0c11]",
    muted: isDark ? "text-[#b8bcc4]" : "text-[#5b616d]",
    surface: isDark ? "bg-[#0a0a0a]" : "bg-white",
    panel: isDark ? "bg-[#151515]" : "bg-[#f9f9fa]",
    card: isDark ? "bg-[#1a1a1a]" : "bg-white",
    cardInset: isDark ? "bg-[#2a2a2a]" : "bg-[#f9f9fa]",
    pill: isDark ? "bg-[#2a2a2a]" : "bg-[#f2f2f4]",
    borderHairline: isDark ? "border-white/[0.06]" : "border-[rgba(0,0,0,0.06)]",
    borderDashed: isDark ? "border-white/15" : "border-[rgba(0,0,0,0.12)]",
    h1: "text-[clamp(26px,4vw,32px)] font-medium leading-[1.14] tracking-[-0.4px]",
    h2: "text-[25px] font-medium leading-[36px] tracking-[-0.2px]",
    h3: "text-[22px] font-medium leading-[30px] tracking-[-0.2px]",
    body: "text-[15px] font-light leading-[20px]",
    bodyMedium: "text-[15px] font-medium leading-[20px]",
    caption: "text-[13px] font-light leading-[18px]",
    label: "text-[13px] font-medium leading-[18px]",
    aiAccent: "text-[#6f61ff]",
    barMuted: isDark ? "bg-[#404040]" : "bg-[#d4d4d4]",
    barAccent: "bg-[#6f61ff]",
    track: isDark ? "bg-[#2a2a2a]" : "bg-[#ececf0]",
    alertGreen: isDark ? "bg-[#1e2a1e]" : "bg-[#e3f6e2]",
    alertBlue: isDark ? "bg-[#1e2836]" : "bg-[#effaff]",
    transition: "transition-colors duration-700",
  } as const;
}

export type SiteTheme = ReturnType<typeof getSiteTheme>;
