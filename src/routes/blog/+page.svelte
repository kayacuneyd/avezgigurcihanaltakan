<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<SEO title="Blog" description="Hukuk alanındaki güncel gelişmeler ve bilgilendirici yazılar." />

<div class="py-16">
	<div class="container-custom">
		<h1 class="text-4xl font-bold mb-12">Blog</h1>

		{#if data.posts && data.posts.length > 0}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.posts as post}
					<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
						{#if post.featured_image}
							<img src={post.featured_image} alt={post.title} class="w-full h-48 object-cover" />
						{/if}
						<div class="p-6">
							<div class="text-sm text-gray-500 mb-2">{formatDate(post.date)}</div>
							<h2 class="text-xl font-bold mb-2">
								<a href="/blog/{post.slug}" class="hover:text-primary-600">
									{post.title}
								</a>
							</h2>
							<p class="text-gray-600 mb-4 line-clamp-3">
								{@html post.excerpt}
							</p>
							<a href="/blog/{post.slug}" class="text-primary-600 font-medium hover:text-primary-700">
								Devamını oku →
							</a>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<div class="text-center py-12">
				<p class="text-gray-600">Henüz blog yazısı yok.</p>
			</div>
		{/if}
	</div>
</div>
