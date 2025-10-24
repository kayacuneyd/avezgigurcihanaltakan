<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const settings = data.siteSettings;
</script>

<div class="py-16">
	<div class="container-custom text-center">
		<h1 class="text-2xl font-bold mb-4">Bu sayfa taşındı / Seite verschoben</h1>
		<p class="text-gray-600 mb-4">Die Seite wurde nach Deutsch übersetzt und ist jetzt unter <a href="/kontakt" class="text-primary-600 hover:text-primary-700">/kontakt</a> erreichbar.</p>
	</div>
</div>
