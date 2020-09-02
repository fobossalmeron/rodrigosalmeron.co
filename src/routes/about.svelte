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
    font-size: 2.4rem;
    max-width: 880px;
    margin-top: 0;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<p>
  {@html locale.content.about.full}
</p>
