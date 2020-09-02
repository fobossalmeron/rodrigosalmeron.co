<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    padding: 2em;
    box-sizing: border-box;
    min-height: 100vh;
  }
  figure {
    position: fixed;
    right: 18%;
    top: 50%;
    transform: translateY(-50%);
  }
  figcaption {
    font-size: 0rem;
  }
  p {
    font-size: 1.6rem;
    max-width: 580px;
    margin-top: 0;
  }
</style>

<Nav {segment} />

<main>
  <slot />
  <a href=".">
    <figure>
      <img alt="Rodrigo Salmeron" src="img/logo.svg" />
      <figcaption>Rodrigo Salmeron</figcaption>
    </figure>
  </a>
</main>
