import { Link } from "react-router";

type TabEmptyStateProps = {
  title: string;
  isDark: boolean;
};

export function TabEmptyState({ title, isDark }: TabEmptyStateProps) {
  return (
    <div
      className={`flex min-h-[calc(100svh-140px)] w-full flex-col items-center justify-center px-[24px] pb-[100px] pt-[32px] text-center ${isDark ? "text-white/72" : "text-[#5b616d]"}`}
    >
      <h1
        className={`mb-3 max-w-[520px] font-['Switzer_Variable:Regular',sans-serif] text-[clamp(22px,3vw,30px)] font-medium tracking-[-0.3px] ${isDark ? "text-white" : "text-[#0a0c11]"}`}
      >
        {title}
      </h1>
      <p className="mb-10 max-w-md font-['Switzer_Variable:Regular',sans-serif] text-[15px] leading-[1.5]">
        Nothing here yet — this page is a placeholder while the section is being built.
      </p>
      <div
        className={`mx-auto mb-6 flex h-[120px] w-full max-w-[320px] flex-col items-center justify-center rounded-[20px] border border-dashed ${isDark ? "border-white/15 bg-[#141414]" : "border-[#0a0c11]/12 bg-[#f9f9fa]"}`}
      >
        <span className={`text-[13px] font-['Switzer_Variable:Regular',sans-serif] ${isDark ? "text-gray-500" : "text-[#8c929c]"}`}>
          Empty state
        </span>
      </div>
      <Link
        to="/"
        className={`rounded-[1000px] px-6 py-2.5 font-['Switzer_Variable:Regular',sans-serif] text-[14px] font-medium transition-opacity duration-200 hover:opacity-90 ${isDark ? "bg-white text-[#0a0c11]" : "bg-[#0a0c11] text-white"}`}
      >
        Back to Index
      </Link>
    </div>
  );
}
