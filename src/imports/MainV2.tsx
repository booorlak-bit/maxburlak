import { useEffect, useState } from "react";
import { Stories } from "../components/Stories";
import { CareerPath } from "../components/CareerPath";
import { ApolloLogo } from "../components/ApolloLogo";
import { DefaultLogo } from "../components/DefaultLogo";
import { CommunLogo } from "../components/CommunLogo";
import { KinescopeLogo } from "../components/KinescopeLogo";
import { P2pValidatorLogo } from "../components/P2pValidatorLogo";
import { WorkedWithSection } from "../components/WorkedWithSection";
import { ContactForm } from "../components/ContactForm";
import { SocialIconButtons } from "../components/SocialIconButtons";
import { Link, Navigate, NavLink, useLocation, useSearchParams } from "react-router";
import { isNavPath, NAV_ROUTES, placeholderTitleForPath } from "../nav/routes";
import { PlaygroundEmbed, PlaygroundView } from "../pages/PlaygroundPage";
import { TabEmptyState } from "../pages/TabEmptyState";
import { PlaygroundCanvas } from "../playground/PlaygroundCanvas";
import imgAreasActivation from "figma:asset/e5b253831f1048009cea5b54ba306988455cb3bd.png";
import imgAreasConversion from "figma:asset/4ef447fe26db291a36b9b0daa181877720f91e75.png";
import imgAreasSystem from "figma:asset/94a920b5c4cb9fa810dd38ffe1b29b0e094c7001.png";
import imgProperty1InstagramStory1 from "figma:asset/3c611536d429a16dbf181c67fbba31924dec549a.png";
import imgImages from "figma:asset/8467b2e896c7b36804a1d40077e009003bc9e299.png";
import imgProperty1InstagramStory2 from "figma:asset/c5ab971d05ff956695323b641f4c54702a2aeac8.png";
import imgProperty1InstagramStory3 from "figma:asset/a86abbaa24c6c6d645c18f0e84b3ee8a237073f1.png";
import imgProperty1InstagramStory4 from "figma:asset/93547e962842d3ef2e842e27e90b2c2475cd44b9.png";
import imgSlide1 from "figma:asset/6b852bd9ac4d7752a4503288cbdc3f0bb6ea253b.png";
import imgSlide2 from "figma:asset/b3e0b6f473cbf35b72c8e09d0ab969dffb019688.png";
import imgSlide3 from "figma:asset/301ad431192d267ae179b006e7ea5840fc600840.png";
import svgPaths from "./svg-j4zqqnzmwo";
import imgImage37 from "figma:asset/2d16d174ec27b3b77746f2c1f3da26f857b3f18f.png";
import imgImage40 from "figma:asset/eaed1df3c67fb6a3b8a39155e88dc74870e21fea.png";
import imgRectangle9Stroke from "figma:asset/01e061cadab72cc35d94dbeb4633cb365fde0a1f.png";
import imgImages1 from "figma:asset/8e1c0b1722ae6513016be6cf7a6a1f92ff38f25f.png";
import imgDefaultPipeline from "figma:asset/1723dc30a26c292e8e261d058957a5d86a08aba4.png";
import imgImage17 from "figma:asset/3b4613d13d275b7dbaf4a7a2106f20c0163fec1a.png";
import imgDefaultPipeline1 from "figma:asset/90682fed47874abb2c36bd36539f03379d0ebf93.png";
import imgImage15 from "figma:asset/dd91c66e6d7a286a1fd8ae3f8f0d975a89432390.png";
import imgDefaultPipeline2 from "figma:asset/23002981bf65eaf079e10c00c34adf2ce3ed84a4.png";
import imgImage10 from "figma:asset/a5471198fada2ad0c4d341dba7cd2666fc7898ba.png";
import imgDefaultPipeline3 from "figma:asset/0b0719796a2d94b9b9adee712494181dc484dcbb.png";
import imgImage349 from "figma:asset/a8154bba40fd1019b262715b7a3bbd1009a33013.png";
import imgFrame2147229843 from "figma:asset/46a134eeede999dea479f9eb03718582b64569fd.png";
import imgRectangle39339 from "figma:asset/d665988e589771ed34426718cec121110f16de24.png";
import imgRectangle39352 from "figma:asset/cd5c95b21b80c2f899dddae92c6ee1a1ca5d908d.png";
import imgRectangle39350 from "figma:asset/ec60ad6011cb82dbd00b6d9ce09d61636914390d.png";
import imgRectangle39353 from "figma:asset/bc45eaec0e330362a19783dd2bd9416cab98c9f2.png";
import imgRectangle39351 from "figma:asset/fd5439a818a2af65a0ab365914cff24ca548c57d.png";
import imgRectangle39340 from "figma:asset/8b7abaf4bf0ae4c40d001e0306be0eeeea3a77df.png";
import imgRectangle39354 from "figma:asset/0c8a000ae670088ae4b43f3ae82c5b4dd8ede1a7.png";
import imgRectangle39355 from "figma:asset/e14c0785a11f061a8d7d09a3cf6526d9dcb846da.png";
import imgRectangle39356 from "figma:asset/4b1955d8e10fed6656eebda4c9e9f17f53bd8765.png";
import imgRectangle39357 from "figma:asset/da1c81a5386946c91b9c29359676f5435757c65f.png";
import imgRectangle39358 from "figma:asset/cad5bcb48ecec3d972771718c36c544165ea328b.png";
import imgRectangle39359 from "figma:asset/89dc44418c4ea8f9657791af6a1075ffd66791ae.png";
import imgRectangle39360 from "figma:asset/52c3cc7f5da1e8362aea713ef34daac263a139c0.png";
import imgRectangle39361 from "figma:asset/c3ef8c31e72eb4652c9ca201c01de310aec3e084.png";
import imgRectangle39362 from "figma:asset/5a55db7d30becbfd694a2a90c3300e8a38665730.png";
import imgImages2 from "figma:asset/83d8f2d82852167ec9d5f01b0cc4aa0cebcde4b0.png";
import imgImages3 from "figma:asset/495108f5bf905037df5607db7bc5638b69f1dc84.png";
import imgDsc073991 from "figma:asset/17f682c6ad35f565362649ef00a02aae5b5fb174.png";
import imgImage from "figma:asset/83232a85e616a4251bc49205de94a06fa427d427.png";

const BOOK_CALL_URL = "https://cal.com/maxburlak/oppchat";
const CONTACT_EMAIL_URL = "mailto:hey@maxburlak.com";

function GradeStudioMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      role="img"
      aria-label="grade-1.studio"
      shapeRendering="geometricPrecision"
    >
      <title>grade-1.studio</title>
      <rect width="36" height="36" rx="24" fill="#252525" />
      {/* Two parallel pill bars, ~−45°, white (upper-left) + lime (lower-right) */}
      <g transform="translate(18 18) rotate(-45)">
        <rect x="-8.75" y="-5.85" width="17.5" height="3.5" rx="1.75" fill="#ffffff" />
        <rect x="-8.75" y="2.35" width="17.5" height="3.5" rx="1.75" fill="#C8FF3D" />
      </g>
    </svg>
  );
}

function FliqMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.894 35.894"
      fill="none"
      role="img"
      aria-label="Fliq"
      shapeRendering="geometricPrecision"
    >
      <title>Fliq</title>
      <rect fill="#FFE53D" height="35.894" width="35.894" />
      <circle cx="17.8755" cy="11.4464" fill="#0a0c11" r="2.57143" />
      <circle cx="12.0893" cy="14.6607" fill="#0a0c11" r="2.57143" />
      <circle cx="12.0893" cy="21.0893" fill="#0a0c11" r="2.57143" />
      <circle cx="17.8755" cy="24.3036" fill="#0a0c11" r="2.57143" />
      <circle cx="23.6607" cy="21.0893" fill="#FFB20D" r="2.57143" />
      <circle cx="23.6607" cy="14.6607" fill="#FFB20D" r="2.57143" />
    </svg>
  );
}

function PinnboardsMarkIcon({
  className,
  glowFilterId = "pinnboardsGlow",
}: {
  className?: string;
  glowFilterId?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      role="img"
      aria-label="Pinnboards"
      shapeRendering="geometricPrecision"
    >
      <title>Pinnboards</title>
      <rect width="36" height="36" rx="12" fill="#232323" />
      <rect x="9" y="9" width="18" height="18" rx="4" stroke="#7466FF" strokeWidth="5" />
      <rect
        x="9"
        y="9"
        width="18"
        height="18"
        rx="4"
        stroke="#7466FF"
        strokeOpacity="0.65"
        strokeWidth="5"
        filter={`url(#${glowFilterId})`}
      />
      <rect x="0.5" y="0.5" width="35" height="35" rx="11.5" stroke="white" strokeOpacity="0.08" />
      <defs>
        <filter id={glowFilterId} x="-4" y="-4" width="44" height="44" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
    </svg>
  );
}

type ImagesProps = {
  className?: string;
  areas?: "System" | "Activation" | "Conversion";
};

function Images({ className, areas = "Activation" }: ImagesProps) {
  return (
    <div className={className || "relative size-[100px]"}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={areas === "System" ? imgAreasSystem : areas === "Conversion" ? imgAreasConversion : imgAreasActivation} />
    </div>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <div className={`overflow-clip relative shrink-0 size-[18px] ${className ?? ""}`} data-name="Icon / Arrow_right">
      <div className="absolute inset-[18.75%_12.49%_18.75%_12.5%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5016 11.2496">
          <path d={svgPaths.p32e27180} fill="currentColor" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

const storySlides = [
  {
    bg: imgProperty1InstagramStory1,
    iconSrc: imgImages,
    title: "Scope Chaos",
    subtitle: '"Brief changed 3 weeks before launch"',
    body: 'CEO came back from a conference with "new direction." Had to cut 40% of features and reframe the narrative in 5 days.',
    caption:
      "Decision memo to leadership with 3 options, clear tradeoffs, and my recommendation. Shipped reduced scope on time. Added cut features to v2 roadmap.",
  },
  {
    bg: imgProperty1InstagramStory2,
    title: "Research Vacuum",
    subtitle: '"No budget, no time, ship anyway"',
    body: "Needed to redesign pricing page. Zero user research budget. Sales wanted it yesterday.",
    caption:
      '30-min Gong call review (existing data), competitor teardown, and a "confidence level" column in my recommendation doc. Shipped with explicit hypotheses to validate post-launch.',
  },
  {
    bg: imgProperty1InstagramStory3,
    title: "Alignment Hell",
    subtitle: '"5 stakeholders, 5 opinions, 4 meetings/week"',
    body: 'Design reviews turned into design-by-committee. PM, CS, RevOps, Eng, and CEO all had "feedback."',
    caption:
      "Replaced meetings with async decision memos. Clear recommendation, explicit tradeoffs, 48h comment window. Went from 4 syncs/week to 1.",
  },
  {
    bg: imgProperty1InstagramStory4,
    title: "AI Shift",
    subtitle: '"AI replaced 40% of my workflow"',
    body: 'Wireframes, copy variations, component specs — AI does them faster now. My old "value" is commoditized.',
    caption:
      'Scope protection, stakeholder alignment, knowing what to cut. The 60% AI can\'t do: judgment calls, political navigation, and saying "no" with data.',
  },
] as const;

type HeroImageProps = {
  className?: string;
  slide?: "1" | "2" | "3";
};

const heroSlides = [imgSlide1, imgSlide2, imgSlide3] as const;

function HeroImage({ className, slide = "1" }: HeroImageProps) {
  const initialSlideIndex = Math.max(0, Number(slide) - 1);
  const [activeSlide, setActiveSlide] = useState(initialSlideIndex);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={className || "h-[459.576px] relative w-[342.667px]"}>
      {heroSlides.map((src, index) => (
        <img
          key={src}
          alt=""
          className={`absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-opacity duration-700 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          src={src}
        />
      ))}
    </div>
  );
}

export default function MainV({ className, isDark = false, onThemeToggle }: { className?: string; isDark?: boolean; onThemeToggle?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const pathname = location.pathname.replace(/\/+$/, "") || "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const phTitle = placeholderTitleForPath(pathname);
  if (!isNavPath(pathname)) {
    return <Navigate to="/" replace />;
  }

  if (pathname === "/playground" && searchParams.get("embed") === "1") {
    return <PlaygroundEmbed isDark={isDark} />;
  }

  return (
    <div className={className || `transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} content-stretch flex flex-col gap-[10px] items-start pb-[10px] pt-[60px] px-[12px] md:px-[20px] relative w-full max-w-[2250px] mx-auto overflow-x-clip`} data-name="Main V2">
      {phTitle === null ? (
      <div data-route="index" className="content-stretch flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-[32px] items-start relative rounded-[20px] shrink-0 w-full my-0 md:my-[24px] box-content border-0">
        <div className="w-full lg:w-1/4 2xl:w-[33%] lg:min-w-[280px] shrink-0 lg:sticky lg:top-[84px] lg:overflow-x-hidden">
          <div className="content-stretch flex flex-col items-start justify-between p-4 md:p-[24px] lg:p-[32px] relative w-full lg:min-h-[calc(100svh-84px)] lg:my-0 my-0 box-border border-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full my-0 md:my-[24px] box-content border-0">
                <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#ececf0]'} transition-colors duration-700 content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[16px] shrink-0`}>
                  <div className="bg-[#54cfa4] rounded-[12px] shrink-0 size-[8px]" />
                  <div className={`flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[clamp(14px,1.15vw,15px)] whitespace-nowrap`}>
                    <p className="font-normal leading-[18px] text-[13px]">3x times Founding Designer</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[22px] items-start relative shrink-0 w-full">
                  <h1 className={`font-medium leading-[1.14] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[clamp(26px,7vw,32px)] tracking-[-0.4px] w-full`}>Max, AI-driven product designer who helps founders to design experience, build systems and foundations.</h1>
                  <p className={`font-normal leading-[1.4] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[clamp(14px,1.2vw,15px)] w-full max-w-[92%]`}>Helped to gain ARR from 0 to 2,5M+ in less then a year for various startups and to prepare for multiple funding rounds for different companies with total amount around $ 150M</p>
                </div>
                <div className="content-stretch flex flex-wrap gap-[10px] items-start mt-[10px] relative shrink-0">
                  <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[28px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg no-underline" data-name="Button">
                    <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[28px] transition-all duration-200`} />
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                      <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[14px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>Book a call</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                      <div className="relative shrink-0 size-[18px]" data-name="icons / google meet">
                        <div className="absolute inset-[10%_0]" data-name="image 37">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                  </a>
                  <a href={CONTACT_EMAIL_URL} className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
                    <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px] transition-all duration-200`} />
                    <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                      <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[14px] whitespace-nowrap`}>Chat with me</p>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="filled=on, stroke=1, radius=0, join=round">
                        <div className="absolute inset-[20.83%_12.5%]" data-name="vector">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 10.5">
                            <path clipRule="evenodd" d={svgPaths.p42a1880} fill={isDark ? "#9CA3AF" : "#8C929C"} className="transition-colors duration-700" fillRule="evenodd" id="vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                  </a>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start mt-0 mb-[24px] pt-[32px] relative shrink-0 w-full box-content border-0 transition-colors duration-700">
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-[400] leading-[18px] min-w-full relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[clamp(13px,1.15vw,15px)] w-[min-content]`}>Trusted by many companies for over a decade</p>
                  <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="Wallet_group">
                    <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                      <DefaultLogo size={34} className="rounded-[6.448px]" />
                    </div>
                    <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                      <ApolloLogo size={34} className="rounded-[6px]" />
                    </div>
                    <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                      <div className="relative shrink-0 size-[34px]">
                        <div className="absolute inset-[0_-0.85%_-0.84%_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2206 26.2196">
                            <g id="Frame 1000004181">
                              <rect fill="var(--fill-0, #323D4C)" height="26" rx="6" width="26" />
                              <rect height="25.4421" rx="5.72107" stroke="var(--stroke-0, black)" strokeOpacity="0.09" strokeWidth="0.557861" width="25.4421" x="0.278931" y="0.278931" />
                              <g id="Contrast border">
                                <rect height="25.732" rx="5.75625" stroke="var(--stroke-0, black)" strokeOpacity="0.08" strokeWidth="0.4875" width="25.732" x="0.244845" y="0.243868" />
                              </g>
                              <g id="Vector">
                                <path d={svgPaths.p3c111f20} fill="#0EE471" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                      <KinescopeLogo size={34} className="rounded-[6px]" />
                    </div>
                    <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                      <P2pValidatorLogo size={34} className="rounded-[6px]" />
                    </div>
                    <div className="content-stretch flex items-center overflow-clip p-[3px] relative rounded-[8px] shrink-0">
                      <CommunLogo size={34} className="rounded-[6.448px]" />
                    </div>
                    <div className="content-stretch flex flex-col items-start p-[3px] relative shrink-0 h-[40px] w-[78px]">
                      <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative rounded-[8px] shrink-0 w-full`}>
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
                            <div className={`flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>
                              <p className="leading-[18px]">30+ more</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full mt-[24px] mb-[24px] box-content border-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start mt-[24px] mb-0 relative shrink-0 w-full">
                  <p className="font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#8c929c] text-[13px] w-full">Ventures</p>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Wallet_group">
                    <div className="content-stretch flex isolate items-center pr-[22px] relative shrink-0">
                      <div className="flex items-center justify-center mr-[-22px] relative shrink-0 size-[53.889px] z-[3]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "19" } as React.CSSProperties}>
                        <div className="flex-none rotate-15">
                          <div className="content-stretch flex items-center p-[4.125px] relative rounded-[11px] size-[44px]">
                            <div className="overflow-clip relative rounded-[8px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03)] shrink-0 size-[36px]" data-name="icon">
                              <div className="absolute inset-0 overflow-clip rounded-[9px] border border-[#252525] border-solid bg-[#252525] size-[36px]" data-name=".icon">
                                <GradeStudioMarkIcon className="block size-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mr-[-22px] relative shrink-0 size-[53.889px] z-[2]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "19" } as React.CSSProperties}>
                        <div className="flex-none rotate-15">
                          <div className="content-stretch flex items-center p-[4.125px] relative rounded-[11px] size-[44px]">
                            <div className="overflow-clip relative rounded-[8px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03)] shrink-0 size-[36px]" data-name="icon">
                              <div className="absolute inset-0 overflow-clip rounded-[9px] size-[36px]" data-name=".icon">
                                <FliqMarkIcon className="block size-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mr-[-22px] relative shrink-0 size-[53.889px] z-[1]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "51" } as React.CSSProperties}>
                        <div className="flex-none rotate-15">
                          <div className="content-stretch flex items-center p-[4.125px] relative rounded-[11px] size-[44px]">
                            <div className="relative rounded-[8px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)] shrink-0 size-[36.089px]" data-name="icon">
                              <PinnboardsMarkIcon className="block size-full" glowFilterId="pinnboardsGlowSidebar" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={`box-content mb-0 mt-2 flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-light leading-[0] min-h-px min-w-px relative ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[13px]`}>
                      <span className="leading-[18px]">{`Building 3 pet-projects and `}</span>
                      <span className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline cursor-pointer transition-colors duration-200 hover:text-black">wrote 1 playbook</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="map-pin, location">
                  <div className="absolute inset-[8.33%_16.67%_10.4%_16.67%]" data-name="vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6277">
                      <path clipRule="evenodd" d={svgPaths.p3a68b400} fill={isDark ? "#9CA3AF" : "#8C929C"} className="transition-colors duration-700" fillRule="evenodd" id="vector" />
                    </svg>
                  </div>
                </div>
                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/32' : 'text-[#0a0c11]'} transition-colors duration-700 text-[13px]`}>Currently in Barcelona, Spain</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-0 py-0 md:py-[32px] my-0 md:my-[24px] w-full min-w-0 relative">
          <div className="content-stretch flex flex-col gap-12 md:gap-16 lg:gap-[104px] items-start justify-end relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                <HeroImage className="aspect-[765/1026] h-auto w-full max-w-full justify-self-stretch col-1 relative row-1 shrink-0 overflow-hidden lg:w-[min(100%,calc(1000px*765/1026))] lg:max-w-[min(100%,calc(1000px*765/1026))] lg:justify-self-start" />
                <p className={`hidden lg:block col-2 font-['Switzer_Variable:Regular',sans-serif] font-light leading-[20px] opacity-0 relative row-1 self-start shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[14px] whitespace-pre-wrap`}>{"Outside of my daily routine and outside a father duties, I\u2019m  travelling, skiing, scuba diving,  riding a bike, DJing, taking some cool photos with my pocket Ricoh GR lV and videos with Insta360 X5."}</p>
              </div>
              <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-light justify-self-stretch leading-[0] relative row-1 self-start shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] whitespace-pre-wrap`}>
                  <span className="font-light leading-[20px]">{`Outside his daily routine and outside a father duties, Max is  traveling, skiing, scuba diving,  riding a bike, `}</span>
                  <a href="https://www.youtube.com/@heyhimaxo" target="_blank" rel="noopener noreferrer" className={`text-inherit [text-decoration-skip-ink:none] decoration-solid leading-[20px] underline cursor-pointer transition-colors duration-200 ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>DJing</a>
                  <span className="leading-[20px]">{`, taking some `}</span>
                  <a href="https://www.instagram.com/multimaxo" target="_blank" rel="noopener noreferrer" className={`text-inherit [text-decoration-skip-ink:none] decoration-solid leading-[20px] underline cursor-pointer transition-colors duration-200 ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>cool photos</a>
                  <span className="leading-[20px]">{` with his pocket Ricoh GR lV and `}</span>
                  <a href="https://www.tiktok.com/@alwaysixteen?_r=1&_t=ZS-96UqCutmwTf" target="_blank" rel="noopener noreferrer" className={`text-inherit [text-decoration-skip-ink:none] decoration-solid leading-[20px] underline cursor-pointer transition-colors duration-200 ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>videos</a>
                  <span className="leading-[20px]">{` with Insta360 X5.`}</span>
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-medium justify-self-stretch leading-[36px] relative row-1 self-start shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[25px] tracking-[-0.2px]`}>His design philosophy</p>
              </div>
              <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-light justify-self-stretch leading-[18px] relative row-1 self-start shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px]`}>Max believes in empathy-driven design that bridges user needs with business objectives. His approach combines data-driven insights with human-centered design principles to create solutions that are both meaningful and measurable.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="content-stretch flex w-full min-w-0 flex-col gap-[32px] items-start justify-start relative">
                  <div className="content-stretch flex w-full min-w-0 flex-col gap-[32px] items-start relative">
                      <div className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[0] w-full max-w-full relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] sm:text-[25px] tracking-[-0.2px] whitespace-pre-wrap text-balance`}>
                        <p className="leading-[36px] mb-0">{`Focus → Outcomes over outputs: `}</p>
                        <p className="leading-[36px]">from insight to shipped impact.</p>
                      </div>
                      <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg no-underline" data-name="Button">
                        <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[1000px] transition-all duration-200`} />
                        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                          <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>Grab 30 mins</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                          <div className="relative shrink-0 size-[18px]" data-name="icons / google meet">
                            <div className="absolute inset-[10%_0]" data-name="image 37">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                      </a>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col md:flex-row items-start pr-px relative shrink-0 w-full">
                        <div className={`${isDark ? 'hover:bg-[#151515]' : 'bg-white hover:bg-[#f3f4f6]'} transition-colors duration-300 flex-[1_0_0] min-h-[200px] md:h-[236px] min-w-px mr-0 md:mr-[-1px] relative cursor-pointer`} data-name="card">
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none transition-all duration-300 ${isDark ? 'border-[rgba(255,255,255,0.06)]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[16px] md:gap-[32px] items-center px-[16px] md:px-[32px] py-[24px] md:py-[48px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>{`Activation & Time-to-Value`}</p>
                                </div>
                                <p className={`font-['Open_Sauce_Two:Regular',sans-serif] font-light leading-[18px] not-italic relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Shorten the path to “aha” with role-aware onboarding, opinionated defaults, and guided checklists. Tracked on 7-day activation and median TTV.</p>
                              </div>
                              <Images className="relative shrink-0 size-[100px]" />
                            </div>
                          </div>
                        </div>
                        <div className={`${isDark ? 'hover:bg-[#151515]' : 'bg-white hover:bg-[#f3f4f6]'} transition-colors duration-300 flex-[1_0_0] h-auto min-h-[200px] md:h-[236px] min-w-px mr-[-1px] relative cursor-pointer`} data-name="card">
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none transition-all duration-300 ${isDark ? 'border-[rgba(255,255,255,0.06)]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[32px] items-center px-4 py-6 md:px-[32px] md:py-[48px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>{`Conversion & Monetization`}</p>
                                </div>
                                <p className={`font-['Open_Sauce_Two:Regular',sans-serif] font-light leading-[18px] not-italic relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Clarify pricing/packaging, reduce decision friction, and tune paywalls/trials. Measured on trial → paid, ARPA, refund rate.</p>
                              </div>
                              <Images areas="Conversion" className="relative shrink-0 size-[100px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col md:flex-row items-start pr-px relative shrink-0 w-full">
                        <div className={`${isDark ? 'hover:bg-[#151515]' : 'bg-white hover:bg-[#f3f4f6]'} transition-colors duration-300 flex-[1_0_0] min-h-[200px] md:h-[236px] min-w-px mr-0 md:mr-[-1px] relative cursor-pointer`} data-name="card">
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none transition-all duration-300 ${isDark ? 'border-[rgba(255,255,255,0.06)]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[16px] md:gap-[32px] items-center px-[16px] md:px-[32px] py-[24px] md:py-[48px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>{`Design System & Delivery Velocity`}</p>
                                </div>
                                <p className={`font-['Open_Sauce_Two:Regular',sans-serif] font-light leading-[18px] not-italic relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Systematize UI with tokens, components, and guardrails to ship faster with fewer regressions. Measured on PR cycle time, escaped defects, design-coverage %.</p>
                              </div>
                              <div className="relative shrink-0 size-[100px]" data-name="Areas=Activation">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImages1} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${isDark ? 'hover:bg-[#151515]' : 'bg-white hover:bg-[#f3f4f6]'} transition-colors duration-300 flex-[1_0_0] h-auto min-h-[200px] md:h-[236px] min-w-px mr-[-1px] relative cursor-pointer`} data-name="card">
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none transition-all duration-300 ${isDark ? 'border-[rgba(255,255,255,0.06)]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[32px] items-center px-4 py-6 md:px-[32px] md:py-[48px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>{`Retention & Expansion`}</p>
                                </div>
                                <p className={`font-['Open_Sauce_Two:Regular',sans-serif] font-light leading-[18px] not-italic relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Identify friction in core loops, improve feature discovery, and design upgrade paths. Measured on NRR, feature adoption, and support ticket reduction.</p>
                              </div>
                              <div className="relative shrink-0 size-[100px]" data-name="Areas=Conversion">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAreasConversion} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full">
                      <div className={`${isDark ? 'bg-[#151515]' : 'bg-[#f9f9fa]'} transition-colors duration-700 flex-[1_0_0] min-h-px min-w-0 relative w-full`} data-name="Outcome metrics">
                        <div className={`grid w-full min-w-0 grid-cols-1 divide-y gap-x-0 gap-y-0 p-4 font-['Switzer_Variable:Regular',sans-serif] sm:grid-cols-2 sm:divide-y-0 sm:gap-8 md:p-8 xl:grid-cols-4 xl:gap-8 ${isDark ? 'divide-white/10' : 'divide-[#0a0c11]/10'}`}>
                            <div className="flex min-w-0 flex-col gap-4 items-start justify-start py-10 sm:py-0">
                              <p className={`font-medium leading-[36px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[32px] tracking-[-0.2px] w-full`}>+34%</p>
                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                <p className={`font-medium leading-[24px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[18px] w-full`}>Trial→Paid Conversion</p>
                                <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Lift after pricing/compare + guided setup (60–90 days)</p>
                              </div>
                            </div>
                            <div className="flex min-w-0 flex-col gap-4 items-start py-10 sm:py-0">
                              <p className={`font-medium leading-[36px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[32px] tracking-[-0.2px] w-full`}>−35%</p>
                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                <p className={`font-medium leading-[24px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[18px] w-full`}>Time-to-Value (median)</p>
                                <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Faster first success via role-aware onboarding</p>
                              </div>
                            </div>
                            <div className="flex min-w-0 flex-col gap-4 items-start py-10 sm:py-0">
                              <p className={`font-medium leading-[36px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[32px] tracking-[-0.2px] w-full`}>1.8×</p>
                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                <p className={`font-medium leading-[24px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[18px] w-full`}>Dev Velocity</p>
                                <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Design-system adoption (tokens + kits) increased throughpu</p>
                              </div>
                            </div>
                            <div className="flex min-w-0 flex-col gap-4 items-start py-10 last:pb-6 sm:py-0">
                              <p className={`font-medium leading-[36px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[32px] tracking-[-0.2px] w-full`}>92%</p>
                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                <p className={`font-medium leading-[24px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[18px] w-full`}>Stakeholder Alignment</p>
                                <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>{`Decision memos & monthly outcome reviews (PM/CS/RevOps)`}</p>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                    <Link to="/approach" className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
                      <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px] transition-all duration-200`} />
                      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                        <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>View full approach</p>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                        <ArrowRightIcon className={isDark ? "text-white" : "text-[#0a0c11]"} />
                      </div>
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-[64px] items-start relative shrink-0 w-full min-w-0">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                    <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-medium justify-self-stretch leading-[36px] relative row-1 self-start shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[25px] tracking-[-0.2px]`}>Selected works</p>
                  </div>
                  <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                    <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-light justify-self-stretch leading-[18px] relative row-1 self-start shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px]`}>Real outcomes from B2B SaaS engagements. Each started with constraints and ended with measurable change.</p>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full min-w-0 flex-col items-center overflow-x-hidden" data-name="Default Pipeline">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgDefaultPipeline} />
                  <div className="absolute bg-black/6 inset-0" />
                  <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
                </div>
                <div className="relative z-10 w-full shrink-0 px-4 pt-8 sm:px-8 sm:pt-10 md:px-12 md:pt-12 lg:px-16 xl:px-[80px]">
                  <div className="relative aspect-[4096/2592] w-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] md:mx-auto md:max-h-[min(55vh,792px)]" data-name="image 17">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full object-cover object-top" src={imgImage17} />
                  </div>
                </div>
                <div className="relative z-10 flex w-full shrink-0 items-center justify-center px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:pb-24 lg:pb-[120px]">
                  <div className="flex flex-col gap-2 sm:gap-[8px] items-center relative shrink-0 w-full max-w-[446px] mx-auto">
                    <p className="font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-center text-balance">Default · B2B SaaS · 2023-2026</p>
                    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[1.25] sm:leading-[36px] min-h-px min-w-px relative text-[22px] sm:text-[25px] text-center text-white tracking-[-0.2px] text-balance">3 iterations of workflow builder for Default.com based on user feedback and confirmed hypotheses</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[13px] text-center text-white">Led design through multiple platform iterations, built foundations for scalable design systems, and shaped product workflows used by revenue teams.</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>No PRD</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>No dedicated research</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Hands-on design</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Shipped in 6 weeks</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                      </div>
                      <div className={`backdrop-blur-[12px] ${isDark ? "bg-[#2a2a2a] text-[#8c929c]" : "bg-[#ececf0] text-[#5b616d]"} transition-colors duration-700 relative overflow-hidden rounded-[24px] shrink-0 w-full`}>
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
                            <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`} data-name="Container">
                              <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)]" />
                              <div className="flex flex-row justify-center size-full">
                                <div className="content-stretch flex items-start justify-center p-[12px] relative size-full">
                                  <div className="relative shrink-0">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-wrap font-['Switzer_Variable:Regular',sans-serif] gap-4 sm:gap-6 md:gap-[24px] items-center justify-center relative w-full text-center">
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>+30%</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Functionality</p>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>+21%</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Satisfaction</p>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>x4</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>ARR Impact</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[16px] min-w-full relative shrink-0 text-[12px] text-center w-[min-content] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Trade-offs: Custom nodes, AI co-pilot functionality, on-platform actions through the workflow builder, recipes / templates.</p>
                            <div className={`backdrop-blur-[12px] ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f2f2f4]'} transition-colors duration-700 content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105`} data-name="Button">
                              <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_sm">
                                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-[#c3c6cc]" : "text-[#5b616d]"} transition-colors duration-700`}>Case study soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex items-center justify-between left-[92.5px] opacity-0 top-[728px] w-[907px]">
                  <p className="font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[13px] text-white whitespace-nowrap">Default — revenue-grade workflow engine that lets you see your revenue machine</p>
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
                    <p className="font-['Switzer_Variable:Regular','Noto_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] whitespace-nowrap">Founding Designer → Design Lead</p>
                    <div className={`${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 content-stretch flex h-[24px] items-center justify-center px-[6px] py-[4px] relative rounded-[6px] shrink-0`} data-name="Chip">
                      <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap">
                        <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>2022 — 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full min-w-0 flex-col items-center overflow-x-hidden" data-name="Default Pipeline">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgDefaultPipeline1} />
                  <div className="absolute bg-black/6 inset-0" />
                  <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
                </div>
                <div className="relative z-10 w-full shrink-0 px-4 pt-8 sm:px-6 sm:pt-10 md:px-10 md:pt-12 lg:px-12 xl:px-[48px]">
                  <div className="relative aspect-[3714/2493] w-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] md:mx-auto md:max-h-[min(55vh,792px)]" data-name="image 15">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full object-cover object-top" src={imgImage15} />
                  </div>
                </div>
                <div className="relative z-10 flex w-full shrink-0 items-center justify-center px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:pb-24 lg:pb-[120px]">
                  <div className="flex flex-col gap-2 sm:gap-[8px] items-center relative shrink-0 w-full max-w-[446px] mx-auto">
                    <p className="font-['Open_Sauce_Two:Regular',sans-serif] font-light leading-[18px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-center text-balance">Default · B2B SaaS · 2023-2026</p>
                    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[1.25] sm:leading-[36px] min-h-px min-w-px relative text-[22px] sm:text-[25px] text-center text-white tracking-[-0.2px] text-balance">Made the shift from list of records to system of records and central data storage place</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Open_Sauce_Two:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px not-italic relative text-[13px] text-center text-white">Led design through multiple platform iterations, built foundations for scalable design systems, and shaped product workflows used by revenue teams.</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>No PRD</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>No dedicated research</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Hands-on design</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Shipped in 6 weeks</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                      </div>
                      <div className={`backdrop-blur-[12px] ${isDark ? "bg-[#2a2a2a] text-[#8c929c]" : "bg-[#ececf0] text-[#5b616d]"} transition-colors duration-700 relative overflow-hidden rounded-[24px] shrink-0 w-full`}>
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
                            <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`} data-name="Container">
                              <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)]" />
                              <div className="flex flex-row justify-center size-full">
                                <div className="content-stretch flex items-start justify-center p-[12px] relative size-full">
                                  <div className="relative shrink-0">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-wrap font-['Switzer_Variable:Regular',sans-serif] gap-4 sm:gap-6 md:gap-[24px] items-center justify-center relative w-full text-center">
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>+34%</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Conversion</p>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>1.8×</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Dev Velocity</p>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>$2.5M</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>ARR Impact</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[12px] text-center w-[min-content] whitespace-pre-wrap ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>
                              <p className="font-light leading-[16px] mb-0">{`Trade-offs: Kanban view, calendar view, opportunities. `}</p>
                              <p className="font-light leading-[16px]">Shipped core value first.</p>
                            </div>
                            <div className={`backdrop-blur-[12px] ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f2f2f4]'} transition-colors duration-700 content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105`} data-name="Button">
                              <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_sm">
                                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-[#c3c6cc]" : "text-[#5b616d]"} transition-colors duration-700`}>Case study soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full min-w-0 flex-col items-center overflow-x-hidden" data-name="Default Pipeline">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgDefaultPipeline2} />
                  <div className="absolute bg-black/6 inset-0" />
                  <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
                </div>
                <div className="relative z-10 w-full shrink-0 px-4 pt-8 sm:px-8 sm:pt-10 md:px-12 md:pt-12 lg:px-14 xl:px-[72px]">
                  <div className="relative aspect-[4096/2592] w-full overflow-hidden shadow-[0px_16px_52.5px_0px_rgba(0,0,0,0.03),0px_9.432px_30.949px_0px_rgba(0,0,0,0.04)] cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl md:mx-auto md:max-h-[min(55vh,792px)]" data-name="image 10">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full object-cover object-top" src={imgImage10} />
                  </div>
                </div>
                <div className="relative z-10 flex w-full shrink-0 items-center justify-center px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:pb-24 lg:pb-[120px]">
                  <div className="flex flex-col gap-2 sm:gap-[8px] items-center relative shrink-0 w-full max-w-[446px] mx-auto">
                    <p className="font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-center text-balance">Apollo.io· B2B · SaaS · 2020-2022</p>
                    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[1.25] sm:leading-[36px] min-h-px min-w-px relative text-[22px] sm:text-[25px] text-center text-white tracking-[-0.2px] text-balance">Started as a small question about data quality, ended as a separate team project.</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[13px] text-center text-white">Was working on small task, detected signals about functionality extension and as a result small initiative has been converted into the fully loaded product squad and separate product feature.</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Signal based</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Rapid proto</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Scaled x3</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Shipped in 1 month</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                      </div>
                      <div className={`backdrop-blur-[12px] ${isDark ? "bg-[#2a2a2a] text-[#8c929c]" : "bg-[#ececf0] text-[#5b616d]"} transition-colors duration-700 relative overflow-hidden rounded-[24px] shrink-0 w-full`}>
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
                            <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`} data-name="Container">
                              <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)]" />
                              <div className="flex flex-row justify-center size-full">
                                <div className="content-stretch flex items-start justify-center p-[12px] relative size-full">
                                  <div className="relative shrink-0">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-wrap font-['Switzer_Variable:Regular',sans-serif] gap-4 sm:gap-6 md:gap-[24px] items-center justify-center relative w-full text-center">
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>+18%</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Data accuracy</p>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>+12%</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Satisfaction</p>
                                      </div>
                                      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                        <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>-16%</p>
                                        <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Bounce rate</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[12px] text-center w-[min-content] whitespace-pre-wrap ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>
                              <p className="font-light leading-[16px] mb-0">{`Trade-offs: Service outside the platform. `}</p>
                              <p className="font-light leading-[16px]">Focused on data quality on platform first.</p>
                            </div>
                            <div className={`backdrop-blur-[12px] ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f2f2f4]'} transition-colors duration-700 content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105`} data-name="Button">
                              <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_sm">
                                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-[#c3c6cc]" : "text-[#5b616d]"} transition-colors duration-700`}>Case study soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full min-w-0 flex-col items-center overflow-x-hidden" data-name="Default Pipeline">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={imgDefaultPipeline3} />
                  <div className="absolute bg-black/6 inset-0" />
                  <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
                </div>
                <div className="relative z-10 w-full shrink-0 px-4 pt-8 sm:px-8 sm:pt-10 md:px-12 md:pt-12 lg:px-14 xl:px-[72px]">
                  <div className="relative aspect-[4096/2592] w-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] md:mx-auto md:max-h-[min(55vh,792px)]" data-name="image 349">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full object-cover object-top" src={imgImage349} />
                  </div>
                </div>
                <div className="relative z-10 flex w-full shrink-0 items-center justify-center px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-10 md:pb-24 lg:pb-[120px]">
                  <div className="flex flex-col gap-2 sm:gap-[8px] items-center relative shrink-0 w-full max-w-[446px] mx-auto">
                    <p className="font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)] text-center text-balance">NDA Project · B2C · B2B · SaaS · 2020-2021</p>
                    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[1.25] sm:leading-[36px] min-h-px min-w-px relative text-[22px] sm:text-[25px] text-center text-white tracking-[-0.2px] text-balance whitespace-pre-wrap">{`250+ screens, 4 user roles, less than 6 months for re-shaping the  crowdfunding experience`}</p>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[13px] text-center text-white">Led the product design, re-shaped the way people support people, created more than 250 frames for 4 main user roles.</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>No PRD</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Move as you go</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Direction change x3</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[20px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[6px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_xs">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[14px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[12px] whitespace-nowrap`}>Shipped in 4 months</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                      </div>
                      <div className={`backdrop-blur-[12px] ${isDark ? "bg-[#2a2a2a] text-[#8c929c]" : "bg-[#ececf0] text-[#5b616d]"} transition-colors duration-700 relative overflow-hidden rounded-[24px] shrink-0 w-full`}>
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
                            <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`} data-name="Container">
                              <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)]" />
                              <div className="flex flex-row justify-center size-full">
                                <div className="content-stretch flex items-start justify-center p-[12px] relative size-full">
                                  <div className="flex-[1_0_0] min-h-px min-w-px relative">
                                    <div className="flex flex-row items-center size-full">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid flex flex-wrap font-['Switzer_Variable:Regular',sans-serif] items-center justify-center sm:justify-between gap-4 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-[100px] relative w-full text-center">
                                        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                          <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>250+</p>
                                          <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Screens</p>
                                        </div>
                                        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                          <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>4</p>
                                          <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Roles</p>
                                        </div>
                                        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
                                          <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>{`>6`}</p>
                                          <p className={`font-light leading-[16px] relative shrink-0 text-[12px] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>Months</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[16px] min-w-full relative shrink-0 text-[12px] text-center w-[min-content] ${isDark ? "text-[#8c929c]" : "text-[#5b616d]"} transition-colors duration-700`}>{`Trade-offs: hypotheses based, sacrified crypto-direction, gamification & achievements.`}</p>
                            <div className={`backdrop-blur-[12px] ${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f2f2f4]'} transition-colors duration-700 content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105`} data-name="Button">
                              <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_sm">
                                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-[#c3c6cc]" : "text-[#5b616d]"} transition-colors duration-700`}>Case study soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <Link to="/works" className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
                  <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[1000px]`} />
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                    <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>View more projects</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                    <ArrowRightIcon className={isDark ? 'text-[#0a0c11]' : 'text-white'} />
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                </Link>
              </div>
              <div className={`transition-colors duration-700 relative shrink-0 w-full ${!isDark ? 'bg-white' : ''}`}>
                <div className="content-stretch flex flex-col items-start overflow-hidden relative rounded-[inherit] w-full">
                  <div className="transition-colors duration-700 relative shrink-0 w-full">
                    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-1 lg:grid-cols-2 p-[20px] md:p-[32px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[20px] items-start justify-self-stretch relative self-start shrink-0 w-full">
                        <div className="content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full">
                          <p className={`font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>There are 40+ projects completed, to see some of them you can visit my Dribbble profile or go to the Playground where you will find unreleased conceptions or ideas visualization</p>
                          <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>There is an opportunity to make quick concepts by request is you want to validate your idea not only with AI but with real users as well.</p>
                        </div>
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <Link to="/playground" className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 no-underline" data-name="Button">
                            <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`} />
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                            <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>View playground</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                              <ArrowRightIcon className={isDark ? "text-white/64" : "text-[#5b616d]"} />
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`relative h-[min(70vh,540px)] min-h-[360px] w-full shrink-0 overflow-hidden rounded-[inherit] ${isDark ? "bg-[#151515]" : "bg-[#f9f9fa]"}`}>
                    <PlaygroundCanvas isDark={isDark} embed />
                  </div>
                </div>
                {!isDark ? (
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none" />
                ) : null}
              </div>
              <div className={`${!isDark ? 'bg-white' : ''} transition-colors duration-700 relative shrink-0 w-full`}>
                <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
                  <div className={`${!isDark ? 'bg-white' : ''} transition-colors duration-700 relative shrink-0 w-full`}>
                    <div className="flex flex-col items-center justify-center p-[32px] relative size-full w-full">
                      <div className="flex flex-col items-center gap-[8px] font-['Switzer_Variable:Regular',sans-serif] max-w-[472px] relative shrink-0 w-full">
                        <p className={`font-medium leading-[36px] relative shrink-0 text-center ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[25px] tracking-[-0.2px] w-full`}>What portfolios don’t show</p>
                        <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] text-center w-full`}>Most portfolios show finals. Few show the constraints, the cuts, and the chaos that got there.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[64px] relative shrink-0 w-full">
                    <Stories
                      className="content-stretch flex flex-col gap-[20px] h-[526px] shrink-0 w-full max-w-[296px] cursor-pointer"
                      isDark={isDark}
                      slides={storySlides}
                      renderIcon={(slide) =>
                        slide.iconSrc ? (
                          <div className="relative size-[80px] shrink-0" data-name="Images">
                            <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={slide.iconSrc} />
                          </div>
                        ) : (
                          <Images className="relative size-[60px] shrink-0" />
                        )
                      }
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start py-8 md:py-[32px] relative shrink-0 w-full" data-name="Hiring philosophy">
              <div className="content-stretch flex w-full flex-col items-stretch gap-8 md:gap-12 pb-8 md:pb-[32px] relative shrink-0">
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none ${isDark ? 'border-white/[0.06]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                <div className="content-stretch flex w-full min-w-0 flex-col items-stretch relative shrink-0">
                  <div className={`${isDark ? 'bg-[#151515]' : 'bg-[#f9f9fa]'} transition-colors duration-700 content-stretch flex items-center justify-center overflow-clip py-12 md:py-[64px] relative shrink-0 w-full`} data-name="Container">
                    <div className="content-stretch mx-auto box-border flex w-full max-w-[472px] shrink-0 flex-col items-start gap-[21px] px-4 md:px-6 relative" data-name="Container">
                      <div className="flex h-[88.429px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "38" } as React.CSSProperties}>
                        <div className="-rotate-2 flex-none w-full">
                          <div className={`${isDark ? "bg-[#363636]" : "bg-white"} transition-colors duration-700 relative rounded-[14px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03)] w-full`} data-name="Container">
                            <div className="content-stretch flex flex-col items-start px-[17px] py-[16px] relative size-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <p className={`font-['Suisse_Int'l:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] w-full ${isDark ? 'text-[#99a1af]' : 'text-[#5b616d]'}`}>Before</p>
                                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[24px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[18px] w-full`}>{`"We need a redesign."`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
                        <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "19" } as React.CSSProperties}>
                          <div className="flex-none rotate-90">
                            <div className="relative size-[20px]" data-name="arrow-right-circle">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                                <div className="absolute inset-[8.33%]" data-name="vector">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                                    <path
                                      clipRule="evenodd"
                                      d={svgPaths.p352acef0}
                                      fill={isDark ? "#9CA3AF" : "black"}
                                      fillOpacity={isDark ? 1 : 0.12}
                                      fillRule="evenodd"
                                      id="vector"
                                      className="transition-colors duration-700"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rotate-2 flex-none w-full">
                        <div className={`${isDark ? "bg-[#363636]" : "bg-white"} transition-colors duration-700 relative rounded-[14px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03)] shrink-0 w-full`} data-name="Container">
                          <div className="content-stretch flex flex-col items-start px-[17px] py-[16px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <p className={`font-['Suisse_Int'l:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] w-full ${isDark ? 'text-[#54cfa4]' : 'text-[#409b3f]'}`}>After</p>
                              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[24px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[18px] w-full`}>{`"We need to increase conversion by 20%."`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch box-border mx-auto flex w-full min-w-0 max-w-[530px] flex-col gap-10 md:gap-[64px] items-start px-4 md:px-6 relative shrink-0">
                  <div className="content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[8px] items-start relative shrink-0 w-full">
                    <p className={`font-medium leading-[36px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[25px] tracking-[-0.2px] w-full`}>{`Companies aren't hiring "designers." They're hiring people who reduce chaos.`}</p>
                    <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>{`Max’s methodology isn't about perfect artifacts. It's about driving clarity in complex environments and shipping outcomes that matter. From discovery to strategy to execution.`}</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                        <div className="relative shrink-0 size-[20px]" data-name="circle-check, check radio, circle, checkbox, check, checkmark, confirm">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute inset-[8.33%]" data-name="vector">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                                <path clipRule="evenodd" d={svgPaths.pf9f140} fill="var(--fill-0, #409B3F)" fillRule="evenodd" id="vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[4px] items-center justify-center leading-[18px] relative size-full text-[13px]">
                            <p className={`font-normal text-[15px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 w-full`}>Can Max ship when the brief changes?</p>
                            <p className={`font-light relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 w-full`}>Yes. Recent project pivoted scope 3 weeks before launch. Shipped anyway.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                        <div className="relative shrink-0 size-[20px]" data-name="circle-check, check radio, circle, checkbox, check, checkmark, confirm">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute inset-[8.33%]" data-name="vector">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                                <path clipRule="evenodd" d={svgPaths.pf9f140} fill="var(--fill-0, #409B3F)" fillRule="evenodd" id="vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[4px] items-center justify-center leading-[18px] relative size-full text-[13px]">
                            <p className={`font-normal text-[15px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 w-full`}>Can Max explain tradeoffs without perfect research?</p>
                            <p className={`font-light relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 w-full`}>Went from 4 syncs/week to 1 at Apollo. Decision memos replaced status updates.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                        <div className="relative shrink-0 size-[20px]" data-name="circle-check, check radio, circle, checkbox, check, checkmark, confirm">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute inset-[8.33%]" data-name="vector">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                                <path clipRule="evenodd" d={svgPaths.pf9f140} fill="var(--fill-0, #409B3F)" fillRule="evenodd" id="vector" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[4px] items-center justify-center leading-[18px] relative size-full text-[13px]">
                            <p className={`font-normal text-[15px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 w-full`}>Can Max reduce alignment meetings?</p>
                            <p className={`font-light relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 w-full`}>{`Yes. Here's a decision memo I wrote with 48 hours notice and zero user data.`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`backdrop-blur-[12px] ${isDark ? "bg-[#2a2a2a]" : "bg-[rgba(0,0,0,0.03)]"} transition-colors duration-700 relative rounded-[24px] shrink-0 w-full`} data-name="Toast">
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
                        <div className={`${isDark ? 'bg-[#363636]' : 'bg-white'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`} data-name="List_wrap">
                          <div aria-hidden="true" className={`absolute border-0 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)] ${isDark ? "border-white/[0.06]" : "border-[rgba(0,0,0,0.06)]"}`} />
                          <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Left">
                              <div className="bg-[rgba(111,97,255,0.12)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[32px]" data-name="Feature_icon">
                                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="filled=on, stroke=2, radius=0, join=round">
                                  <div className="absolute inset-[8.33%_9.08%_11.27%_9.08%]" data-name="vector">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3672 16.0786">
                                      <path clipRule="evenodd" d={svgPaths.p3835e380} fill="var(--fill-0, #5548D8)" fillRule="evenodd" id="vector" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text_wrap">
                              <div className="flex flex-col justify-center size-full">
                                <div className="content-stretch flex flex-col items-start justify-center px-[4px] relative size-full">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Heading_top">
                                    <p className={`flex-[1_0_0] font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px]`}>AI handles 40% of what I used to do.</p>
                                  </div>
                                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>{`So now I focus on what it can't: stakeholder alignment, scope protection, and knowing what to cut.`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-white/48" : "text-[#8c929c]"}`}>MaxI believes in expert multiplication with AI, not replacement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-0 flex w-full min-w-0 flex-col items-start" data-name="Approach section">
                <div className="content-stretch flex w-full min-w-0 flex-col gap-8 md:gap-[32px] items-start justify-start relative">
                  <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-[342.67px_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] py-6 md:py-[32px] relative shrink-0 w-full">
                    <div className="col-1 content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
                      <p className={`font-medium leading-[36px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[25px] tracking-[-0.2px] w-full`}>Focus → Outcomes over outputs: from insight to shipped impact.</p>
                      <p className={`font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>{`The old design process—Double Diamond, weeks of research, polished decks—doesn't work in the AI era. I use two models depending on context.`}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex w-full flex-col items-stretch relative">
                    <div className="content-stretch flex w-full flex-col items-stretch relative">
                      <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-[1px] relative items-stretch" data-name="Approach cards">
                        <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-700 flex h-full min-h-0 w-full min-w-0 flex-col lg:mr-[-1px] relative`} data-name="card">
                          <div aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full border border-solid border-[rgba(0,0,0,0.06)]" />
                          <div className="relative flex h-full min-h-0 w-full flex-1 flex-col gap-[24px] md:gap-[32px] items-stretch pb-[24px] md:pb-[32px] pt-[32px] md:pt-[48px] px-[16px] md:px-[32px]">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                              <div className="relative shrink-0 size-[56px]" data-name="Images">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImages2} />
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>Multiplier Model</p>
                                </div>
                                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Human = Strategic Brain, AI = Execution Layer</p>
                              </div>
                            </div>
                            <div className="flex min-h-0 flex-1 flex-col gap-[16px] items-stretch relative w-full">
                              <div className="flex min-h-0 flex-1 flex-col gap-[2px] items-stretch relative w-full">
                                <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative flex min-h-0 flex-1 w-full flex-col rounded-tl-[28px] rounded-tr-[28px]`}>
                                  <div className="overflow-clip rounded-[inherit] size-full">
                                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative size-full">
                                      <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>I DO</p>
                                      <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[20px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`}>Stakeholder interviews, define bets, scope decisions, quality gates, taste calls</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative rounded-bl-[28px] rounded-br-[28px] shrink-0 w-full`}>
                                  <div className="overflow-clip rounded-[inherit] size-full">
                                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative size-full">
                                      <p className="font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6f61ff] text-[13px] w-full">AI DOES</p>
                                      <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[20px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`}>Competitive research, wireframes, copy variations, specs, handoff docs</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`mt-auto shrink-0 backdrop-blur-[12px] ${isDark ? 'bg-[#1e2a1e]' : 'bg-[#e3f6e2]'} transition-colors duration-700 relative rounded-[28px] w-full`} data-name="Alert">
                                <div className="flex flex-row justify-center size-full">
                                  <div className="content-stretch flex items-start justify-center p-[12px] relative size-full">
                                    <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-700 flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]`} data-name="List_wrap">
                                      <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)]" />
                                      <div className="content-stretch flex gap-[12px] items-start px-[24px] py-[12px] relative size-full">
                                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Text_wrap">
                                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading_top">
                                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[20px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] whitespace-nowrap`}>Best for:</p>
                                          </div>
                                          <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Embedded roles, complex stakeholder environments, team leadership</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-700 flex h-full min-h-0 w-full min-w-0 flex-col lg:mr-[-1px] relative`} data-name="card">
                          <div aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full border border-solid border-[rgba(0,0,0,0.06)]" />
                          <div className="relative flex h-full min-h-0 w-full flex-1 flex-col gap-[24px] md:gap-[32px] items-stretch pb-[24px] md:pb-[32px] pt-[32px] md:pt-[48px] px-[16px] md:px-[32px]">
                            <div className="content-stretch flex shrink-0 gap-[16px] items-center relative w-full">
                              <div className="relative shrink-0 size-[56px]" data-name="Images">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImages3} />
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>Loop Model</p>
                                </div>
                                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Human + AI = Rapid Iteration Partners</p>
                              </div>
                            </div>
                            <div className="flex min-h-0 flex-1 flex-col gap-[16px] items-stretch relative w-full">
                              <div className="flex min-h-0 flex-1 flex-col gap-[2px] items-stretch relative w-full">
                                <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative flex min-h-0 flex-1 w-full flex-col rounded-[28px]`}>
                                  <div className="flex min-h-0 flex-1 flex-col overflow-clip rounded-[inherit]">
                                    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-[24px] px-[32px] py-[24px] relative w-full min-h-full">
                                    <div
                                      className="flex w-full flex-nowrap items-center justify-between gap-1 sm:gap-1.5"
                                      data-name="Loop flow"
                                    >
                                      <div className={`${isDark ? "bg-[#1a1a1a]" : "bg-white"} transition-colors duration-700 flex min-w-0 shrink items-center justify-center overflow-clip px-2 py-3 sm:px-3 sm:py-[14px] md:px-[12px] relative rounded-[14px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]`}>
                                        <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[11px] sm:text-[13px] whitespace-nowrap`}>Prompt</p>
                                      </div>
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
                                        <div className="absolute inset-[20.83%_12.5%]" data-name="vector">
                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
                                            <path clipRule="evenodd" d={svgPaths.p7be9470} fill="var(--fill-0, #C3C6CC)" fillRule="evenodd" id="vector" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className={`${isDark ? "bg-[#1a1a1a]" : "bg-white"} transition-colors duration-700 flex min-w-0 shrink items-center justify-center overflow-clip px-2 py-3 sm:px-3 sm:py-[14px] md:px-[12px] relative rounded-[14px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]`}>
                                        <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[11px] sm:text-[13px] whitespace-nowrap`}>Generate</p>
                                      </div>
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
                                        <div className="absolute inset-[20.83%_12.5%]" data-name="vector">
                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
                                            <path clipRule="evenodd" d={svgPaths.p7be9470} fill="var(--fill-0, #C3C6CC)" fillRule="evenodd" id="vector" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className={`${isDark ? "bg-[#1a1a1a]" : "bg-white"} transition-colors duration-700 flex min-w-0 shrink items-center justify-center overflow-clip px-2 py-3 sm:px-3 sm:py-[14px] md:px-[12px] relative rounded-[14px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]`}>
                                        <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[11px] sm:text-[13px] whitespace-nowrap`}>Judge</p>
                                      </div>
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
                                        <div className="absolute inset-[20.83%_12.5%]" data-name="vector">
                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
                                            <path clipRule="evenodd" d={svgPaths.p7be9470} fill="var(--fill-0, #C3C6CC)" fillRule="evenodd" id="vector" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className={`${isDark ? "bg-[#1a1a1a]" : "bg-white"} transition-colors duration-700 flex min-w-0 shrink items-center justify-center overflow-clip px-2 py-3 sm:px-3 sm:py-[14px] md:px-[12px] relative rounded-[14px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]`}>
                                        <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[11px] sm:text-[13px] whitespace-nowrap`}>Refine</p>
                                      </div>
                                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-right">
                                        <div className="absolute inset-[20.83%_12.5%]" data-name="vector">
                                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
                                            <path clipRule="evenodd" d={svgPaths.p7be9470} fill="var(--fill-0, #C3C6CC)" fillRule="evenodd" id="vector" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className={`${isDark ? "bg-[#1a1a1a]" : "bg-white"} transition-colors duration-700 flex min-w-0 shrink items-center justify-center overflow-clip px-2 py-3 sm:px-3 sm:py-[14px] md:px-[12px] relative rounded-[14px] shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),0px_3px_3px_-1.5px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]`}>
                                        <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[11px] sm:text-[13px] whitespace-nowrap`}>Ship</p>
                                      </div>
                                    </div>
                                    <div className="h-[18.005px] relative w-full shrink-0">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 418.5 18.0054">
                                        <g id="Frame 2147229874">
                                          <path d={svgPaths.p1ee0a600} fill="var(--fill-0, #C3C6CC)" id="Line 1 (Stroke)" />
                                        </g>
                                      </svg>
                                    </div>
                                    <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-center ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>(repeat in hours, not weeks)</p>
                                  </div>
                                </div>
                              </div>
                              </div>
                              <div className={`mt-auto shrink-0 backdrop-blur-[12px] ${isDark ? 'bg-[#1e2836]' : 'bg-[#effaff]'} transition-colors duration-700 relative rounded-[28px] w-full`} data-name="Alert">
                                <div className="flex flex-row justify-center size-full">
                                  <div className="content-stretch flex items-start justify-center p-[12px] relative size-full">
                                    <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-700 flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]`} data-name="List_wrap">
                                      <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)]" />
                                      <div className="content-stretch flex gap-[12px] items-start px-[24px] py-[12px] relative size-full">
                                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px pb-[4px] relative" data-name="Text_wrap">
                                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading_top">
                                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[20px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] whitespace-nowrap`}>Best for:</p>
                                          </div>
                                          <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Embedded roles, complex stakeholder environments, team leadership</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${isDark ? 'bg-[#151515]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative z-10 flex w-full shrink-0 flex-col gap-4 px-4 py-5 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-6 md:gap-y-3 md:px-[32px] md:py-5`}
                        data-name="Approach principles bar"
                      >
                        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none" />
                        <Link to="/approach" className="relative z-[1] flex h-10 shrink-0 items-center self-start overflow-hidden rounded-[1000px] px-[10px] py-1 no-underline" data-name="Button">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[1000px]`} />
                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>View full approach</p>
                          </div>
                          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                            <ArrowRightIcon className={isDark ? 'text-[#0a0c11]' : 'text-white'} />
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                        </Link>
                        <div className="content-stretch flex flex-wrap gap-2 md:gap-[16px] items-center relative shrink-0 w-full md:w-auto">
                          <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f2f2f4]'} transition-colors duration-700 content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[1000px] shrink-0`}>
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-dashed inset-0 pointer-events-none rounded-[1000px]" />
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[20px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[15px] text-center whitespace-nowrap`}>Fast feedback over perfect decks</p>
                          </div>
                          <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f2f2f4]'} transition-colors duration-700 content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[1000px] shrink-0`}>
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-dashed inset-0 pointer-events-none rounded-[1000px]" />
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[20px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[15px] text-center whitespace-nowrap`}>{`Ship > polish`}</p>
                          </div>
                          <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f2f2f4]'} transition-colors duration-700 content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[1000px] shrink-0`}>
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-dashed inset-0 pointer-events-none rounded-[1000px]" />
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[20px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[15px] text-center whitespace-nowrap`}>{`Disagree & commit within 48h`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-8 shrink-0 w-full md:h-10" />
                </div>
            </div>
            <div className="relative z-10 mt-6 flex w-full min-w-0 flex-col gap-8 md:mt-10 md:gap-[32px] items-start" data-name="Ventures">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                  <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-medium justify-self-stretch leading-[36px] relative row-1 self-start shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[25px] tracking-[-0.2px]`}>Products Max is building</p>
                </div>
                <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                  <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-light justify-self-stretch leading-[18px] relative row-1 self-start shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px]`}>Tools I build to keep my instincts sharp. Each started as a problem I faced.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex w-full flex-col min-[1281px]:flex-row items-stretch min-[1281px]:items-start pr-px relative shrink-0" data-name="Ventures cards">
                  <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 w-full min-[1281px]:flex-[1_0_0] min-h-px min-w-0 min-[1281px]:min-w-px mr-0 min-[1281px]:mr-[-1px] mb-[-1px] min-[1281px]:mb-0 relative self-stretch`}>
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                            <div className="flex items-center justify-center relative shrink-0 size-[107.778px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "19" } as React.CSSProperties}>
                              <div className="flex-none rotate-15">
                                <div className="content-stretch flex items-center p-[8.25px] relative rounded-[24px] size-[88px]">
                                  <div className="relative size-[72px] shrink-0 overflow-clip rounded-[24px] shadow-[0px_2px_2px_-0.5px_rgba(0,0,0,0.03)]" data-name="icon">
                                    <div className="absolute inset-0 overflow-clip rounded-[24px] border border-[#252525] border-solid bg-[#252525] size-full">
                                      <GradeStudioMarkIcon className="block size-full" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-[110px]">
                              <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#ececf0]'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`}>
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[4px] relative size-full">
                                    <div className="bg-[#008ece] rounded-[12px] shrink-0 size-[8px]" />
                                    <div className={`flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>
                                      <p className="leading-[18px]">Fundraising</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <a href="https://fliq.club" target="_blank" rel="noopener noreferrer" className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full no-underline hover:underline`}>fliq.club</a>
                            </div>
                            <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`}>Fliq. Match. Meet. Launch.</p>
                            <div className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[0] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full whitespace-pre-wrap`}>
                              <p className="leading-[18px] mb-0">{`Start-up market and networking simplification. `}</p>
                              <p className="leading-[18px]">Can it be new Linkedin?</p>
                            </div>
                            <div className={`backdrop-blur-[12px] ${isDark ? "bg-[#2a2a2a]" : "bg-[rgba(0,0,0,0.03)]"} transition-colors duration-700 relative rounded-[28px] shrink-0 w-full`} data-name="Alert">
                              <div className="flex flex-col items-stretch size-full">
                                <div className="content-stretch flex flex-col items-stretch p-[12px] relative size-full">
                                  <div className={`${isDark ? "bg-[#363636]" : "bg-white"} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`} data-name="List_wrap">
                                    <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)]" />
                                    <div className="flex flex-col gap-[12px] items-start p-[16px] relative w-full min-w-0">
                                      <div className="flex flex-col gap-[4px] items-start min-w-0 w-full" data-name="Text_wrap">
                                        <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[20px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`} data-name="Heading_top">Looking for an investment project?</p>
                                        <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Let’s chat and define the idea</p>
                                      </div>
                                      <div className="flex flex-col items-start gap-[12px] w-full min-w-0" data-name="CTAs">
                                        <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
                                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`} />
                                          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>Grab 30 mins</p>
                                          </div>
                                          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                                            <div className="relative shrink-0 size-[18px]" data-name="icons / google meet">
                                              <div className="absolute inset-[10%_0]" data-name="image 37">
                                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none ${isDark ? 'border-white/[0.06]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                  </div>
                  <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-700 w-full min-[1281px]:flex-[1_0_0] min-h-px min-w-0 min-[1281px]:min-w-px mr-0 min-[1281px]:mr-[-1px] mb-[-1px] min-[1281px]:mb-0 relative self-stretch`}>
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex min-h-full w-full flex-col items-start p-[32px] relative">
                        <div className="content-stretch flex flex-1 flex-col gap-[32px] items-start relative w-full min-h-0">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                            <div className="flex items-center justify-center relative shrink-0 size-[107.778px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "79" } as React.CSSProperties}>
                              <div className="flex-none rotate-15">
                                <div className="content-stretch flex items-center p-[8.25px] relative rounded-[24px] size-[88px]">
                                  <div className="relative size-[72px] shrink-0 overflow-clip rounded-[24px] shadow-[0px_2px_2px_-0.5px_rgba(0,0,0,0.03)]" data-name="icon">
                                    <PinnboardsMarkIcon className="block size-full" glowFilterId="pinnboardsGlowVenture" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-[110px]">
                              <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#ececf0]'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`}>
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[4px] relative size-full">
                                    <div className="bg-[#e4a000] rounded-[12px] shrink-0 size-[8px]" />
                                    <div className={`flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>
                                      <p className="leading-[18px]">Closed beta</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <a href="https://pinnboards.com" target="_blank" rel="noopener noreferrer" className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full no-underline hover:underline`}>pinnboards.com</a>
                            </div>
                            <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`}>Pinn. Collaborate. Generate.</p>
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>Figma for PMs with omni-channel AI</p>
                          </div>
                        </div>
                        <div className="relative mt-[32px] flex h-[40px] shrink-0 cursor-pointer items-center justify-center gap-[2px] rounded-[1000px] px-[10px] py-[4px] transition-all duration-200 hover:scale-105" data-name="Button">
                          <div aria-hidden="true" className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] ${isDark ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(242,242,244,0.8)]"} transition-colors duration-700`} />
                          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.06)] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] text-[13px] font-medium leading-[18px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>Join beta</p>
                          </div>
                          <div className="relative flex items-center justify-center" data-name="Right_md">
                            <ArrowRightIcon className={isDark ? "text-white" : "text-[#0a0c11]"} />
                          </div>
                          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none ${isDark ? 'border-white/[0.06]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                  </div>
                  <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-700 w-full min-[1281px]:flex-[1_0_0] min-h-px min-w-0 min-[1281px]:min-w-px mr-0 min-[1281px]:mr-[-1px] mb-[-1px] min-[1281px]:mb-0 relative self-stretch`}>
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex min-h-full w-full flex-col items-start p-[32px] relative">
                        <div className="content-stretch flex flex-1 flex-col gap-[32px] items-start relative w-full min-h-0">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                            <div className="flex items-center justify-center relative shrink-0 size-[107.778px]" style={{ "--transform-inner-width": "1183", "--transform-inner-height": "19" } as React.CSSProperties}>
                              <div className="flex-none rotate-15">
                                <div className="content-stretch flex items-center p-[8.25px] relative rounded-[24px] size-[88px]">
                                  <div className="aspect-[60/60] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[24px] shadow-[0px_2px_2px_-0.5px_rgba(0,0,0,0.03),0px_6px_6px_-1.5px_rgba(0,0,0,0.03)]" data-name="icon">
                                    <div className="absolute left-0 size-[71.788px] top-0" data-name=".icon">
                                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.788 71.788">
                                        <g id=".icon">
                                          <rect fill="#FFE53D" height="71.788" width="71.788" rx="24" />
                                          <circle cx="35.751" cy="22.8928" fill="var(--fill-0, black)" id="Ellipse 21" r="5.14286" />
                                          <circle cx="24.1786" cy="29.3214" fill="var(--fill-0, black)" id="Ellipse 22" r="5.14286" />
                                          <circle cx="24.1786" cy="42.1786" fill="var(--fill-0, black)" id="Ellipse 23" r="5.14286" />
                                          <circle cx="35.751" cy="48.6072" fill="var(--fill-0, black)" id="Ellipse 24" r="5.14286" />
                                          <circle cx="47.3214" cy="42.1786" fill="var(--fill-0, #FFB20D)" id="Ellipse 25" r="5.14286" />
                                          <circle cx="47.3214" cy="29.3214" fill="var(--fill-0, #FFB20D)" id="Ellipse 26" r="5.14286" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-[71px]">
                              <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#ececf0]'} transition-colors duration-700 relative rounded-[16px] shrink-0 w-full`}>
                                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[4px] relative size-full">
                                    <div className="bg-[#8c929c] rounded-[12px] shrink-0 size-[8px]" />
                                    <div className={`flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>
                                      <p className="leading-[18px]">Soon</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[30px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px] w-full`}>organica.club</p>
                            </div>
                            <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`}>Be organic. Be yourself.</p>
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>People deserve to be real, consume real content and be organic in every moment.</p>
                          </div>
                        </div>
                        <div className="relative mt-[32px] flex h-[40px] shrink-0 cursor-pointer items-center justify-center gap-[2px] rounded-[1000px] px-[10px] py-[4px] transition-all duration-200 hover:scale-105" data-name="Button">
                          <div aria-hidden="true" className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] ${isDark ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(242,242,244,0.8)]"} transition-colors duration-700`} />
                          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.06)] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] text-[13px] font-medium leading-[18px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>Chat with Max</p>
                          </div>
                          <div className="relative flex items-center justify-center" data-name="Right_md">
                            <ArrowRightIcon className={isDark ? "text-white" : "text-[#0a0c11]"} />
                          </div>
                          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" aria-hidden />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none ${isDark ? 'border-white/[0.06]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                  </div>
                </div>
                <div className={`${isDark ? 'bg-[#151515]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative shrink-0 w-full`}>
                  <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                        <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-medium justify-self-stretch leading-[30px] relative row-1 self-start shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[22px] tracking-[-0.2px]`}>Want to hear more about what Max is building or have an interest in becoming a partner or investor?</p>
                      </div>
                      <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
                        <p className={`col-1 font-['Switzer_Variable:Regular',sans-serif] font-light justify-self-stretch leading-[18px] relative row-1 self-start shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px]`}>He is always open to new partnership ideas or collaboration, do not hesitate to contact if you want to build something together.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg no-underline" data-name="Button">
                        <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[1000px] transition-all duration-200`} />
                        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                          <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>Grab 30 mins</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                          <div className="relative shrink-0 size-[18px]" data-name="icons / google meet">
                            <div className="absolute inset-[10%_0]" data-name="image 37">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transition-colors duration-700 content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full">
              <div className="transition-colors duration-700 relative shrink-0 w-full">
                <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)_minmax(0,0.35fr)] grid-rows-[repeat(1,fit-content(100%))] p-[32px] relative size-full">
                  <div className="col-1 lg:col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0 w-full min-w-0">
                    <div className="content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] gap-[8px] items-center relative shrink-0 w-full text-center">
                      <p className={`font-medium leading-[36px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[25px] tracking-[-0.2px] w-full`}>{`People I've worked with`}</p>
                      <div className={`font-light leading-[0] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full whitespace-pre-wrap text-center`}>
                        <p className="leading-[18px] mb-0">{`Clients, colleagues, managers, and collaborators `}</p>
                        <p className="leading-[18px]">— they had things to say.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <WorkedWithSection isDark={isDark} />
            </div>
            <div className={`${isDark ? "" : "bg-white"} transition-colors duration-700 relative shrink-0 w-full`}>
              <div
                className="grid grid-cols-1 gap-x-[32px] gap-y-8 px-4 md:px-[32px] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_minmax(0,0.75fr)] lg:items-end"
                data-name="Bio grid"
              >
                <div className="flex min-w-0 flex-col gap-4 font-['Switzer_Variable:Regular',sans-serif] lg:self-start lg:justify-start lg:gap-[16px]">
                  <p className={`font-medium leading-[36px] shrink-0 text-[25px] tracking-[-0.2px] ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700`}>
                    Max design products that help revenue teams move faster.
                  </p>
                  <p className={`font-light text-[13px] leading-[18px] ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700`}>
                    {`Product designer with 13+ years in B2B SaaS. He has been a founding designer three times, which means he built design from zero: no system, no team, no playbook. Just ambiguity and a deadline.`}
                  </p>
                  <p className={`font-light text-[13px] leading-[18px] ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700`}>
                    {`He specializes in the messy middle of product work — the part between "we have an idea" and "it's shipping." He reduces chaos, aligns stakeholders, and makes sure what ships actually moves metrics.`}
                  </p>
                </div>

                <div
                  className="relative aspect-[2732/4096] w-full min-w-0 self-center overflow-hidden lg:self-auto"
                  data-name="DSC07399 1"
                >
                  <img
                    alt=""
                    className="absolute inset-0 h-full w-full max-w-none object-cover object-center pointer-events-none"
                    src={imgDsc073991}
                  />
                </div>

                <div className="flex min-w-0 flex-col gap-4 font-['Switzer_Variable:Regular',sans-serif] lg:justify-end lg:gap-[16px]">
                  <p className={`font-light text-[13px] leading-[18px] ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700`}>
                    <span>{`Max operates at the intersection of `}</span>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700`}>
                      {`Design × Product × Revenue × Systems thinking.`}
                    </span>
                  </p>
                  <p className={`font-light text-[13px] leading-[18px] ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700`}>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700`}>{`His focus: `}</span>
                    building intuitive tools that people actually want to use, balancing user needs with business outcomes.
                  </p>
                  <div className="flex items-center">
                    <Link to="/about" className="relative flex h-[40px] shrink-0 cursor-pointer items-center justify-center gap-[2px] rounded-[1000px] px-[10px] py-[4px] transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
                      <div aria-hidden="true" className={`absolute inset-0 rounded-[1000px] backdrop-blur-[12px] pointer-events-none ${isDark ? 'bg-white' : 'bg-black'}`} />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.09)] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                      <div className="relative flex items-center justify-center gap-[4px] px-[4px]" data-name="Text_wrap_md">
                        <p className={`font-medium text-[13px] leading-[18px] whitespace-nowrap ${isDark ? 'text-[#0a0c11]' : 'text-white'}`}>View full bio</p>
                      </div>
                      <div className="relative flex items-center justify-center" data-name="Right_md">
                        <ArrowRightIcon className={isDark ? 'text-[#0a0c11]' : 'text-white'} />
                      </div>
                      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <CareerPath isDark={isDark} />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col lg:flex-row items-stretch overflow-x-clip relative w-full shrink-0" data-name="Contact CTA">
                  <div className={`relative w-full min-w-0 flex-[1_0_0] self-stretch ${isDark ? "bg-[#151515]" : "bg-[#f9f9fa]"} transition-colors duration-700`}>
                    <div className="relative flex h-auto w-full flex-col items-start gap-4 p-[32px] md:p-8">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className={`${isDark ? "bg-[rgba(64,155,63,0.2)]" : "bg-[#e3f6e2]"} transition-colors duration-700 content-stretch flex gap-[2px] h-[28px] items-center justify-center pl-[2px] pr-[6px] py-[4px] relative rounded-[9999px] shrink-0`} data-name="Tag_special">
                          <div aria-hidden="true" className={`absolute border-0 border-solid inset-0 pointer-events-none rounded-[9999px] ${isDark ? "border-[rgba(64,155,63,0.4)]" : "border-[rgba(64,155,63,0.35)]"} transition-colors duration-700`} />
                          <div className="backdrop-blur-[12px] bg-gradient-to-b from-[rgba(64,155,63,0.56)] relative rounded-[1000px] shrink-0 size-[24px] to-[rgba(64,155,63,0.2)]" data-name="avatar">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" data-name="Icon / Tick">
                              <div className="absolute inset-[4.17%]" data-name="Vector">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
                                  <path clipRule="evenodd" d={svgPaths.pa0b69f0} fill="var(--fill-0, #69C068)" fillRule="evenodd" id="Vector" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-[#9cda9b]" : "text-[#2d7a2c]"} transition-colors duration-700`}>Available for new projects</p>
                          </div>
                        </div>
                        <p className={`w-full max-w-full font-['Switzer_Variable:Regular',sans-serif] text-[22px] font-medium leading-[30px] tracking-[-0.2px] md:text-[25px] md:leading-[36px] ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>Book a discovery call and let’s create valuable digital experience together.</p>
                        <p className={`w-full max-w-full font-['Switzer_Variable:Regular',sans-serif] text-[15px] font-light leading-[22px] md:text-[13px] md:leading-[18px] ${isDark ? "text-[rgba(255,255,255,0.72)]" : "text-[#5b616d]"} transition-colors duration-700`}>{`Max works best with founders who value speed, clarity, and outcomes over pixel-perfect decks. If you're building something real, let's figure out how he can help.`}</p>
                      </div>
                      <div className="flex flex-wrap gap-[16px] items-start">
                        <div className="content-stretch flex gap-[2px] h-[28px] items-center justify-center px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag_special">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[8px] ${isDark ? "bg-[rgba(46,46,46,0.8)]" : "bg-[#ececf0]"} transition-colors duration-700`} />
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.09)] ${isDark ? "border-[rgba(255,255,255,0.03)]" : "border-[rgba(0,0,0,0.06)]"} transition-colors duration-700`} />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>Founding Designer</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[28px] items-center justify-center px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag_special">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[8px] ${isDark ? "bg-[rgba(46,46,46,0.8)]" : "bg-[#ececf0]"} transition-colors duration-700`} />
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.09)] ${isDark ? "border-[rgba(255,255,255,0.03)]" : "border-[rgba(0,0,0,0.06)]"} transition-colors duration-700`} />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>Design systems</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[28px] items-center justify-center px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag_special">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[8px] ${isDark ? "bg-[rgba(46,46,46,0.8)]" : "bg-[#ececf0]"} transition-colors duration-700`} />
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.09)] ${isDark ? "border-[rgba(255,255,255,0.03)]" : "border-[rgba(0,0,0,0.06)]"} transition-colors duration-700`} />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>Product Strategy</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[28px] items-center justify-center px-[6px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag_special">
                          <div aria-hidden="true" className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[8px] ${isDark ? "bg-[rgba(46,46,46,0.8)]" : "bg-[#ececf0]"} transition-colors duration-700`} />
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.09)] ${isDark ? "border-[rgba(255,255,255,0.03)]" : "border-[rgba(0,0,0,0.06)]"} transition-colors duration-700`} />
                          <div className="content-stretch flex gap-[2px] items-center justify-center px-[2px] relative shrink-0" data-name="Text_wrap_md">
                            <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>AI Integration</p>
                          </div>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`relative w-full min-w-0 flex-[1_0_0] ${isDark ? "bg-[#151515]" : "bg-[#f9f9fa]"} transition-colors duration-700`}>
                    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 border-l border-solid ${isDark ? "border-[rgba(255,255,255,0.12)]" : "border-[#0a0c11]/[0.08]"} transition-colors duration-700 max-lg:border-l-0`} />
                    <div className="flex h-auto w-full flex-col items-end">
                      <div className="relative flex h-auto w-full flex-col items-end p-[32px] md:p-8">
                        <ContactForm isDark={isDark} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${isDark ? "bg-[#f9f9fa]" : "bg-[#151515]"} transition-colors duration-700 h-[238px] relative shrink-0 w-full`}>
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] p-4 md:p-8 relative size-full">
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0">
                      <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative size-full">
                        <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] min-w-full relative shrink-0 ${isDark ? "text-[#5b616d]" : "text-white/64"} transition-colors duration-700 text-[13px] w-[min-content]`}>Skip the form</p>
                        <a
                          className={`decoration-[6.5%] decoration-dotted font-['Open_Sauce_Two:Regular',sans-serif] font-medium leading-[36px] min-w-full not-italic relative shrink-0 ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700 text-[25px] tracking-[-0.2px] underline w-[min-content] cursor-pointer transition-colors duration-200 ${isDark ? "hover:text-black" : "hover:text-white/80"}`}
                          href="mailto:hey@maxburlak.com"
                        >
                          hey@maxburlak.com
                        </a>
                        <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                          <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? "bg-black" : "bg-white"} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`} />
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                            <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`}>Grab 15 mins</p>
                            </div>
                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                              <div className="relative shrink-0 size-[18px]" data-name="icons / google meet">
                                <div className="absolute inset-[10%_0]" data-name="image 37">
                                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? "bg-[rgba(242,242,244,0.8)]" : "bg-[rgba(255,255,255,0.1)]"} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`} />
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                            <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Left_md">
                              <div className={`relative shrink-0 size-[18px] ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`} data-name="linkedin">
                                <div className="absolute inset-[12.5%]" data-name="vector">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                                    <path d={svgPaths.pbc58000} fill="currentColor" id="vector" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] whitespace-nowrap ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`}>Linkedin</p>
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[1000px] shrink-0" data-name="Button">
                            <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? "bg-[rgba(242,242,244,0.8)]" : "bg-[rgba(255,255,255,0.1)]"} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px]`} />
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                            <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Left_md">
                              <div className={`overflow-clip relative shrink-0 size-[18px] ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`} data-name="dribbble">
                                <div className="absolute inset-[8.33%]" data-name="vector">
                                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                    <path d={svgPaths.p1980ea00} fill="currentColor" id="vector" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] whitespace-nowrap ${isDark ? "text-[#0a0c11]" : "text-white"} transition-colors duration-700`}>dribbble.com</p>
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-[#f9f9fa]'} transition-colors duration-700 relative shrink-0 w-full`} data-name="Pro Blocks / Footer / 7.">
                <div aria-hidden="true" className={`absolute border-solid border-t inset-0 pointer-events-none transition-colors duration-700 ${isDark ? 'border-[rgba(255,255,255,0.08)]' : 'border-[rgba(0,0,0,0.12)]'}`} />
                <div className="flex flex-col items-center justify-end size-full">
                  <div className="content-stretch flex flex-col items-center justify-end px-[32px] py-[96px] relative size-full">
                    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.50fr)_minmax(0,0.50fr)] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Grid">
                      <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Column">
                        <p className="font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#8c929c] text-[25px] tracking-[-0.2px] w-full">2026</p>
                        <p className={`font-['Switzer_Variable:Medium',sans-serif] font-semibold leading-[44px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[42px] tracking-[-0.2px] w-full`}>maxburlak.com</p>
                        <p className={`font-['Switzer_Variable:Regular',sans-serif] font-light leading-[18px] relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`}>AI-driven product designer helping founders design experience, build systems and foundations.</p>
                        <SocialIconButtons isDark={isDark} />

                      </div>
                      <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Column">
                        <div className="content-stretch flex flex-col gap-[16px] items-start leading-[18px] p-[32px] relative size-full">
                          <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`}>Work</p>
                          <div className={`content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-light gap-[12px] items-start relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`} data-name="Flex Vertical">
                            <Link className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-white/64" : "text-[#5b616d]"}`} to="/works">Works</Link>
                            <Link className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-white/64" : "text-[#5b616d]"}`} to="/approach">Approach</Link>
                            <Link className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-white/64" : "text-[#5b616d]"}`} to="/ventures">Ventures</Link>
                            <Link className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-white/64" : "text-[#5b616d]"}`} to="/feed">Feed</Link>
                            <Link className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-white/64" : "text-[#5b616d]"}`} to="/playground">Playground</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Column">
                        <div className="content-stretch flex flex-col gap-[16px] items-start leading-[18px] p-[32px] relative size-full">
                          <p className={`font-['Switzer_Variable:Medium',sans-serif] font-medium relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] w-full`}>Connect</p>
                          <div className={`content-stretch flex flex-col font-['Switzer_Variable:Regular',sans-serif] font-light gap-[12px] items-start relative shrink-0 ${isDark ? 'text-white/64' : 'text-[#5b616d]'} transition-colors duration-700 text-[13px] w-full`} data-name="Flex Vertical">
                            <Link className={`relative shrink-0 w-full no-underline hover:underline ${isDark ? "text-white/64" : "text-[#5b616d]"}`} to="/about">About</Link>
                            <p className="relative shrink-0 w-full">Contact</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : pathname === "/playground" ? (
        <PlaygroundView isDark={isDark} />
      ) : (
        <TabEmptyState title={phTitle} isDark={isDark} />
      )}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="content-stretch flex items-center justify-between pointer-events-auto px-[12px] md:px-[20px] py-[10px] sticky top-0 w-full max-w-[2250px] mx-auto">
          {/* Logo */}
          <Link to="/" className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
            <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px] transition-all duration-200`} />
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
            <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 size-[28px]" data-name="Left_sm">
              <div className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
                  <img alt="" className="absolute h-[133.23%] left-0 max-w-none top-[-4.18%] w-full" src={imgImage} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_sm">
              <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[20px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[15px] whitespace-nowrap`}>Max Burlak</p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
          </Link>
          {/* Desktop action buttons */}
          <div className="hidden xl:flex content-stretch items-center relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[28px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg no-underline" data-name="Button">
                <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[28px] transition-all duration-200`} />
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.09)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]" />
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 text-[13px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>Book a call</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                  <div className="relative shrink-0 size-[18px]" data-name="icons / google meet">
                    <div className="absolute inset-[10%_0]" data-name="image 37">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
              </a>
              <a href={CONTACT_EMAIL_URL} className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 no-underline" data-name="Button">
                <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} transition-colors duration-700 inset-0 pointer-events-none rounded-[1000px] transition-all duration-200`} />
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]" />
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative shrink-0" data-name="Text_wrap_md">
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative shrink-0 ${isDark ? 'text-white' : 'text-[#0a0c11]'} transition-colors duration-700 text-[13px] whitespace-nowrap`}>Chat with me</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                  <div className="overflow-clip relative shrink-0 size-[18px]" data-name="filled=on, stroke=1, radius=0, join=round">
                    <div className="absolute inset-[20.83%_12.5%]" data-name="vector">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 10.5">
                        <path clipRule="evenodd" d={svgPaths.p42a1880} fill={isDark ? "#9CA3AF" : "#8C929C"} className="transition-colors duration-700" fillRule="evenodd" id="vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]" />
              </a>
              <div onClick={onThemeToggle} className="content-stretch flex gap-[2px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 size-[40px] cursor-pointer transition-all duration-700 hover:scale-105 hover:rotate-180" data-name="Button">
                <div aria-hidden="true" className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[1000px] transition-all duration-700 ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'}`} />
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] transition-all duration-700 ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-[rgba(0,0,0,0.06)]'}`} />
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Right_md">
                  <div className="overflow-clip relative shrink-0 size-[18px] transition-transform duration-700" data-name="filled=on, stroke=1, radius=0, join=round">
                    {isDark ? (
                      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
                        <path fill="#F4D03F" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    ) : (
                      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
                        <path fill="#8C929C" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] transition-all duration-700" />
              </div>
            </div>
          </div>
          {/* Responsive: theme toggle + burger for tablet/phone */}
          <div className="flex xl:hidden gap-[8px] items-center">
            <div onClick={onThemeToggle} className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[1000px] shrink-0 size-[40px] cursor-pointer" data-name="Button">
              <div aria-hidden="true" className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[1000px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'}`} />
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-[rgba(0,0,0,0.06)]'}`} />
              <div className="overflow-clip relative shrink-0 size-[18px]">
                {isDark ? (
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
                    <path fill="#F4D03F" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                ) : (
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
                    <path fill="#8C929C" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                  </svg>
                )}
              </div>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`relative flex items-center justify-center size-[40px] rounded-[1000px] cursor-pointer`}>
              <div aria-hidden="true" className={`absolute backdrop-blur-[12px] inset-0 pointer-events-none rounded-[1000px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'}`} />
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] ${isDark ? 'border-[rgba(255,255,255,0.1)]' : 'border-[rgba(0,0,0,0.06)]'}`} />
              <svg className="relative size-[18px]" fill="none" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path stroke={isDark ? "white" : "#0a0c11"} strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path stroke={isDark ? "white" : "#0a0c11"} strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop center nav */}
          <div className={`hidden xl:-translate-x-1/2 xl:-translate-y-1/2 xl:absolute backdrop-blur-[12px] xl:flex gap-[2px] items-center justify-center xl:left-1/2 p-[4px] rounded-[1000px] border xl:top-1/2 transition-all duration-700 ${isDark ? 'bg-[rgba(0,0,0,0.4)] shadow-[0px_4px_24px_rgba(0,0,0,0.3),inset_0px_1px_0px_rgba(255,255,255,0.1)] border-white/10' : 'bg-[rgba(255,255,255,0.15)] shadow-[0px_4px_24px_rgba(0,0,0,0.08),inset_0px_1px_0px_rgba(255,255,255,0.25)] border-white/20'}`} data-name="menu">
            {NAV_ROUTES.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `content-stretch flex h-[40px] items-center justify-center px-[12px] py-[4px] relative rounded-[24px] shrink-0 cursor-pointer transition-all duration-200 no-underline ${isActive ? (isDark ? "bg-[#2a2a2a]" : "bg-[#f9f9fa]") : isDark ? "hover:bg-[#2a2a2a]" : "hover:bg-[#f9f9fa]"}`
                }
              >
                <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[20px] relative shrink-0 ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700 text-[15px] whitespace-nowrap`}>{item.label}</p>
              </NavLink>
            ))}
          </div>
        </div>
        {/* Responsive menu overlay */}
        {menuOpen && (
          <div className={`xl:hidden pointer-events-auto fixed inset-0 top-[60px] z-50 backdrop-blur-[20px] ${isDark ? 'bg-[rgba(10,12,17,0.95)]' : 'bg-[rgba(255,255,255,0.95)]'}`}>
            <div className="flex flex-col gap-[4px] p-[20px]">
              {NAV_ROUTES.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex h-[48px] items-center px-[16px] rounded-[12px] cursor-pointer transition-all duration-200 no-underline ${isDark ? "hover:bg-[#2a2a2a]" : "hover:bg-[#f9f9fa]"}`}
                >
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[20px] ${isDark ? "text-white" : "text-[#0a0c11]"} text-[17px]`}>{item.label}</p>
                </Link>
              ))}
              <div className="h-px my-[12px] bg-[rgba(0,0,0,0.06)]" />
              <div className="flex gap-[10px]">
                <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[4px] relative rounded-[28px] flex-1 cursor-pointer no-underline" data-name="Button">
                  <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-white' : 'bg-black'} inset-0 pointer-events-none rounded-[28px]`} />
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative text-[14px] ${isDark ? 'text-[#0a0c11]' : 'text-white'} whitespace-nowrap`}>Book a call</p>
                  <div className="relative shrink-0 size-[18px]">
                    <div className="absolute inset-[10%_0]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" />
                </a>
                <a href={CONTACT_EMAIL_URL} className="content-stretch flex gap-[4px] h-[44px] items-center justify-center px-[16px] py-[4px] relative rounded-[1000px] flex-1 cursor-pointer no-underline">
                  <div aria-hidden="true" className={`absolute backdrop-blur-[12px] ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(242,242,244,0.8)]'} inset-0 pointer-events-none rounded-[1000px]`} />
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                  <p className={`font-['Switzer_Variable:Regular',sans-serif] font-medium leading-[18px] relative ${isDark ? 'text-white' : 'text-[#0a0c11]'} text-[14px] whitespace-nowrap`}>Chat with me</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
