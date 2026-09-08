import { db } from "$lib/server/database";
import type { Screenshot } from "$lib/types";

export async function load() {
  const screenshots = db
    .prepare("SELECT id, path, description, taken_at FROM gallery ORDER BY taken_at DESC;")
    .all() as Screenshot[];

  return {
    screenshots
  };
}
