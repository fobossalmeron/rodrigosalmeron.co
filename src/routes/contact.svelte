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
  .linked {
    display: inline-flex;
    flex-direction: column;
    font-size: inherit;
    font-size: 2.4rem;
  }
  .linked a:last-of-type {
    margin-left: 70px;
  }
  svg {
    width: 50px;
    position: absolute;
    left: 0px;
  }
  a {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .linked {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 700px) {
    .linked {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 600px) {
    .linked {
      font-size: 1.1rem;
    }
  }
</style>

<svelte:head>
  <title>{locale.content.contact_title}</title>
  <meta property="og:title" content={locale.content.contact_title} />
  <meta name="description" content={locale.content.contact_description} />
  <meta
    property="og:description"
    content={locale.content.contact_description} />
  <meta property="og:url" content="https://rodrigosalmeron.co/contact" />
  <link rel="canonical" href="https://rodrigosalmeron.co/contact" />
</svelte:head>

<TransitionWrapper>
  <div class="linked">
    <a rel="external" href="mailto:hola@rodrigosalmeron.co">email</a>
    <a href="https://www.linkedin.com/in/rodrigosalmeron/">linkedin</a>
    <a href="https://github.com/fobossalmeron">github</a>
    <a href="https://acueducto.studio/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 54 43"><defs />
        <path
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M39 15l13 13m0 0L39 41m13-13H32C16 28 2 19 2 2" />
      </svg>acueducto.studio</a>
  </div>
</TransitionWrapper>
