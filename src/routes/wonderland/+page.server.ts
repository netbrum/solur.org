import { error } from "@sveltejs/kit";

export async function load(event) {
  const wonderland = event.cookies.get("wonderland");

  if (wonderland === "true") {
    return error(404);
  }

  event.cookies.set("wonderland", "true", { path: "/" });
}
