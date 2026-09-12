<script lang="ts">
  import eyes from "$lib/assets/eyes.gif";
  import noise from "$lib/assets/static.gif";
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { WONDERLAND_MESSAGES } from "$lib/consts";
  import track from "$lib/assets/soundreality-ambient-wandering-wind-321158.mp3";

  let messages = $state([
    WONDERLAND_MESSAGES[0],
    WONDERLAND_MESSAGES[50],
    WONDERLAND_MESSAGES[100]
  ]);

  let happy = $state(false);

  onMount(() => {
    const audio = new Audio(track);
    audio.play();

    const interval = setInterval(() => {
      messages = messages.map(() => {
        const index = Math.floor(Math.random() * WONDERLAND_MESSAGES.length);
        return WONDERLAND_MESSAGES[index];
      });
    }, 150);

    const happyTimeout = setTimeout(() => (happy = true), 4000);
    const redirectTimeout = setTimeout(() => {
      goto(resolve("/"));
    }, 5500);

    return () => {
      audio.pause();
      clearInterval(interval);
      clearTimeout(happyTimeout);
      clearTimeout(redirectTimeout);
    };
  });
</script>

<section
  class="absolute top-0 left-0 z-50 grid min-h-screen w-full place-items-center bg-black text-center text-white"
>
  {#if happy}
    <div
      transition:blur
      class="absolute top-0 left-0 z-50 grid h-full w-full place-items-center bg-white text-black"
    >
      <p>There is no such thing as a curse :)</p>
    </div>
  {/if}
  <img src={noise} alt="Static" class="absolute top-0 left-0 h-full w-full opacity-10" />
  <img src={eyes} alt="Eyes moving" class="opacity-25" />
  <div class="flex items-center">
    <p class="translate-y-10 translate-z-5 animate-shake text-4xl opacity-5">{messages[0]}</p>
    <p class="translate-x-5 -translate-y-4 animate-shake text-4xl opacity-5">{messages[1]}</p>
    <p class="translate-y-5 translate-z-10 animate-shake text-4xl opacity-5">{messages[2]}</p>
  </div>
</section>
