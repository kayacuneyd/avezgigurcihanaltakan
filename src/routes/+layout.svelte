<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let data;
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	
	<main class="flex-grow">
		<slot />
	</main>
	
	<Footer siteSettings={data.siteSettings} />
</div>
