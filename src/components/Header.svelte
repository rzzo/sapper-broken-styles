<script>
  import Nav from '../components/Nav.svelte';

	export let segment;
	export let footerData;
</script>

<style>

</style>

<header>
  <a class="logo" href=".">
    <h1>{footerData[0].municipality}</h1>
  </a>
  <Nav {segment} />

  <!-- <nav>
    <a
      href="/"
      aria-current="{!segment ? "page" : undefined}">
      About</a>
    <a
      href="blog"
      aria-current="{segment === "blog" ? "page" : undefined}">
      Blog</a>
    <a
      href="reads"
      aria-current="{segment === "reads" ? "page" : undefined}">
      Reads</a>
    <a
      href="documents"
      aria-current="{segment === "documents" ? "page" : undefined}">
      documents</a>
  </nav> -->
</header>
