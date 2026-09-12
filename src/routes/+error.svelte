<script lang="ts">
  import { page } from "$app/state";
</script>

<section class="mx-auto my-auto prose text-center prose-invert">
  <h2>Oh no! An error seems to occurred!</h2>
  <p>{page.error?.message}</p>
</section>
