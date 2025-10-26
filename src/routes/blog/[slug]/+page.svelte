<script lang="ts">
	import SEO from '../../../components/SEO.svelte';
	import { formatDate, cleanWordPressContent } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const post = data.post;
</script>

<SEO
	title={post.title}
	description={post.excerpt.replace(/<[^>]*>/g, '').substring(0, 155)}
	image={post.featured_image}
/>

<article class="py-16">
	<div class="container-custom">
		<!-- Back Button -->
		<div class="mb-8">
			<a 
				href="/blog" 
				class="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
			>
				<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Zurück zur Übersicht
			</a>
		</div>

		<div class="max-w-4xl mx-auto">
			<!-- Featured Image -->
			{#if post.featured_image}
				<img 
					src={post.featured_image} 
					alt={post.title} 
					class="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
				/>
			{/if}

			<!-- Header -->
			<header class="mb-8">
				<!-- Categories -->
				{#if post.categories && post.categories.length > 0}
					<div class="flex flex-wrap gap-2 mb-4">
						{#each post.categories as category}
							<span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
								{category.name}
							</span>
						{/each}
					</div>
				{/if}
				
				<h1 class="text-4xl font-bold mb-4">{post.title}</h1>
				
				<div class="flex items-center text-gray-600 text-sm">
					<span>{typeof post.author === 'string' ? post.author : post.author?.name || 'Admin'}</span>
					<span class="mx-2">•</span>
					<time datetime={post.date}>{formatDate(post.date)}</time>
					{#if post.modified !== post.date}
						<span class="mx-2">•</span>
						<span class="text-gray-500">Aktualisiert: {formatDate(post.modified)}</span>
					{/if}
				</div>
			</header>

			<!-- Content -->
			<div class="wp-content prose prose-lg max-w-none">
				{@html cleanWordPressContent(post.content)}
			</div>

			<!-- Tags -->
			{#if post.tags && post.tags.length > 0}
				<footer class="mt-12 pt-8 border-t border-gray-200">
					<div class="flex flex-wrap gap-2">
						<span class="text-gray-600 font-medium">Tags:</span>
						{#each post.tags as tag}
							<span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
								{tag.name}
							</span>
						{/each}
					</div>
				</footer>
			{/if}

			<!-- Back to Blog -->
			<div class="mt-12 pt-8 border-t border-gray-200 text-center">
				<a 
					href="/blog" 
					class="inline-flex items-center btn-primary"
				>
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
					Alle Artikel anzeigen
				</a>
			</div>
		</div>
	</div>
</article>
