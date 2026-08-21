<script lang="ts">
  import NewsletterPreview from "$lib/components/newsletter-preview.svelte";

  let { data } = $props();
</script>

<section class="grow px-4 py-16">
  <div class="mx-auto prose w-full max-w-4xl prose-invert">
    <h2 class="text-center">Newsletter</h2>
    <div class="grid-col-1 grid gap-16 md:grid-cols-2">
      {#each data.news as news (news.id)}
        <NewsletterPreview {...news} />
      {/each}
    </div>
  </div>
</section>
