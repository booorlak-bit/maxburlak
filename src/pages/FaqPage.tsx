import { getSiteTheme, SITE_FONT } from "../components/site/siteTheme";
import { FAQ_INTRO, FAQ_ITEMS } from "../content/faq";

export function FaqPage({ isDark }: { isDark: boolean }) {
  const t = getSiteTheme(isDark);

  return (
    <div data-route="faq" className={`w-full shrink-0 rounded-[20px] ${t.surface} my-0 md:my-[24px]`}>
      <article className={`${SITE_FONT} mx-auto flex w-full max-w-[720px] flex-col gap-10 px-4 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12`}>
        <header className="flex flex-col gap-3">
          <h1 className={`${t.text} ${t.h1}`}>{FAQ_INTRO.title}</h1>
          <p className={`${t.muted} ${t.body}`}>{FAQ_INTRO.subtitle}</p>
        </header>
        {FAQ_ITEMS.map((item) => (
          <section key={item.question} className="flex flex-col gap-3">
            <h2 className={`${t.text} ${t.h3}`}>{item.question}</h2>
            <p className={`${t.muted} ${t.body}`}>{item.answer}</p>
          </section>
        ))}
      </article>
    </div>
  );
}
