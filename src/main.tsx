
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./styles/mobile.css";

import posthog from "posthog-js";
import { PostHogErrorBoundary, PostHogProvider } from "@posthog/react";

const phToken = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
const phHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

if (phToken && phHost) {
  posthog.init(phToken, {
    api_host: phHost,
    defaults: "2026-01-30",
  });
} else if (import.meta.env.DEV) {
  if (!phToken) {
    console.error(
      "VITE_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_PUBLIC_POSTHOG_PROJECT_TOKEN is configured",
    );
  }
  if (!phHost) {
    console.error(
      "VITE_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_PUBLIC_POSTHOG_HOST is configured",
    );
  }
}

createRoot(document.getElementById("root")!).render(
  <PostHogProvider client={posthog}>
    <PostHogErrorBoundary>
      <App />
    </PostHogErrorBoundary>
  </PostHogProvider>,
);
