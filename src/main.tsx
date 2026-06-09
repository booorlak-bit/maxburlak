
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./styles/mobile.css";

  document.getElementById("seo-prerender")?.remove();

  createRoot(document.getElementById("root")!).render(<App />);
  