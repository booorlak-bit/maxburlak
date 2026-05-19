import { BrowserRouter, Routes, Route } from "react-router";
import { SeoManager } from "../components/SeoManager";
import MainV from "../imports/MainV2";
import { useTheme } from "./useTheme";

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-[100dvh] min-h-screen overflow-x-clip transition-colors duration-700 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
      <BrowserRouter>
        <SeoManager />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#0a0c11] focus:shadow-lg"
        >
          Skip to main content
        </a>
        <MainV isDark={isDark} onThemeToggle={toggleTheme} />
      </BrowserRouter>
      <style>{`
        /* Main content wrapper (index layout only — not playground tab) */
        [data-name="Main V2"] > main > [data-route="index"] {
          height: auto !important;
          min-height: calc(100vh - 60px) !important;
          position: relative !important;
        }

        /* Left sidebar: desktop — sticky rail, no nested scroll (page scroll only) */
        @media (min-width: 1024px) {
          [data-name="Main V2"] > main > [data-route="index"] > div:first-child > div {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
            min-height: calc(100svh - 84px) !important;
          }

          [data-name="Main V2"] > main > [data-route="index"] > div:first-child {
            position: sticky !important;
            top: 84px !important;
            overflow-x: hidden !important;
            z-index: 10 !important;
            align-self: flex-start !important;
          }
        }

        /* Right content area */
        [data-name="Main V2"] > main > [data-route="index"] > div:nth-child(2) {
          height: auto !important;
          flex: 1 !important;
          min-width: 0 !important;
        }

        /* Playground tab — fill viewport below fixed header + page padding */
        [data-name="Main V2"] > main > [data-route="playground"] {
          height: calc(100svh - 70px) !important;
          min-height: calc(100svh - 70px) !important;
        }

        @supports (height: 100dvh) {
          [data-name="Main V2"] > main > [data-route="playground"] {
            height: calc(100dvh - 70px) !important;
            min-height: calc(100dvh - 70px) !important;
          }
        }

        /* Fixed header spanning full width */
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
