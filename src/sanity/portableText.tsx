import type { ReactNode } from "react";
import { SITE_FONT, type SiteTheme } from "../components/site/siteTheme";
import { urlForSrc } from "./image";
import type { SanityImage } from "./types";

export type SanityBlockChild = {
  _type?: string;
  text?: string;
  marks?: string[];
};

export type SanityMarkDef = {
  _key?: string;
  _type?: string;
  href?: string;
  blank?: boolean;
};

export type SanityBlock = {
  _type?: string;
  _key?: string;
  style?: string;
  listItem?: "bullet" | "number";
  level?: number;
  children?: SanityBlockChild[];
  markDefs?: SanityMarkDef[];
  asset?: SanityImage["asset"];
  alt?: string;
  caption?: string;
};

export function getPortableTextListRun(blocks: SanityBlock[], startIndex: number): SanityBlock[] {
  const first = blocks[startIndex];
  if (first?._type !== "block" || !first.listItem) return [];

  const run = [first];
  for (let index = startIndex + 1; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (block?._type !== "block" || block.listItem !== first.listItem || block.level !== first.level) break;
    run.push(block);
  }

  return run;
}

export function blocksToPlainParagraphs(blocks: SanityBlock[] | undefined): string[] {
  if (!blocks?.length) return [];

  return blocks
    .filter((block) => block._type === "block")
    .map((block) => block.children?.map((child) => child.text ?? "").join("") ?? "")
    .filter(Boolean);
}

function renderInline(
  child: SanityBlockChild,
  key: string,
  _theme: SiteTheme,
  markDefs: SanityMarkDef[] = [],
): ReactNode {
  const text = child.text ?? "";
  if (!child.marks?.length) return text;

  let node: ReactNode = text;
  if (child.marks.includes("strong")) node = <strong>{node}</strong>;
  if (child.marks.includes("em")) node = <em>{node}</em>;
  if (child.marks.includes("underline")) node = <span className="underline underline-offset-2">{node}</span>;
  if (child.marks.includes("code"))
    node = <code className="rounded bg-black/5 px-1 py-0.5 text-[0.92em] dark:bg-white/10">{node}</code>;

  const linkDef = child.marks
    .map((mark) => markDefs.find((def) => def._key === mark && def._type === "link"))
    .find((def): def is SanityMarkDef => Boolean(def?.href));

  if (linkDef?.href) {
    node = (
      <a
        href={linkDef.href}
        className="underline underline-offset-2 transition-opacity hover:opacity-80"
        {...(linkDef.blank !== false
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {node}
      </a>
    );
  }

  return <span key={key}>{node}</span>;
}

export function PortableTextBody({
  blocks,
  theme: t,
  onImageClick,
}: {
  blocks: SanityBlock[] | undefined;
  theme: SiteTheme;
  onImageClick?: (src: string, alt?: string) => void;
}) {
  if (!blocks?.length) return null;

  const bodyClass = `${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`;
  const renderedBlocks: ReactNode[] = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];

    if (block._type === "image") {
      const src = block.asset ? urlForSrc({ asset: block.asset }, 1400) : undefined;
      if (!src) continue;
      const imageEl = (
        <img
          alt={block.alt ?? ""}
          className="h-auto w-full rounded-[12px] object-cover"
          loading="lazy"
          src={src}
        />
      );
      renderedBlocks.push(
        <figure key={block._key ?? index} className="w-full max-w-[1400px]">
          {onImageClick ? (
            <button
              type="button"
              className="block w-full cursor-zoom-in overflow-hidden rounded-[12px] border-0 bg-transparent p-0"
              onClick={() => onImageClick(src, block.alt)}
            >
              {imageEl}
            </button>
          ) : (
            imageEl
          )}
          {block.caption ? (
            <figcaption className={`${SITE_FONT} ${t.muted} mt-2 text-[12px] font-light leading-[16px]`}>
              {block.caption}
            </figcaption>
          ) : null}
        </figure>,
      );
      continue;
    }

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
          <ul key={block._key ?? index} className={`${bodyClass} max-w-[640px] list-disc pl-5 space-y-4`}>
            {items}
          </ul>,
        );
      } else {
        renderedBlocks.push(
          <ol key={block._key ?? index} className={`${bodyClass} max-w-[640px] list-decimal pl-5 space-y-4`}>
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
        <h3
          key={block._key ?? index}
          className={`${SITE_FONT} ${t.text} mt-2 max-w-[640px] text-[18px] font-medium leading-[24px]`}
        >
          {children}
        </h3>,
      );
      continue;
    }

    if (block.style === "h3") {
      renderedBlocks.push(
        <h4
          key={block._key ?? index}
          className={`${SITE_FONT} ${t.text} mt-1 max-w-[640px] text-[15px] font-medium leading-[20px]`}
        >
          {children}
        </h4>,
      );
      continue;
    }

    if (block.style === "blockquote") {
      renderedBlocks.push(
        <blockquote
          key={block._key ?? index}
          className={`${SITE_FONT} ${t.muted} max-w-[640px] border-l-2 border-black/15 pl-4 text-[15px] font-normal italic leading-[22px] dark:border-white/15`}
        >
          {children}
        </blockquote>,
      );
      continue;
    }

    renderedBlocks.push(
      <p key={block._key ?? index} className={`${bodyClass} max-w-[640px]`}>
        {children}
      </p>,
    );
  }

  return <div className="flex flex-col gap-4">{renderedBlocks}</div>;
}
