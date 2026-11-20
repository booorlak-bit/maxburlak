import type { ReactNode } from "react";
import { SITE_FONT, type SiteTheme } from "../../components/site/siteTheme";
import { getPortableTextListRun, type SanityBlock, type SanityBlockChild } from "../../sanity/portableText";

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
  const renderedBlocks: ReactNode[] = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (block._type !== "block") continue;

    if (block.listItem) {
      const listRun = getPortableTextListRun(blocks, index);
      const items = listRun.map((listBlock, listIndex) => {
        const blockIndex = index + listIndex;
        const children = listBlock.children?.map((child, childIndex) =>
          renderInline(child, `${listBlock._key ?? blockIndex}-${childIndex}`, t, listBlock.markDefs),
        );

        return (
          <li key={listBlock._key ?? blockIndex} className="font-normal">
            {children}
          </li>
        );
      });

      if (block.listItem === "bullet") {
        renderedBlocks.push(
          <ul key={block._key ?? index} className={`${bodyClass} list-disc pl-5 space-y-4`}>
            {items}
          </ul>,
        );
      } else {
        renderedBlocks.push(
          <ol key={block._key ?? index} className={`${bodyClass} list-decimal pl-5 space-y-4`}>
            {items}
          </ol>,
        );
      }

      index += listRun.length - 1;
      continue;
    }

    const children = block.children?.map((child, childIndex) =>
      renderInline(child, `${block._key ?? index}-${childIndex}`, t, block.markDefs),
    );

    if (block.style === "h2") {
      renderedBlocks.push(
        <h2 key={block._key ?? index} className={`${SITE_FONT} ${t.text} ${t.bodyMedium}`}>
          {children}
        </h2>,
      );
      continue;
    }

    if (block.style === "h3") {
      renderedBlocks.push(
        <h3 key={block._key ?? index} className={`${SITE_FONT} ${t.text} ${t.bodyMedium}`}>
          {children}
        </h3>,
      );
      continue;
    }

    if (block.style === "blockquote") {
      renderedBlocks.push(
        <blockquote
          key={block._key ?? index}
          className={`${bodyClass} ${t.muted} border-l-2 border-solid pl-4 ${t.borderHairline}`}
        >
          {children}
        </blockquote>,
      );
      continue;
    }

    renderedBlocks.push(
      <p key={block._key ?? index} className={bodyClass}>
        {children}
      </p>,
    );
  }

  return <div className="flex flex-col gap-5">{renderedBlocks}</div>;
}
