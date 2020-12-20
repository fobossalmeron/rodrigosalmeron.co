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
  h1::after {
    content: "–";
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
    p {
      font-size: 1.8rem;
      max-width: 640px;
    }
  }
  @media (max-width: 700px) {
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: 1.2rem;
    }
  }
</style>

<svelte:head>
  <title>{locale.content.index_title}</title>
  <meta property="og:title" content={locale.content.index_title} />
  <meta name="description" content={locale.content.index_description} />
  <meta property="og:description" content={locale.content.index_description} />
  <meta property="og:url" content="https://rodrigosalmeron.co" />
  <link rel="canonical" href="https://rodrigosalmeron.co" />
</svelte:head>

<TransitionWrapper>
  <h1>Rodrigo Salmeron</h1>
  <p>
    {@html locale.content.about.p}
  </p>
</TransitionWrapper>
