<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<SEO title="Hizmetler" description="Hukuk alanlarındaki hizmetlerimiz hakkında bilgi edinin." />

<div class="py-16">
	<div class="container-custom">
		<h1 class="text-4xl font-bold mb-8">Hizmetlerim</h1>
		
		{#if data.page}
			<div class="wp-content prose prose-lg">
				{@html data.page.content}
			</div>
		{:else}
			<p class="text-gray-600">Hizmetler sayfası WordPress'te oluşturulmalı (slug: hizmetler)</p>
		{/if}
	</div>
</div>
