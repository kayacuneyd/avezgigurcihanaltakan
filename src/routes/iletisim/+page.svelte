<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const settings = data.siteSettings;
</script>

<SEO title="İletişim" description="Hukuki danışmanlık için bizimle iletişime geçin." />

<div class="py-16">
	<div class="container-custom">
		<h1 class="text-4xl font-bold mb-12">İletişim</h1>

		<div class="grid md:grid-cols-2 gap-12">
			<div>
				<h2 class="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
				
				{#if settings}
					<div class="space-y-4">
						<div class="flex items-start">
							<svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<div>
								<div class="font-medium">Telefon</div>
								<a href="tel:{settings.phone}" class="text-primary-600 hover:text-primary-700">
									{settings.phone}
								</a>
							</div>
						</div>

						<div class="flex items-start">
							<svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<div>
								<div class="font-medium">E-posta</div>
								<a href="mailto:{settings.email}" class="text-primary-600 hover:text-primary-700">
									{settings.email}
								</a>
							</div>
						</div>

						<div class="flex items-start">
							<svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<div>
								<div class="font-medium">Adres</div>
								<p class="text-gray-600">{settings.address}</p>
							</div>
						</div>

						<div class="flex items-start">
							<svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div>
								<div class="font-medium">Çalışma Saatleri</div>
								<p class="text-gray-600">{settings.working_hours}</p>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<div>
				<h2 class="text-2xl font-bold mb-6">İletişim Formu</h2>
				<div class="bg-gray-50 p-6 rounded-lg">
					<p class="text-gray-600 mb-4">
						Form yakında aktif olacak. Şimdilik lütfen telefon veya e-posta ile iletişime geçin.
					</p>
					<a href="tel:{settings?.phone}" class="btn-primary w-full text-center">
						Ara: {settings?.phone}
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
