import { type FormEvent, useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePostHog } from "@posthog/react";
import { DEFAULT_FORM_ID } from "../integrations/default";
import svgPaths from "../imports/svg-j4zqqnzmwo";

const THANK_YOU_DURATION_MS = 10_000;
const SUCCESS_GREEN = "#54cfa4";
const PANEL_BG = { dark: "#151515", light: "#f9f9fa" } as const;

const LOOKING_FOR_OPTIONS = [
  "Product design",
  "Design systems",
  "AI integration",
  "Founding designer role",
  "Consulting / advisory",
  "Other",
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;
const fadeTransition = { duration: 0.55, ease: easeOut } as const;
const fieldStagger = 0.07;

type ContactFormProps = {
  isDark?: boolean;
};

function fieldClass(isDark: boolean) {
  return `font-['Switzer_Variable:Regular',sans-serif] w-full min-h-[40px] rounded-[10px] border border-solid px-[14px] py-[8px] text-[13px] font-medium leading-[18px] outline-none transition-colors duration-700 focus-visible:ring-2 ${
    isDark
      ? "border-[rgba(255,255,255,0.06)] bg-[#1a1a1a] text-white placeholder:text-[#b8bcc4] focus-visible:ring-white/20"
      : "border-[rgba(0,0,0,0.06)] bg-white text-[#0a0c11] placeholder:text-[#5b616d] focus-visible:ring-[#0a0c11]/10"
  }`;
}

function labelClass(isDark: boolean) {
  return `font-['Switzer_Variable:Regular',sans-serif] font-medium text-[13px] leading-[18px] ${
    isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"
  } transition-colors duration-700`;
}

function SuccessCheckmark({ isDark }: { isDark: boolean }) {
  const checkColor = isDark ? PANEL_BG.dark : PANEL_BG.light;

  return (
    <motion.div
      aria-hidden
      className="relative flex size-[72px] shrink-0 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(84,207,164,0.35)]"
      initial={{ scale: 0.35, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.08 }}
      style={{ backgroundColor: SUCCESS_GREEN }}
    >
      <motion.svg
        className="size-9"
        fill="none"
        viewBox="0 0 36 36"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.18 }}
      >
        <motion.path
          d="M10 18.5 15.2 23.5 26 12.5"
          stroke={checkColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.25}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease: easeOut, delay: 0.32 }}
        />
      </motion.svg>
    </motion.div>
  );
}

function ThankYouState({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      key="thank-you"
      className="flex min-h-[420px] w-full flex-col items-center justify-center gap-5 text-center"
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14, scale: 0.97 }}
      transition={fadeTransition}
    >
      <SuccessCheckmark isDark={isDark} />
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.38 }}
      >
        <p
          className={`font-['Switzer_Variable:Regular',sans-serif] text-[clamp(22px,3vw,28px)] font-medium tracking-[-0.3px] ${
            isDark ? "text-white" : "text-[#0a0c11]"
          } transition-colors duration-700`}
        >
          Your request has been sent!
        </p>
        <p
          className={`max-w-[320px] font-['Switzer_Variable:Regular',sans-serif] text-[15px] leading-[1.5] ${
            isDark ? "text-[#b8bcc4]" : "text-[#5b616d]"
          } transition-colors duration-700`}
        >
          Thank you — we&apos;ll be in touch soon.
        </p>
      </motion.div>
    </motion.div>
  );
}

/** Bottom-of-page contact form — submissions go to Default.com. */
export function ContactForm({ isDark = false }: ContactFormProps) {
  const id = useId();
  const posthog = usePostHog();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (!showThankYou) return;

    const timer = window.setTimeout(() => {
      setShowThankYou(false);
      setName("");
      setEmail("");
      setLookingFor("");
      setMessage("");
    }, THANK_YOU_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [showThankYou]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    posthog?.capture("contact_form_submitted", {
      inquiry_type: lookingFor,
    });
    setShowThankYou(true);
  };

  return (
    <form
      className="relative flex min-h-[420px] w-full flex-col items-end gap-4"
      data-default-form-id={String(DEFAULT_FORM_ID)}
      data-name="Contact form"
      onSubmit={handleSubmit}
    >
      <AnimatePresence mode="wait" initial={false}>
        {showThankYou ? (
          <ThankYouState isDark={isDark} />
        ) : (
          <motion.div
            key="contact-fields"
            className="flex w-full flex-col items-end gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={fadeTransition}
          >
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full flex-col gap-1">
                <label className={labelClass(isDark)} htmlFor={`${id}-name`}>
                  Name
                </label>
                <input
                  autoComplete="name"
                  className={fieldClass(isDark)}
                  id={`${id}-name`}
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  type="text"
                  value={name}
                />
              </div>

              <motion.div className="flex w-full flex-col gap-1">
                <label className={labelClass(isDark)} htmlFor={`${id}-email`}>
                  Email
                </label>
                <input
                  autoComplete="email"
                  className={fieldClass(isDark)}
                  id={`${id}-email`}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  required
                  type="email"
                  value={email}
                />
              </motion.div>

              <motion.div
                className="flex w-full flex-col gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...fadeTransition, delay: fieldStagger * 2 }}
              >
                <label className={labelClass(isDark)} htmlFor={`${id}-looking-for`}>
                  What are you looking for?
                </label>
                <div className="relative w-full">
                  <select
                    className={`${fieldClass(isDark)} cursor-pointer appearance-none bg-none pr-[34px] [-webkit-appearance:none] [background-image:none]`}
                    id={`${id}-looking-for`}
                    name="lookingFor"
                    onChange={(event) => setLookingFor(event.target.value)}
                    required
                    value={lookingFor}
                  >
                    <option disabled value="">
                      Select an option
                    </option>
                    {LOOKING_FOR_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-[12px] top-1/2 flex size-[18px] -translate-y-1/2 items-center justify-center"
                  >
                    <svg
                      className="block h-[6.75px] w-[10.5px] shrink-0"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 10.5 6.75"
                      aria-hidden
                    >
                      <path
                        d={svgPaths.p380d8d00}
                        fill={isDark ? "white" : "#0a0c11"}
                        fillOpacity="0.48"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <div className="flex w-full flex-col gap-1">
                <label className={labelClass(isDark)} htmlFor={`${id}-message`}>
                  What&apos;s the situation?
                </label>
                <textarea
                  className={`${fieldClass(isDark)} min-h-[139px] resize-y py-[10px]`}
                  id={`${id}-message`}
                  name="message"
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="What's the challenge? What outcomes are you hoping for?"
                  required
                  value={message}
                />
              </div>
              </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fadeTransition, delay: fieldStagger * 4 }}
              aria-label="Send message"
              className="relative h-[48px] w-full cursor-pointer rounded-[1000px] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              data-name="Button"
              type="submit"
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute inset-0 rounded-[1000px] backdrop-blur-[12px] transition-colors duration-700 ${
                  isDark ? "bg-[#1a1a1a]" : "bg-white"
                }`}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[1000px] border border-[rgba(0,0,0,0.12)] border-solid shadow-[0px_1px_1px_0px_rgba(0,0,0,0.09)]"
              />
              <span className="relative flex h-full w-full items-center justify-center px-3">
                <span
                  className={`font-['Switzer_Variable:Regular',sans-serif] text-[15px] font-medium leading-[20px] whitespace-nowrap ${
                    isDark ? "text-white" : "text-[#0a0c11]"
                  } transition-colors duration-700`}
                >
                  Send message
                </span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
