<script>
  export let segment;
  export let show;
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
    transform: translateY(15px);
    opacity: 0;
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
  .reveal {
    opacity: 1;
    transform: translateY(0);
    transition: 0.25s 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  }
  .reveal2 {
    transition: 0.25s 0.55s cubic-bezier(0.5, 1, 0.89, 1);
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
    <li class={show ? 'reveal' : ''}>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href="/">about</a>
    </li>
    <li class={show ? 'reveal reveal2' : ''}>
      <a
        rel="prefetch"
        aria-current={segment === 'contact' ? 'page' : undefined}
        sapper:noscroll
        href="contact">contact</a>
    </li>
  </ul>
</nav>
