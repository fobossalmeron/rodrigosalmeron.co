<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { quadOut, quadIn } from "svelte/easing";

  let w;
  let show = false;

  onMount(() => {
    show = true;
  });
</script>

<style>
  div {
    position: relative;
    transform: translateY(20px);
  }
</style>

<div
  class={show && 'reveal'}
  bind:clientWidth={w}
  in:fly={{ y: w + 56 > 600 ? 20 : 10, duration: 250, delay: 250, easing: quadOut }}
  out:fly={{ y: w + 56 > 600 ? 50 : 20, duration: 200, easing: quadIn }}>
  <slot />
</div>
