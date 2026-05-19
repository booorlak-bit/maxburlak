import { useSearchParams } from "react-router";
import { PlaygroundCanvas } from "../playground/PlaygroundCanvas";

type PlaygroundPageProps = {
  isDark: boolean;
};

function resolveTheme(isDark: boolean, themeParam: string | null) {
  if (themeParam === "dark") return true;
  if (themeParam === "light") return false;
  return isDark;
}

/** iframe / ?embed=1 — canvas only, no site chrome */
export function PlaygroundEmbed({ isDark }: PlaygroundPageProps) {
  const [searchParams] = useSearchParams();
  const resolvedDark = resolveTheme(isDark, searchParams.get("theme"));

  return (
    <div
      className={`h-full min-h-[360px] w-full ${resolvedDark ? "bg-[#151515]" : "bg-[#f9f9fa]"}`}
      data-name="playground-embed"
    >
      <PlaygroundCanvas isDark={resolvedDark} embed />
    </div>
  );
}

/** Full playground tab — content only; index header lives in MainV2 */
export function PlaygroundView({ isDark }: PlaygroundPageProps) {
  return (
    <div
      data-route="playground"
      className="relative h-[calc(100svh-70px)] min-h-[calc(100svh-70px)] w-full supports-[height:100dvh]:h-[calc(100dvh-70px)] supports-[height:100dvh]:min-h-[calc(100dvh-70px)]"
    >
      <div
        className={`relative h-full min-h-0 overflow-hidden rounded-[20px] border ${isDark ? "border-white/[0.06] bg-[#151515]" : "border-black/[0.06] bg-[#f9f9fa]"}`}
      >
        <PlaygroundCanvas isDark={isDark} />
      </div>
    </div>
  );
}
