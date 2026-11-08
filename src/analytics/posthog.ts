/**
 * Deferred PostHog.
 *
 * posthog-js is ~60 KB of JS that nothing on the first paint needs. It is
 * loaded with a dynamic import once the browser is idle; events captured
 * before that are queued and flushed when it arrives.
 */
type Props = Record<string, unknown>;
type PostHogLike = { capture: (event: string, props?: Props) => void };

const queue: Array<[string, Props | undefined]> = [];
let client: PostHogLike | null = null;
let started = false;

function capture(event: string, props?: Props) {
  if (client) client.capture(event, props);
  else queue.push([event, props]);
}

const facade: PostHogLike = { capture };

/** Hostname fragments of AI assistants and answer engines that send visitors. */
const AI_SOURCES: Array<[match: string, name: string]> = [
  ["chatgpt.com", "chatgpt"],
  ["chat.openai.com", "chatgpt"],
  ["perplexity.ai", "perplexity"],
  ["claude.ai", "claude"],
  ["gemini.google.com", "gemini"],
  ["copilot.microsoft.com", "copilot"],
  ["bing.com/chat", "copilot"],
  ["chat.deepseek.com", "deepseek"],
  ["grok.com", "grok"],
  ["you.com", "you"],
  ["phind.com", "phind"],
  ["meta.ai", "meta-ai"],
  ["mistral.ai", "mistral"],
];

/**
 * Detects a visit that came from an AI assistant (by referrer or the
 * utm_source ChatGPT and Perplexity append) and records it once per session.
 */
function trackAiReferral() {
  try {
    const params = new URLSearchParams(window.location.search);
    const haystack = `${document.referrer} ${params.get("utm_source") ?? ""}`.toLowerCase();
    const hit = AI_SOURCES.find(([match]) => haystack.includes(match));
    if (!hit || sessionStorage.getItem("ai_referral_tracked")) return;
    sessionStorage.setItem("ai_referral_tracked", "1");
    capture("ai_referral", {
      ai_source: hit[1],
      referrer: document.referrer || null,
      utm_source: params.get("utm_source"),
      landing_path: window.location.pathname,
    });
  } catch {
    // sessionStorage can throw in private mode; tracking is best-effort.
  }
}

export function initAnalytics() {
  if (started || typeof window === "undefined") return;
  started = true;
  trackAiReferral();

  const token = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;
  if (!token || !host) {
    if (import.meta.env.DEV) {
      console.warn("[analytics] VITE_PUBLIC_POSTHOG_PROJECT_TOKEN / VITE_PUBLIC_POSTHOG_HOST not set; events are dropped.");
    }
    return;
  }

  const load = () => {
    import("posthog-js")
      .then(({ default: posthog }) => {
        posthog.init(token, { api_host: host, defaults: "2026-01-30" });
        client = posthog;
        for (const [event, props] of queue.splice(0)) posthog.capture(event, props);
      })
      .catch((error) => console.warn("[analytics] PostHog failed to load", error));
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(load, { timeout: 4000 });
  } else {
    setTimeout(load, 2500);
  }
}

/** Drop-in replacement for `usePostHog()` from @posthog/react. */
export function usePostHog(): PostHogLike {
  return facade;
}
