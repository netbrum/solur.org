<script lang="ts">
  import { resolve } from "$app/paths";
  import wave from "$lib/assets/chibi-netbrum-1024-wave.gif";
  import vine from "$lib/assets/vine.png";
  import bee from "$lib/assets/bee.gif";
  import NewsletterPreview from "$lib/components/newsletter-preview.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Solur</title>
  <meta
    name="description"
    content="This is a laid-back, long term Minecraft project that focuses on the nostalgia you get by having the same world for many years"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Solur" />
  <meta property="og:title" content="Solur" />
  <meta
    property="og:description"
    content="This is a laid-back, long term Minecraft project that focuses on the nostalgia you get by having the same world for many years"
  />
  <meta property="og:url" content="https://solur.org" />
  <meta property="og:image" content="https://solur.org/ogbanner.avif" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="relative">
  {#if !data.wonderland}
    <a
      class="absolute top-[18%] left-[16%] z-50 size-2"
      href={resolve("/wonderland")}
      aria-label="wonderland"
    ></a>
  {/if}
  <img
    src="/banner.avif"
    alt="Banner featuring multiple minecraft screenshots"
    class="brightness-40 select-none"
    fetchpriority="high"
  />
  <img
    src={wave}
    alt="Chibi character waving"
    class="absolute bottom-0 left-0 z-100 size-32 translate-y-1/3 md:size-64"
  />
</div>

<section class="relative grow bg-white px-4 py-16 text-black">
  <div class="hidden xl:block">
    <img src={vine} alt="Vine" class="absolute top-0 left-13 z-50" />
    <img src={vine} alt="Vine" class="absolute top-32 left-13 z-50" />
    <img src={vine} alt="Vine" class="absolute top-64 left-13 z-50" />
    <img src={vine} alt="Vine" class="absolute top-96 left-13 z-50" />
    <img src={vine} alt="Vine" class="absolute top-128 left-13 z-50" />
    <img src={vine} alt="Vine" class="absolute top-160 left-13 z-50" />
  </div>
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

<section class="relative bg-emerald-800 px-4 py-16 text-white">
  <img
    src={bee}
    alt="Bee flying around"
    class="pointer-events-none absolute top-0 right-15 -translate-y-1/2"
  />
  <div
    class="mx-auto prose-xl grid w-full max-w-4xl grid-cols-1 place-items-center items-start md:grid-cols-2"
  >
    <div>
      {#await data.minecraft}
        <h3 class="mb-0!">Minecraft</h3>
        <p>Loading...</p>
      {:then minecraft}
        {#if minecraft.online}
          <h3 class="mb-0!">
            Minecraft
            <span class="text-lg">v{minecraft.version}</span>
          </h3>
          <div>
            <p>
              <span class="font-semibold">
                {minecraft.players.online}
              </span>
              players online
            </p>
            {#if minecraft.players.list}
              <div class="grid grid-cols-5 gap-2">
                {#each minecraft.players.list as player (player.uuid)}
                  <img
                    class="m-0! size-8"
                    src={`https://mc-heads.net/avatar/${player.uuid}`}
                    alt={`${player.name} head`}
                  />
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <h3 class="mb-0!">Minecraft</h3>
          <p>Server offline Σ(°ロ°)</p>
        {/if}
      {:catch}
        <h3 class="mb-0!">Minecraft</h3>
        <p>Error loading server information</p>
      {/await}
    </div>
    <div>
      <h3 class="mb-0!">Mods*</h3>
      <ul class="text-base [&>li>a]:underline">
        <li>
          <a target="_blank" href="https://modrinth.com/mod/P7dR8mSH">Fabric API</a> [0.161.0+26.2] by
          FabricMC
        </li>
        <li>
          <a target="_blank" href="https://modrinth.com/mod/9dzLWnmZ">Camerapture</a> [1.10.15] by chrrrs
        </li>
        <li>
          <a target="_blank" href="https://modrinth.com/mod/BITzwT7B">ClickVillagers</a> [1.6.7+26.2-fabric]
          by Clickism
        </li>
        <li>
          <a target="_blank" href="https://modrinth.com/mod/YOs4tZea">Joy of Painting</a> [26.2-1.0.0]
          by xerca
        </li>
        <li>
          <a target="_blank" href="https://modrinth.com/mod/LOpKHB2A">Waystones</a> [26.2.0.12] by BlayTheNinth
        </li>
      </ul>
      <small>
        * Required mods only,
        <a class="underline" href={resolve("/mods")}>see all mods</a>
      </small>
    </div>
  </div>
</section>
