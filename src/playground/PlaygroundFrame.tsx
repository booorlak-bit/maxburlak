import imgRectangle39339 from "figma:asset/d665988e589771ed34426718cec121110f16de24.png";
import imgRectangle39352 from "figma:asset/cd5c95b21b80c2f899dddae92c6ee1a1ca5d908d.png";
import imgRectangle39350 from "figma:asset/ec60ad6011cb82dbd00b6d9ce09d61636914390d.png";
import imgRectangle39353 from "figma:asset/bc45eaec0e330362a19783dd2bd9416cab98c9f2.png";
import imgRectangle39351 from "figma:asset/fd5439a818a2af65a0ab365914cff24ca548c57d.png";
import imgRectangle39354 from "figma:asset/0c8a000ae670088ae4b43f3ae82c5b4dd8ede1a7.png";
import imgRectangle39355 from "figma:asset/e14c0785a11f061a8d7d09a3cf6526d9dcb846da.png";
import imgRectangle39356 from "figma:asset/4b1955d8e10fed6656eebda4c9e9f17f53bd8765.png";
import imgRectangle39357 from "figma:asset/da1c81a5386946c91b9c29359676f5435757c65f.png";
import imgRectangle39358 from "figma:asset/cad5bcb48ecec3d972771718c36c544165ea328b.png";
import imgRectangle39359 from "figma:asset/89dc44418c4ea8f9657791af6a1075ffd66791ae.png";
import imgRectangle39360 from "figma:asset/52c3cc7f5da1e8362aea713ef34daac263a139c0.png";
import imgRectangle39361 from "figma:asset/c3ef8c31e72eb4652c9ca201c01de310aec3e084.png";
import imgRectangle39362 from "figma:asset/5a55db7d30becbfd694a2a90c3300e8a38665730.png";

const cardShadow =
  "rounded-[14px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03)]";

function Spacer() {
  return <div aria-hidden className="h-px w-[120px] shrink-0 opacity-0" />;
}

function ConceptCard({ src }: { src: string }) {
  return (
    <div className={`shrink-0 overflow-hidden ${cardShadow}`}>
      <img
        alt=""
        src={src}
        draggable={false}
        className="block h-auto max-h-[220px] w-auto max-w-[280px] object-contain"
      />
    </div>
  );
}

export function PlaygroundFrame() {
  return (
    <div
      className="pointer-events-none relative flex w-max select-none flex-col gap-[32px] p-[16px] md:p-[32px]"
      data-name="playground-frame"
    >
      <div className="relative flex w-max items-end gap-[32px]">
        <ConceptCard src={imgRectangle39339} />
        <ConceptCard src={imgRectangle39352} />
        <ConceptCard src={imgRectangle39350} />
        <ConceptCard src={imgRectangle39353} />
        <ConceptCard src={imgRectangle39351} />
      </div>

      <div className="relative flex w-max items-end gap-[32px]">
        <Spacer />
        <Spacer />
        <ConceptCard src={imgRectangle39354} />
        <ConceptCard src={imgRectangle39355} />
        <ConceptCard src={imgRectangle39356} />
      </div>

      <div className="relative flex w-max items-end gap-[32px]">
        <Spacer />
        <ConceptCard src={imgRectangle39357} />
        <ConceptCard src={imgRectangle39358} />
        <ConceptCard src={imgRectangle39359} />
        <Spacer />
      </div>

      <div className="relative flex w-max items-end gap-[32px]">
        <Spacer />
        <ConceptCard src={imgRectangle39360} />
        <ConceptCard src={imgRectangle39361} />
        <Spacer />
        <ConceptCard src={imgRectangle39362} />
      </div>
    </div>
  );
}
