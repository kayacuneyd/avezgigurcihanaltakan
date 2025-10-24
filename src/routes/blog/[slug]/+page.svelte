<script lang="ts">
	import SEO from '../../../components/SEO.svelte';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const post = data.post;
</script>

<SEO
	title={post.title}
	description={post.excerpt}
	image={post.featured_image}
/>

<article class="py-16">
	<div class="container-custom max-w-4xl">
		{#if post.featured_image}
			<img src={post.featured_image} alt={post.title} class="w-full h-96 object-cover rounded-lg mb-8" />
		{/if}

		<header class="mb-8">
			<h1 class="text-4xl font-bold mb-4">{post.title}</h1>
			<div class="flex items-center text-gray-600 text-sm">
				<span>{post.author}</span>
				<span class="mx-2">•</span>
				<time datetime={post.date}>{formatDate(post.date)}</time>
			</div>
		</header>

		<div class="wp-content">
			{@html post.content}
		</div>

		<footer class="mt-12 pt-8 border-t">
			<a href="/blog" class="text-primary-600 hover:text-primary-700">
				← Tüm yazılara dön
			</a>
		</footer>
	</div>
</article>
