import { useEffect, useState, type ReactNode } from "react";

export const CV_HREF = "/max-burlak-resume.pdf";
export const CV_FILENAME = "max-burlak-resume.pdf";

function CvPillButton({
  children,
  className = "",
  isDark,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  isDark: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-flex h-11 min-h-[44px] shrink-0 cursor-pointer items-center justify-center gap-[8px] rounded-[1000px] px-[10px] py-[4px] border-0 transition-all duration-200 hover:scale-105 ${isDark ? "text-white" : "text-[#0a0c11]"} ${className}`}
      data-name="Button"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] ${isDark ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(242,242,244,0.8)]"} transition-colors duration-700`}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-[rgba(0,0,0,0.06)] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]"
      />
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]" aria-hidden />
    </button>
  );
}

function CvViewerModal({
  isDark,
  onClose,
}: {
  isDark: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const labelClass = `font-['Switzer_Variable:Regular',sans-serif] text-[13px] font-medium leading-[18px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`;

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="CV preview"
    >
      <button
        type="button"
        aria-label="Close CV preview"
        className={`absolute inset-0 border-0 ${isDark ? "bg-[rgba(10,10,10,0.82)]" : "bg-[rgba(255,255,255,0.82)]"} backdrop-blur-[12px]`}
        onClick={onClose}
      />
      <div
        className={`relative z-[1] flex h-[min(92vh,900px)] w-full max-w-[960px] flex-col overflow-hidden rounded-[20px] border border-solid shadow-[0px_24px_80px_rgba(0,0,0,0.18)] ${isDark ? "border-white/10 bg-[#151515]" : "border-[rgba(0,0,0,0.08)] bg-white"} transition-colors duration-700`}
      >
        <div
          className={`flex shrink-0 items-center justify-between gap-3 border-b border-solid px-4 py-3 md:px-5 ${isDark ? "border-white/10" : "border-[rgba(0,0,0,0.08)]"}`}
        >
          <p className={`font-['Switzer_Variable:Regular',sans-serif] text-[15px] font-medium ${isDark ? "text-white" : "text-[#0a0c11]"}`}>
            Max Burlak — CV
          </p>
          <div className="flex items-center gap-2">
            <a
              href={CV_HREF}
              download={CV_FILENAME}
              className={`relative inline-flex h-[36px] items-center justify-center rounded-[1000px] px-3 no-underline transition-colors duration-200 ${isDark ? "bg-white text-[#0a0c11] hover:bg-white/90" : "bg-[#0a0c11] text-white hover:bg-black"}`}
            >
              <span className={labelClass}>Download</span>
            </a>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className={`inline-flex size-[36px] items-center justify-center rounded-full border-0 transition-colors duration-200 ${isDark ? "bg-white/10 text-white hover:bg-white/15" : "bg-[#f2f2f4] text-[#0a0c11] hover:bg-[#ececf0]"}`}
            >
              <svg className="size-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
        <iframe
          title="Max Burlak CV"
          src={`${CV_HREF}#view=FitH`}
          className="min-h-0 flex-1 w-full border-0 bg-[#525659]"
        />
      </div>
    </div>
  );
}

export function CvViewerButton({ isDark }: { isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const labelClass = `font-['Switzer_Variable:Regular',sans-serif] text-[13px] font-medium leading-[18px] whitespace-nowrap ${isDark ? "text-white" : "text-[#0a0c11]"} transition-colors duration-700`;

  return (
    <>
      <CvPillButton isDark={isDark} onClick={() => setIsOpen(true)}>
        <span className="relative flex items-center justify-center gap-[4px] px-[4px]">
          <span className={labelClass}>View CV</span>
        </span>
        <span className="relative flex size-[18px] shrink-0 items-center justify-center" aria-hidden>
          <svg className="block size-full" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.25 2.25H5.25A1.5 1.5 0 003.75 3.75v10.5A1.5 1.5 0 005.25 15.75h7.5a1.5 1.5 0 001.5-1.5V6.75L11.25 2.25z"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M11.25 2.25V6.75h3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </CvPillButton>
      {isOpen ? <CvViewerModal isDark={isDark} onClose={() => setIsOpen(false)} /> : null}
    </>
  );
}
