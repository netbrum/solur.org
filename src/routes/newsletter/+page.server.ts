import { db } from "$lib/server/database";
import type { NewsPreview } from "$lib/types";

export async function load() {
  const news = db
    .prepare("SELECT id, title, preview, published_at FROM newsletter ORDER BY published_at DESC;")
    .all() as NewsPreview[];

  return {
    news
  };
}
