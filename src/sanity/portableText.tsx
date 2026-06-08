import type { ReactNode } from "react";
import { SITE_FONT, type SiteTheme } from "../components/site/siteTheme";
import { urlForSrc } from "./image";
import type { SanityImage } from "./types";

export type SanityBlockChild = {
  _type?: string;
  text?: string;
  marks?: string[];
};

export type SanityBlock = {
  _type?: string;
  _key?: string;
  style?: string;
  listItem?: "bullet" | "number";
  level?: number;
  children?: SanityBlockChild[];
  asset?: SanityImage["asset"];
  alt?: string;
  caption?: string;
};

export function blocksToPlainParagraphs(blocks: SanityBlock[] | undefined): string[] {
  if (!blocks?.length) return [];

  return blocks
    .filter((block) => block._type === "block")
    .map((block) => block.children?.map((child) => child.text ?? "").join("") ?? "")
    .filter(Boolean);
}

function renderInline(child: SanityBlockChild, key: string, theme: SiteTheme): ReactNode {
  const text = child.text ?? "";
  if (!child.marks?.length) return text;

  let node: ReactNode = text;
  if (child.marks.includes("strong")) node = <strong>{node}</strong>;
  if (child.marks.includes("em")) node = <em>{node}</em>;
  if (child.marks.includes("code"))
    node = <code className="rounded bg-black/5 px-1 py-0.5 text-[0.92em] dark:bg-white/10">{node}</code>;

  return <span key={key}>{node}</span>;
}

export function PortableTextBody({
  blocks,
  theme: t,
}: {
  blocks: SanityBlock[] | undefined;
  theme: SiteTheme;
}) {
  if (!blocks?.length) return null;

  const bodyClass = `${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`;

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block._type === "image") {
          const src = block.asset ? urlForSrc({ asset: block.asset }, 1400) : undefined;
          if (!src) return null;
          return (
            <figure key={block._key ?? index} className="w-full">
              <img
                alt={block.alt ?? ""}
                className="h-auto w-full rounded-[12px] object-cover"
                loading="lazy"
                src={src}
              />
              {block.caption ? (
                <figcaption className={`${SITE_FONT} ${t.muted} mt-2 text-[12px] font-light leading-[16px]`}>
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (block._type !== "block") return null;

        const children = block.children?.map((child, childIndex) =>
          renderInline(child, `${block._key ?? index}-${childIndex}`, t),
        );

        if (block.listItem === "bullet") {
          return (
            <ul key={block._key ?? index} className={`${bodyClass} max-w-[640px] list-disc pl-5`}>
              <li className="font-normal">{children}</li>
            </ul>
          );
        }

        if (block.listItem === "number") {
          return (
            <ol key={block._key ?? index} className={`${bodyClass} max-w-[640px] list-decimal pl-5`}>
              <li className="font-normal">{children}</li>
            </ol>
          );
        }

        return (
          <p key={block._key ?? index} className={`${bodyClass} max-w-[640px]`}>
            {children}
          </p>
        );
      })}
    </div>
  );
}
