<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const page = data.page;
</script>

<SEO
	title={page?.title || 'Hakkımda'}
	description={page?.excerpt || 'Av. Ezgi G. Altakan hakkında bilgi edinin.'}
	image={page?.featured_image}
/>

<div class="py-16">
	<div class="container-custom">
		{#if page}
			<h1 class="text-4xl font-bold mb-8">{page.title}</h1>
			
			<div class="wp-content prose prose-lg">
				{@html page.content}
			</div>
		<script lang="ts">
			import { onMount } from 'svelte';
		</script>

		<div class="py-16">
			<div class="container-custom text-center">
				<h1 class="text-2xl font-bold mb-4">Bu sayfa taşındı / Seite verschoben</h1>
				<p class="text-gray-600 mb-4">Die Seite wurde nach Deutsch übersetzt und ist jetzt unter <a href="/ueber-mich" class="text-primary-600 hover:text-primary-700">/ueber-mich</a> erreichbar.</p>
			</div>
		</div>
