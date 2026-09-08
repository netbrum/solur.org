<script lang="ts">
  import { lazyLoad } from "$lib/lazy.js";
  import type { Screenshot } from "$lib/types.js";

  let { data } = $props();

  let screenshotsByMonth = $derived.by(() => {
    return data.screenshots.reduce((a, b) => {
      const key = new Date(b.taken_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long"
      });

      const screenshots = a.get(key) ?? [];
      screenshots.push(b);

      a.set(key, screenshots);
      return a;
    }, new Map<string, Screenshot[]>());
  });
</script>

<section class="grow px-4 py-16">
  <div class="mx-auto prose w-full max-w-7xl prose-invert">
    <h2 class="text-center">Gallery</h2>
    {#each screenshotsByMonth.entries() as [month, screenshots] (month)}
      <div>
        <h3>{month}</h3>
        <div class="grid-col-1 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {#each screenshots as screenshot (screenshot.id)}
            <div class="text-center">
              <img
                use:lazyLoad={screenshot.path}
                class="my-2! transition-opacity duration-1000"
                src={screenshot.path}
                alt={screenshot.description}
              />
              {#if screenshot.description}
                <p class="my-0!">{screenshot.description}</p>
              {/if}
              <small>{screenshot.taken_at}</small>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
