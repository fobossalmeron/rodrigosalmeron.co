<script>
  export let segment;
  export let show;
  export let w;
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";
</script>

<style>
  nav {
    padding: 2.5em 2em;
    font-size: 1.6rem;
    position: fixed;
    right: 0;
    z-index: 1000;
    pointer-events: none;
  }

  ul {
    margin: 0;
    padding: 0;
    pointer-events: auto;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }
  li:first-of-type {
    margin-right: 20px;
  }
  li::after {
    content: "";
    width: 30px;
    height: 20px;
    border: 2px solid #060809;
    border-radius: 100%;
    display: inline-block;
    transform: rotate(-20deg);
  }

  [aria-current]::after {
    opacity: 1;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em 2px;
    position: relative;
    background-image: none !important;
  }
  a:hover::after {
    opacity: 1;
  }
  a::after {
    position: absolute;
    transition: 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) all;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #060809;
    display: block;
    bottom: -1px;
    opacity: 0;
    left: 15px;
    border-radius: 10px;
  }

  @media (max-width: 1000px) {
    nav {
      bottom: 0;
      left: 0;
      background-color: #ececec;
      padding: 2rem;
      box-sizing: border-box;
      height: 95px;
    }
  }
  @media (max-width: 600px) {
    nav {
      padding: 1.5rem;
      height: 80px;
    }
  }
</style>

<nav>
  <ul>
    {#if show}
      <li
        in:fly={{ y: w > 600 ? 20 : 10, duration: 250, delay: w > 600 ? 400 : 600, easing: quadOut }}>
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href="/">about</a>
      </li>
      <li
        in:fly={{ y: w > 600 ? 20 : 10, duration: 250, delay: w > 600 ? 550 : 750, easing: quadOut }}>
        <a
          rel="prefetch"
          aria-current={segment === 'contact' ? 'page' : undefined}
          href="contact">contact</a>
      </li>
    {/if}
  </ul>
</nav>
