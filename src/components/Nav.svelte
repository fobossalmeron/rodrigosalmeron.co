<script>
  export let segment;
</script>

<style>
  nav {
    padding: 1em 2em;
    font-size: 1.7rem;
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
  }
</style>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">contact</a>
    </li>
  </ul>
</nav>
