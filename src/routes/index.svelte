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
  export let locale;
</script>

<style>
  p {
    font-size: 1.6rem;
    max-width: 580px;
    margin-top: 0;
  }
  @media (min-width: 480px) {
  }
</style>

<svelte:head>
  <title>Rodrigo Salmeron</title>
</svelte:head>

<p>
  {@html locale.content.about.intro}
</p>
