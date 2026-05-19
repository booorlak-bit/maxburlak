import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function prefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readIsDark(): boolean {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return prefersDark();
}

function applyDocumentTheme(isDark: boolean) {
  const root = document.documentElement;
  const bg = isDark ? "#0a0a0a" : "#ffffff";

  root.classList.toggle("dark", isDark);
  root.dataset.theme = isDark ? "dark" : "light";
  root.style.colorScheme = isDark ? "dark" : "light";
  root.style.backgroundColor = bg;

  document.body.style.backgroundColor = bg;

  const appRoot = document.getElementById("root");
  if (appRoot) {
    appRoot.style.backgroundColor = bg;
  }

  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", bg);
}

export function useTheme() {
  const [isDark, setIsDark] = useState(readIsDark);

  useEffect(() => {
    applyDocumentTheme(isDark);
  }, [isDark]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const onSystemChange = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setIsDark(mq.matches);
      }
    };

    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      return next;
    });
  }, []);

  return { isDark, toggleTheme };
}
