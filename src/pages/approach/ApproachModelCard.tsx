import type { SiteTheme } from "../../components/site/siteTheme";
import type { ApproachModel } from "../../content/approachPage";
import { PortfolioImage } from "../../components/PortfolioImage";
import imgMultiplier from "figma:asset/83d8f2d82852167ec9d5f01b0cc4aa0cebcde4b0.png";
import imgLoop from "figma:asset/495108f5bf905037df5607db7bc5638b69f1dc84.png";

const ICONS: Record<string, string> = {
  multiplier: imgMultiplier,
  loop: imgLoop,
};

export function ApproachModelCard({ model, theme: t }: { model: ApproachModel; theme: SiteTheme }) {
  const alertBg = model.accent === "yellow" ? t.alertGreen : t.alertBlue;
  const iconSrc = ICONS[model.id] ?? imgMultiplier;

  return (
    <article className={`${t.card} ${t.transition} relative flex h-full min-h-0 w-full min-w-0 flex-col`}>
      <div aria-hidden className={`pointer-events-none absolute inset-0 border border-solid ${t.borderHairline}`} />
      <div className="relative flex h-full min-h-0 w-full flex-1 flex-col gap-6 px-4 pb-6 pt-8 md:gap-8 md:px-8 md:pb-8 md:pt-12">
        <div className="flex w-full shrink-0 items-center gap-4">
          <div className="relative size-14 shrink-0">
            <PortfolioImage alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={iconSrc} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className={`${t.font} ${t.text} ${t.h3} ${t.transition}`}>{model.title}</h3>
            <p className={`${t.font} ${t.muted} ${t.caption} ${t.transition}`}>{model.tagline}</p>
          </div>
        </div>
        <p className={`${t.font} ${t.muted} ${t.caption} ${t.transition}`}>{model.description}</p>
        <div className="flex min-h-0 flex-1 flex-col gap-0.5">
          <div className={`${t.cardInset} ${t.transition} flex min-h-0 flex-1 flex-col rounded-t-[28px]`}>
            <div className="px-6 py-5 md:px-8 md:py-6">
              <p className={`${t.font} ${t.label} ${t.muted} mb-2`}>I DO</p>
              <p className={`${t.font} ${t.body} ${t.text}`}>{model.iDo.join(", ")}</p>
            </div>
          </div>
          <div className={`${t.cardInset} ${t.transition} rounded-b-[28px]`}>
            <div className="px-6 py-5 md:px-8 md:py-6">
              <p className={`${t.font} ${t.label} ${t.aiAccent} mb-2`}>AI DOES</p>
              <p className={`${t.font} ${t.body} ${t.text}`}>{model.aiDoes.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className={`${alertBg} ${t.transition} mt-auto w-full rounded-[28px] p-3 backdrop-blur-[12px]`}>
          <div className={`${t.card} ${t.transition} rounded-[16px] px-6 py-3`}>
            <p className={`${t.font} ${t.bodyMedium} ${t.text}`}>
              <span className="font-medium">Best for: </span>
              <span className="font-light">{model.bestFor}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
