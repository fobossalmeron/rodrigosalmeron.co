<script>
  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  let ga_measurment_id = "G-B18T8LJHRN";

  import Nav from "../components/Nav.svelte";
  export let segment;
  let w;

  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";

  let show = true;
  onMount(() => {
    show = true;
  });
</script>

<style>
  main {
    position: relative;
    padding: 3em;
    box-sizing: border-box;
    font-family: inherit;
    min-height: 100vh;
    background: linear-gradient(
      114.37deg,
      #f86b64 6.93%,
      rgba(255, 201, 222, 0.24) 84.5%
    );
  }
  @media (max-width: 600px) {
    main {
      padding: 2em;
      margin-bottom: 50px;
    }
  }
  figure {
    position: relative;
    height: auto;
    margin: 0 0 40px 0;
    width: 70px;
    height: 66.5px;
  }
  img {
    width: 70px;
    height: 66.5px;
  }
  figcaption {
    font-size: 0rem;
  }
</style>

<GoogleAnalytics {stores} id={ga_measurment_id} />
<Nav {segment} {show} {w} />

<main bind:clientWidth={w}>
  {#if show}
    <a href=".">
      <figure
        in:fly={{ y: w > 600 ? 20 : 10, duration: 250, delay: 250, easing: quadOut }}>
        <img alt="Rodrigo Salmeron" src="img/logo.svg" />
        <figcaption>Rodrigo Salmeron</figcaption>
      </figure>
    </a>
    <div
      in:fly={{ y: w > 600 ? 20 : 10, duration: 550, delay: w > 1000 ? 600 : 400, easing: quadOut }}>
      <slot />
    </div>
  {/if}
</main>
