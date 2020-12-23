<script context="module">
  export async function preload(page) {
    let path = page.path;
    return { path };
  }
</script>

<script>
  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  let ga_measurment_id = "G-B18T8LJHRN";

  import Nav from "../components/Nav.svelte";
  import Ld from "../components/Ld";
  export let segment;
  export let path;
  let jsonldScript = `<script type="application/ld+json">${
    Ld(path) + "<"
  }/script>`;
  let w;

  console.log(JSON.stringify(path));

  const gradients = [
    ["#F8D7DD"], //original
    ["#f4f4f4"], //blanco
    ["#FBD59D"], //naranja
    ["#CDE9D9"], //verde
    ["#FFEBA4"], //amarillo
    ["#D3E4F3"], //azul
  ];

  const random = Math.floor(Math.random() * gradients.length);
  let gradient = [];

  let show = false;
  onMount(() => {
    gradient = gradients[random];
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
      var(--gradient) 6.93%,
      rgba(255, 201, 222, 0.24) 84.5%
    );
  }
  img {
    position: relative;
    height: auto;
    margin: 0 0 40px 0;
    width: 70px;
    height: 66.5px;
    transform: translateY(15px);
    opacity: 0;
    transition: 0.2s cubic-bezier(0.11, 0, 0.5, 0);
  }
  a:not(p a) {
    background-image: none;
  }
  img.reveal {
    opacity: 1;
    transform: translateY(0);
    transition: 0.25s 0.25s cubic-bezier(0.5, 1, 0.89, 1);
  }
  @media (max-width: 600px) {
    main {
      padding: 2em 2em 4em 2em;
      margin-bottom: 70px;
    }
  }
</style>

<svelte:head>
  <meta property="og:image" content="https://rodrigosalmeron.co/img/og.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:site_name" content="Rodrigo Salmeron" />
  <!--<script type="application/ld+json">
    {
      actualLd;
    }
  </script>-->
  {@html jsonldScript}
</svelte:head>

<GoogleAnalytics {stores} id={ga_measurment_id} />
<Nav {segment} {show} {w} />

<main bind:clientWidth={w} style="--gradient: {gradient}">
  <a href=".">
    <img class={show && 'reveal'} alt="Rodrigo Salmeron" src="img/logo.svg" />
  </a>
  <div>
    <slot />
  </div>
</main>
