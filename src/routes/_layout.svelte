<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`setup.json`).then(r => r.json()).then(footerData => {
			return { footerData };
		});
	}
</script>
<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
	export let footerData;

</script>

<style lang="scss" global>
  @import '../styles/global.scss';
  @import "../styles/_t.scss";
</style>

<Header {segment} {footerData}/>
<main>
	<slot></slot>
</main>
<Footer {footerData}/>
