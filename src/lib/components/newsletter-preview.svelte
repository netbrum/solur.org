<script lang="ts">
  import { resolve } from "$app/paths";

  interface Props {
    id: string;
    title: string;
    preview: string;
    published_at: string;
  }

  let { id, title, preview, published_at }: Props = $props();
</script>

<article class="prose prose-invert">
  <header class="flex items-center justify-between">
    <h4 class="my-0!">{title}</h4>
    <span class="text-xs"
      >{new Date(published_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })}</span
    >
  </header>
  <p class="text-sm">
    {preview}...
  </p>
  <footer class="text-sm">
    <a href={resolve(`/newsletter/${id}`)}> Read more </a>
  </footer>
</article>
