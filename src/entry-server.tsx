/**
 * Prerender entry (build only). Renders a route to static HTML so crawlers,
 * AI bots and link previews get real content, and visitors see it before JS runs.
 */
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router";
import { AppShell } from "./app/App";
import { preloadRoute } from "./app/routeModules";

export async function render(url: string): Promise<string> {
  await preloadRoute(url);
  const { prelude } = await prerenderToNodeStream(
    <AppShell router={(children) => <StaticRouter location={url}>{children}</StaticRouter>} />,
  );
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8");
}
