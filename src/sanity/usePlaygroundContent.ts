import { useMemo } from "react";
import type { PlaygroundContent } from "../playground/playgroundTypes";
import { usePlaygroundPageCms } from "./CmsProvider";
import { mapPlaygroundItems } from "./mapPlaygroundItems";

export function usePlaygroundContent(): PlaygroundContent {
  const playgroundPage = usePlaygroundPageCms();

  return useMemo(() => {
    const items = mapPlaygroundItems(playgroundPage?.items);
    return {
      items,
      fromCms: items.length > 0,
    };
  }, [playgroundPage]);
}
