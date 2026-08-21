<script lang="ts">
  import { resolve } from "$app/paths";
  import favicon from "$lib/assets/favicon.png";
</script>

<header class="flex w-full flex-col items-center gap-4 px-4 py-6">
  <a class="flex items-center gap-4" href={resolve("/")}>
    <img src={favicon} class="size-12" alt="server icon" />
    <h2 class="text-3xl">solur.org</h2>
  </a>
  <nav>
    <ul class="flex flex-wrap items-center gap-8 text-base underline">
      <li><a href={resolve("/newsletter")}>Newsletter</a></li>
      <li>
        <a target="_blank" href="https://bluemap.solur.org">Bluemap</a>
      </li>
      <li>
        <a target="_blank" href="https://panel.solur.org">Panel</a>
      </li>
    </ul>
  </nav>
</header>
