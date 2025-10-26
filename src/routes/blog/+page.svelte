<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import { formatDate, cleanWordPressContent } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	// Strip HTML tags from excerpt
	function stripHtml(html: string): string {
		// Önce WordPress content'i temizle
		const cleaned = cleanWordPressContent(html);
		// Sonra tüm HTML tag'larını sil
		return cleaned.replace(/<[^>]*>/g, '').trim();
	}
</script>

<SEO title="Blog" description="Hukuk alanındaki güncel gelişmeler ve bilgilendirici yazılar." />

<div class="py-16">
	<div class="container-custom">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">Blog</h1>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Aktuelle Artikel, rechtliche Einblicke und wichtige Entwicklungen 
				aus verschiedenen Rechtsgebieten.
			</p>
		</div>

		{#if data.posts && data.posts.length > 0}
			<!-- Blog Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.posts as post}
					<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
						<!-- Featured Image -->
						{#if post.featured_image}
							<a href="/blog/{post.slug}" class="block overflow-hidden">
								<img 
									src={post.featured_image} 
									alt={post.title} 
									class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
									loading="lazy"
								/>
							</a>
						{:else}
							<a href="/blog/{post.slug}" class="block">
								<div class="w-full h-56 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
									<svg class="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
								</div>
							</a>
						{/if}
						
						<div class="p-6">
							<!-- Meta Info -->
							<div class="flex items-center gap-3 text-sm text-gray-500 mb-3">
								<time datetime={post.date}>{formatDate(post.date)}</time>
								
								{#if post.categories && post.categories.length > 0}
									<span>•</span>
									<span class="text-primary-600 font-medium">
										{post.categories[0].name}
									</span>
								{/if}
							</div>
							
							<!-- Title -->
							<h2 class="text-xl font-bold mb-3">
								<a href="/blog/{post.slug}" class="hover:text-primary-600 transition-colors">
									{post.title}
								</a>
							</h2>
							
							<!-- Excerpt -->
							<p class="text-gray-600 mb-4 line-clamp-3">
								{stripHtml(post.excerpt)}
							</p>
							
							<!-- Read More -->
							<a 
								href="/blog/{post.slug}" 
								class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
							>
								Weiterlesen
								<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<!-- Empty State -->
			<div class="text-center py-16">
				<svg class="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
				</svg>
				<h3 class="text-xl font-bold text-gray-700 mb-2">Noch keine Artikel</h3>
				<p class="text-gray-500">
					Bald finden Sie hier informative Artikel zu verschiedenen Rechtsthemen.
				</p>
			</div>
		{/if}
	</div>
</div>
