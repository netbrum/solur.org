<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";
  import "@fontsource-variable/newsreader/wght.css";
  import "@fontsource-variable/outfit/wght.css";
  import MainHeader from "$lib/components/main-header.svelte";
  import MainFooter from "$lib/components/main-footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Sundial</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-mist-900 text-white">
  <MainHeader />
  {@render children()}
  <MainFooter />
</div>

<style>
  :global(body) {
    font-family: "Outfit Variable", sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: "Newsreader Variable", serif;
  }
</style>
