import { getSiteTheme, SITE_FONT } from "../components/site/siteTheme";

const UPDATED = "November 8, 2026";
const CONTACT_EMAIL = "hey@maxburlak.com";

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "Who is responsible",
    body: [
      `This site is run by Max Burlak, a product designer based in Barcelona, Spain. For any privacy question or request, email ${CONTACT_EMAIL}.`,
    ],
  },
  {
    title: "What I collect",
    body: [
      "Contact form: your name, email, the type of request and your message. I use them only to reply to you. The form is processed by Default.com, which stores the submission on my behalf.",
      "Analytics: anonymous usage data (pages viewed, clicks on buttons such as “Book a call”, device and browser type, approximate country). I use PostHog and Vercel Web Analytics to understand which pages are useful. PostHog may store an identifier in your browser’s local storage or a cookie.",
      "Booking a call: scheduling happens on cal.com under its own privacy policy.",
    ],
  },
  {
    title: "Third parties",
    body: [
      "Hosting: Vercel. Content and images: Sanity. Analytics: PostHog, Vercel Web Analytics. Contact form: Default.com. Embedded videos may load YouTube or Vimeo, which set their own cookies when you play them.",
      "I don’t sell your data and don’t use it for advertising.",
    ],
  },
  {
    title: "How long I keep it",
    body: [
      "Contact messages are kept as long as needed to handle your request and any follow-up conversation. Analytics data is kept in aggregated form.",
    ],
  },
  {
    title: "Your rights",
    body: [
      `Under the GDPR you can ask to access, correct, delete or export your data, or object to its processing. Email ${CONTACT_EMAIL} and I’ll reply within 30 days. You can also complain to the Spanish data protection authority (AEPD).`,
    ],
  },
];

export function PrivacyPage({ isDark }: { isDark: boolean }) {
  const t = getSiteTheme(isDark);

  return (
    <div data-route="privacy" className={`w-full shrink-0 rounded-[20px] ${t.surface} my-0 md:my-[24px]`}>
      <article className={`${SITE_FONT} mx-auto flex w-full max-w-[640px] flex-col gap-10 px-4 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12`}>
        <header className="flex flex-col gap-3">
          <h1 className={`${t.text} ${t.h1}`}>Privacy policy</h1>
          <p className={`${t.muted} ${t.caption}`}>Last updated: {UPDATED}</p>
        </header>
        {SECTIONS.map((section) => (
          <section key={section.title} className="flex flex-col gap-3">
            <h2 className={`${t.text} ${t.h3}`}>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className={`${t.muted} ${t.body}`}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}
