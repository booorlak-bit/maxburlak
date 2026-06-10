import { BrowserRouter } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import { SeoManager } from "../components/SeoManager";
import MainV from "../imports/MainV2";
import { CmsProvider } from "../sanity/CmsProvider";
import { useTheme } from "./useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-[100dvh] min-h-screen overflow-x-clip transition-colors duration-700 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
      <BrowserRouter>
        <CmsProvider>
          <SeoManager />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#0a0c11] focus:shadow-lg"
          >
            Skip to main content
          </a>
          <MainV isDark={isDark} onThemeToggle={toggleTheme} />
        </CmsProvider>
      </BrowserRouter>
      <Analytics />
      <style>{`
        /* Full-width page shell */
        [data-name="Main V2"] > main > [data-layout="full-width"] {
          height: auto !important;
          min-height: calc(100vh - 60px) !important;
          position: relative !important;
          width: 100% !important;
        }

        [data-name="Main V2"] > main > [data-layout="full-width"] > div {
          height: auto !important;
          flex: 1 !important;
          min-width: 0 !important;
          width: 100% !important;
        }

        /* CMS section order (homepage main column only) */
        [data-name="Main V2"] > main > [data-layout="full-width"][data-route="index"] > div > div {
          display: flex !important;
          flex-direction: column !important;
        }

        /* Playground — lock to viewport, no page scroll */
        [data-name="Main V2"][data-playground-shell="true"] {
          height: 100vh !important;
          max-height: 100vh !important;
          overflow: hidden !important;
        }

        @supports (height: 100dvh) {
          [data-name="Main V2"][data-playground-shell="true"] {
            height: 100dvh !important;
            max-height: 100dvh !important;
          }
        }

        [data-name="Main V2"][data-playground-shell="true"] > main {
          flex: 1 1 auto !important;
          min-height: 0 !important;
          overflow: hidden !important;
        }

        [data-name="Main V2"] > main > [data-route="playground"] {
          height: 100% !important;
          min-height: 0 !important;
          flex: 1 1 auto !important;
          overflow: hidden !important;
        }

        html:has([data-playground-shell="true"]),
        body:has([data-playground-shell="true"]) {
          overflow: hidden !important;
          height: 100% !important;
        }

        [data-name="Main V2"] > header {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 1000 !important;
          margin: 0 !important;
          width: 100% !important;
        }
      `}</style>
    </div>
  );
}
