import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { initAnalytics } from "./analytics/posthog";
import { preloadRoute } from "./app/routeModules";
import "./styles/index.css";
import "./styles/mobile.css";

const container = document.getElementById("root")!;

// Prerendered HTML is already on screen. Load the current route's chunk first so
// React replaces it with identical markup instead of a loading fallback.
preloadRoute(window.location.pathname).finally(() => {
  createRoot(container).render(<App />);
  initAnalytics();
});
