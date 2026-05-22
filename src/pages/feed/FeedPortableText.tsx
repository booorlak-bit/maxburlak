import type { ReactNode } from "react";
import { SITE_FONT, type SiteTheme } from "../../components/site/siteTheme";
import type { SanityBlock, SanityBlockChild } from "../../sanity/portableText";

type MarkDef = {
  _key?: string;
  _type?: string;
  href?: string;
};

function renderInline(
  child: SanityBlockChild,
  key: string,
  theme: SiteTheme,
  markDefs: MarkDef[] | undefined,
): ReactNode {
  const text = child.text ?? "";
  if (!child.marks?.length) return text;

  let node: ReactNode = text;
  for (const mark of child.marks) {
    if (mark === "strong") node = <strong className="font-medium">{node}</strong>;
    else if (mark === "em") node = <em>{node}</em>;
    else if (mark === "code")
      node = <code className="rounded bg-black/5 px-1 py-0.5 text-[0.92em] dark:bg-white/10">{node}</code>;
    else {
      const link = markDefs?.find((def) => def._key === mark && def._type === "link");
      if (link?.href) {
        node = (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme.text} underline underline-offset-2 transition-opacity hover:opacity-80`}
          >
            {node}
          </a>
        );
      }
    }
  }

  return <span key={key}>{node}</span>;
}

export function FeedPortableText({
  blocks,
  theme: t,
}: {
  blocks: SanityBlock[] | undefined;
  theme: SiteTheme;
}) {
  if (!blocks?.length) return null;

  const bodyClass = `${SITE_FONT} ${t.text} text-[15px] leading-[20px] font-normal`;

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block._type !== "block") return null;

        const markDefs = (block as SanityBlock & { markDefs?: MarkDef[] }).markDefs;
        const children = block.children?.map((child, childIndex) =>
          renderInline(child, `${block._key ?? index}-${childIndex}`, t, markDefs),
        );

        if (block.listItem === "bullet") {
          return (
            <ul key={block._key ?? index} className={`${bodyClass} list-disc pl-5`}>
              <li className="font-normal">{children}</li>
            </ul>
          );
        }

        if (block.listItem === "number") {
          return (
            <ol key={block._key ?? index} className={`${bodyClass} list-decimal pl-5`}>
              <li className="font-normal">{children}</li>
            </ol>
          );
        }

        if (block.style === "h2") {
          return (
            <h2 key={block._key ?? index} className={`${SITE_FONT} ${t.text} ${t.bodyMedium}`}>
              {children}
            </h2>
          );
        }

        if (block.style === "h3") {
          return (
            <h3 key={block._key ?? index} className={`${SITE_FONT} ${t.text} ${t.bodyMedium}`}>
              {children}
            </h3>
          );
        }

        if (block.style === "blockquote") {
          return (
            <blockquote
              key={block._key ?? index}
              className={`${bodyClass} ${t.muted} border-l-2 border-solid pl-4 ${t.borderHairline}`}
            >
              {children}
            </blockquote>
          );
        }

        return (
          <p key={block._key ?? index} className={bodyClass}>
            {children}
          </p>
        );
      })}
    </div>
  );
}
