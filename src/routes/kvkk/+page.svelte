<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<SEO title="KVKK" description="Kişisel Verilerin Korunması Kanunu bilgilendirmesi." />

<div class="py-16">
	<div class="container-custom max-w-4xl">
		<h1 class="text-4xl font-bold mb-8">KVKK Aydınlatma Metni</h1>
		
		{#if data.page}
			<div class="wp-content">
				{@html data.page.content}
			</div>
		{:else}
			<p class="text-gray-600">KVKK sayfası WordPress'te oluşturulmalı (slug: kvkk)</p>
		{/if}
	</div>
</div>
