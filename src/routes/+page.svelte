<script lang="ts">
	import SEO from '../components/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<SEO
	title="Ana Sayfa"
	description="Profesyonel hukuki danışmanlık ve temsil hizmetleri. Aile, ticaret ve ceza hukuku alanlarında uzman avukatlık."
/>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
	<div class="container-custom">
		<div class="max-w-3xl">
			<h1 class="text-5xl font-bold mb-6">
				Av. Ezgi G. Altakan
			</h1>
			<p class="text-xl mb-8 text-primary-100">
				Profesyonel hukuki danışmanlık ve temsil hizmetleri ile yanınızdayım.
			</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<a href="/iletisim" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
					Randevu Alın
				</a>
				<a href="/hakkimda" class="btn-secondary text-white border-white hover:bg-primary-700">
					Hakkımda
				</a>
			</div>
		</div>
	</div>
</section>

<!-- About Preview -->
<section class="py-16 bg-gray-50">
	<div class="container-custom">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold mb-4">Deneyimli Hukuki Danışmanlık</h2>
				<p class="text-gray-600 mb-6 leading-relaxed">
					Müvekkillerimin haklarını korumak ve en iyi hukuki çözümleri sunmak için çalışıyorum.
					Aile hukuku, ticaret hukuku ve ceza hukuku alanlarında uzmanlaşmış deneyimli bir avukat olarak,
					her davaya özel yaklaşım ve titiz çalışma prensibimle hizmet veriyorum.
				</p>
				<a href="/hakkimda" class="text-primary-600 font-medium hover:text-primary-700">
					Devamını oku →
				</a>
			</div>
			<div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
				<p class="text-gray-500">Profil fotoğrafı</p>
			</div>
		</div>
	</div>
</section>

<!-- Services -->
<section class="py-16">
	<div class="container-custom">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Hizmetlerim</h2>
			<p class="text-gray-600 max-w-2xl mx-auto">
				Farklı hukuk alanlarında kapsamlı danışmanlık ve temsil hizmetleri sunuyorum.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
				<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Aile Hukuku</h3>
				<p class="text-gray-600 mb-4">
					Boşanma, velayet, nafaka ve mal paylaşımı konularında danışmanlık.
				</p>
				<a href="/hizmetler" class="text-primary-600 font-medium hover:text-primary-700">
					Detaylı bilgi →
				</a>
			</div>

			<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
				<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Ticaret Hukuku</h3>
				<p class="text-gray-600 mb-4">
					Şirket kuruluşu, ticari sözleşmeler ve alacak-verecek davaları.
				</p>
				<a href="/hizmetler" class="text-primary-600 font-medium hover:text-primary-700">
					Detaylı bilgi →
				</a>
			</div>

			<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
				<div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Ceza Hukuku</h3>
				<p class="text-gray-600 mb-4">
					Ceza davalarında savunma ve müdahillik hizmetleri.
				</p>
				<a href="/hizmetler" class="text-primary-600 font-medium hover:text-primary-700">
					Detaylı bilgi →
				</a>
			</div>
		</div>

		<div class="text-center mt-12">
			<a href="/hizmetler" class="btn-primary">
				Tüm Hizmetleri Görün
			</a>
		</div>
	</div>
</section>

<!-- Blog Preview -->
{#if data.posts && data.posts.length > 0}
<section class="py-16 bg-gray-50">
	<div class="container-custom">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Son Yazılar</h2>
			<p class="text-gray-600">Hukuk alanındaki güncel gelişmeler ve bilgilendirici içerikler.</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each data.posts.slice(0, 3) as post}
				<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
					{#if post.featured_image}
						<img src={post.featured_image} alt={post.title} class="w-full h-48 object-cover" />
					{/if}
					<div class="p-6">
						<h3 class="text-xl font-bold mb-2">
							<a href="/blog/{post.slug}" class="hover:text-primary-600">
								{post.title}
							</a>
						</h3>
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

		<div class="text-center mt-12">
			<a href="/blog" class="btn-secondary">
				Tüm Yazıları Görün
			</a>
		</div>
	</div>
</section>
{/if}

<!-- CTA Section -->
<section class="py-16 bg-primary-600 text-white">
	<div class="container-custom text-center">
		<h2 class="text-3xl font-bold mb-4">Hukuki Desteğe mi İhtiyacınız Var?</h2>
		<p class="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
			Size en uygun çözümü bulmak için hemen iletişime geçin.
		</p>
		<a href="/iletisim" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
			Randevu Alın
		</a>
	</div>
</section>
