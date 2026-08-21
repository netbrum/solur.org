<script lang="ts">
  import SvelteMarkdown from "@humanspeak/svelte-markdown";

  let { data } = $props();

  let news = $derived(data.news);
</script>

<div class="mx-auto my-24 prose w-full max-w-4xl px-4 prose-invert">
  <h1>{news.title}</h1>
  <SvelteMarkdown source={news.content} />
  <span class="text-sm"
    >{new Date(news.published_at).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    })}</span
  >
</div>
