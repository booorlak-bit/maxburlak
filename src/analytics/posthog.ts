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

export function initAnalytics() {
  if (started || typeof window === "undefined") return;
  started = true;

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
