<script lang="ts">
  import { firstMarkdownImage } from "$lib/utils.js";
  import SvelteMarkdown from "@humanspeak/svelte-markdown";

  let { data } = $props();

  let news = $derived(data.news);

  let firstImage = $derived(firstMarkdownImage(data.news.content));
</script>

<svelte:head>
  <title>{news.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Solur" />
  <meta property="og:title" content={news.title} />
  <meta property="og:description" content={news.preview} />
  <meta property="og:url" content={`https://solur.org/newsletter/${news.id}`} />
  <meta property="article:published_time" content={new Date(news.published_at).toISOString()} />
  {#if firstImage}
    <meta property="og:image" content={`https://solur.org${firstImage.src}`} />
    <meta property="og:image:alt" content={firstImage.alt} />
  {/if}
</svelte:head>

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
