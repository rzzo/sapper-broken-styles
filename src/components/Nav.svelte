<script>
  export let segment;
  export let showHome = false;
</script>

<style>
</style>

<nav>
  {#if showHome}
    <a aria-current={segment === undefined ? 'page' : undefined} href=".">
      Home
    </a>
  {/if}

  <a
    rel="prefetch"
    aria-current={segment === 'news' ? 'page' : undefined}
    href="news">
    News
  </a>

  <a
    rel="prefetch"
    aria-current={segment === 'sink' ? 'page' : undefined}
    href="sink">
    sink
  </a>
</nav>
