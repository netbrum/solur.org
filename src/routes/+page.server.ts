import { MINECRAFT_HOST } from "$lib/consts";
import { db } from "$lib/server/database";
import type { Minecraft, NewsPreview } from "$lib/types";

export async function load() {
  const response = await fetch(`https://api.mcsrvstat.us/3/${MINECRAFT_HOST}`);
  const minecraft: Minecraft = await response.json();

  const news = db
    .prepare(
      "SELECT id, title, preview, published_at FROM newsletter ORDER BY published_at DESC LIMIT 2;"
    )
    .all() as NewsPreview[];

  return {
    minecraft,
    news
  };
}
