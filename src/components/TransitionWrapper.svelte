<script>
  import { fly } from "svelte/transition";
  import { quadOut, quadIn } from "svelte/easing";
  let w;
  let show = true;
</script>

<style>
  div {
    position: relative;
  }
</style>

{#if show}
  <div
    bind:clientWidth={w}
    in:fly={{ y: w + 56 > 600 ? 20 : 10, duration: 250, delay: 200, easing: quadOut }}
    out:fly={{ y: w + 56 > 600 ? 50:20, duration: 200, easing: quadIn }}>
    <slot />
  </div>
{/if}
