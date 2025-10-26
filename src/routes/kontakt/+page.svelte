<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import ContactForm from '../../components/ContactForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const settings = data.siteSettings;
</script>

<SEO title="Kontakt" description="Kontaktieren Sie mich für rechtliche Beratung." />

<div class="py-16">
	<div class="container-custom">
		<h1 class="text-4xl font-bold mb-12">Kontakt</h1>

		<div class="grid md:grid-cols-2 gap-12">
			<!-- Sol: İletişim Bilgileri -->
			<div>
				<h2 class="text-2xl font-bold mb-6">Kontaktinformationen</h2>

				{#if settings}
					<div class="space-y-4">
						<!-- Telefon -->
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

						<!-- Email -->
						<div class="flex items-start">
							<svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<div>
								<div class="font-medium">E-Mail</div>
								<a href="mailto:{settings.email}" class="text-primary-600 hover:text-primary-700">
									{settings.email}
								</a>
							</div>
						</div>

						<!-- Adres -->
						<div class="flex items-start">
							<svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<div>
								<div class="font-medium">Adresse</div>
								<p class="text-gray-600">{settings.address}</p>
							</div>
						</div>

						<!-- Çalışma Saatleri -->
						<div class="flex items-start">
							<svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<div>
								<div class="font-medium">Öffnungszeiten</div>
								<p class="text-gray-600">{settings.working_hours}</p>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Sağ: Kontakt Form -->
			<div>
				<h2 class="text-2xl font-bold mb-6">Kontaktformular</h2>
				<ContactForm />
			</div>
		</div>

		<!-- YENİ SECTION: Randevu Takvimi -->
		<div class="mt-16 pt-16 border-t border-gray-200">
			<div class="text-center mb-8">
				<h2 class="text-3xl font-bold mb-4">Termin online vereinbaren</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">
					Buchen Sie direkt einen Termin für eine Erstberatung. Wählen Sie einen passenden Zeitpunkt aus den verfügbaren Slots.
				</p>
			</div>

			<div class="max-w-4xl mx-auto">
				<iframe
					src="https://cal.com/avezgigurcihanaltakan/erstberatung?embed=true"
					width="100%"
					height="800"
					frameborder="0"
					class="rounded-lg shadow-lg"
					title="Termin vereinbaren"
					loading="lazy"
				></iframe>
			</div>
		</div>
	</div>
</div>
