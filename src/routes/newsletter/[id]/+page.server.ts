import { db } from "$lib/server/database";
import type { News } from "$lib/types";

export async function load(event) {
  const news = db
    .prepare("SELECT id, title, content, published_at FROM newsletter WHERE id = ?;")
    .get(event.params.id) as News;

  return {
    news
  };
}
