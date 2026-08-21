<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import banner from "$lib/assets/banner.png";
  import NewsletterPreview from "$lib/components/newsletter-preview.svelte";

  let { data } = $props();

  let minecraft = $derived(data.minecraft);
</script>

<img
  src={banner}
  alt="banner featuring multiple minecraft screenshots"
  class="brightness-40 select-none"
/>

<section class="grow bg-white px-4 py-16 text-black">
  <div class="mx-auto prose w-full max-w-4xl">
    <h1 class="mb-0!">Solur</h1>
    <p>
      This is a laid-back, long term Minecraft project that focuses on the nostalgia you get by
      having the same world for many years. The concept is simple: you can jump back in anytime you
      want, whether that's daily or just once a year!
    </p>
    <p>The server is not open to the public and it likely never will be.</p>
  </div>
</section>

<section class="px-4 py-16">
  <div class="mx-auto prose w-full max-w-4xl prose-invert">
    <h2>Newsletter</h2>
    <div class="grid-col-1 grid gap-16 md:grid-cols-2">
      {#each data.news as news (news.id)}
        <NewsletterPreview {...news} />
      {/each}
    </div>
  </div>
</section>

<section class="bg-emerald-800 px-4 py-16 text-white">
  <div
    class="mx-auto prose-xl grid w-full max-w-4xl grid-cols-1 place-items-center items-start md:grid-cols-2"
  >
    <div>
      <h3 class="mb-0!">
        Minecraft
        <span class="text-lg">v{minecraft.version}</span>
      </h3>
      <div>
        {@html minecraft.motd.html[0]}
      </div>
      <p>
        <span class="font-semibold">
          {minecraft.players.online}
        </span>
        players online
      </p>
    </div>
    <div>
      <h3 class="mb-0!">Mods</h3>
      <ul class="text-base [&>li>a]:underline">
        <li>
          <a target="_blank" href="https://modrinth.com/mod/9dzLWnmZ">Camerapture</a> by chrrrs
        </li>
        <li>
          <a target="_blank" href="https://modrinth.com/mod/BITzwT7B">ClickVillagers</a> by Clickism
        </li>
        <li>
          <a target="_blank" href="https://modrinth.com/mod/LOpKHB2A">Waystones</a> by BlayTheNinth
        </li>
        <li>
          <a target="_blank" href="https://modrinth.com/mod/P7dR8mSH">Fabric API</a> by FabricMC
        </li>
      </ul>
    </div>
  </div>
</section>
