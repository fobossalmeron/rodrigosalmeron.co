<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`locale/en.json`)
      .then((r) => r.json())
      .then((locale) => {
        return { locale };
      });
  }
</script>

<script>
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  export let locale;
</script>

<style>
  h1 {
    display: inline;
  }
  p,
  h1 {
    font-size: 2.4rem;
    max-width: 820px;
    margin-top: 0;
    width: 100%;
  }
  @media (max-width: 1000px) {
    p,
    h1 {
      font-size: 1.8rem;
      max-width: 640px;
    }
  }
  @media (max-width: 700px) {
    p,
    h1 {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 600px) {
    p,
    h1 {
      font-size: 1.2rem;
    }
  }
</style>

<svelte:head>
  <title>{locale.content.error.error_title}</title>
</svelte:head>

<TransitionWrapper>
  <h1>{locale.content.error.title}</h1>
  <p>
    {@html locale.content.error.p}
  <br/>
    <a href="/">Go to main site</a>
  </p>
</TransitionWrapper>
