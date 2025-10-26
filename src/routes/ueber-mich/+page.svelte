<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import { getAvatarUrl } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const page = data.page;

	// Expertise Areas
	const expertiseAreas = [
		{
			icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
			title: 'Familienrecht',
			description: 'Spezialisierung auf Scheidung, Sorgerecht und Unterhalt mit über 10 Jahren Erfahrung.'
		},
		{
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
			title: 'Handelsrecht',
			description: 'Umfassende Beratung für Unternehmen, von der Gründung bis zu komplexen Vertragsverhandlungen.'
		},
		{
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
			title: 'Strafrecht',
			description: 'Engagierte Verteidigung in allen strafrechtlichen Angelegenheiten und Instanzen.'
		}
	];

	// Education & Certifications
	const education = [
		{
			year: '2010 - 2015',
			title: 'Jurastudium',
			institution: 'Universität München',
			description: 'Schwerpunkt: Zivilrecht und Handelsrecht'
		},
		{
			year: '2016 - 2018',
			title: 'Rechtsreferendariat',
			institution: 'Oberlandesgericht Stuttgart',
			description: 'Stationen in renommierten Kanzleien und Gerichten'
		},
		{
			year: '2019',
			title: 'Zulassung als Rechtsanwältin',
			institution: 'Rechtsanwaltskammer Stuttgart',
			description: 'Eintragung in die Anwaltsliste'
		}
	];

	// Working Approach
	const approaches = [
		{
			icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
			title: 'Persönliche Betreuung',
			description: 'Jeder Mandant erhält individuelle Aufmerksamkeit und maßgeschneiderte Lösungen.'
		},
		{
			icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
			title: 'Transparente Kommunikation',
			description: 'Klare Erklärungen und regelmäßige Updates über den Stand Ihres Falles.'
		},
		{
			icon: 'M13 10V3L4 14h7v7l9-11h-7z',
			title: 'Effiziente Lösungen',
			description: 'Schnelle und zielgerichtete Bearbeitung Ihrer Anliegen mit Fokus auf Ergebnisse.'
		}
	];

	// Team members data
	const teamMembers = [
		{
			name: 'Ezgi G. Altakan',
			role: 'Rechtsanwältin',
			bio: 'Spezialisiert auf Familien-, Handels- und Strafrecht mit jahrelanger Erfahrung.',
			image: getAvatarUrl('Ezgi Altakan')
		},
		{
			name: 'Dr. Anna Weber',
			role: 'Rechtsanwältin',
			bio: 'Expertin für Arbeitsrecht und Vertragsgestaltung mit Fokus auf Unternehmensrecht.',
			image: getAvatarUrl('Anna Weber')
		},
		{
			name: 'Michael Schmidt',
			role: 'Rechtsanwaltsassistent',
			bio: 'Unterstützt das Team bei administrativen Aufgaben und Mandantenbetreuung.',
			image: getAvatarUrl('Michael Schmidt')
		}
	];
</script>

<SEO
	title="Über mich"
	description={page?.excerpt || 'Erfahren Sie mehr über Av. Ezgi G. Altakan.'}
	image={page?.featured_image}
/>

<div class="py-16">
	<div class="container-custom">
		{#if page}
			<!-- Header -->
			<div class="max-w-4xl mx-auto mb-16">
				<h1 class="text-4xl font-bold mb-8 text-center">{page.title}</h1>

				<!-- Main Bio (WordPress Content) -->
				<div class="wp-content prose prose-lg max-w-none">
					{@html page.content}
				</div>
			</div>

			<!-- Expertise Areas -->
			<section class="mb-16">
				<h2 class="text-3xl font-bold text-center mb-12">Meine Schwerpunkte</h2>
				<div class="grid md:grid-cols-3 gap-8">
					{#each expertiseAreas as area}
						<div class="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg border border-primary-100">
							<div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
								<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={area.icon} />
								</svg>
							</div>
							<h3 class="text-xl font-bold mb-2">{area.title}</h3>
							<p class="text-gray-600">{area.description}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- Education & Certifications -->
			<section class="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
				<div class="container-custom">
					<h2 class="text-3xl font-bold text-center mb-12">Ausbildung & Qualifikationen</h2>
					<div class="max-w-3xl mx-auto space-y-8">
						{#each education as item}
							<div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600">
								<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
									<h3 class="text-xl font-bold">{item.title}</h3>
									<span class="text-sm text-primary-600 font-medium">{item.year}</span>
								</div>
								<p class="text-gray-700 font-medium mb-1">{item.institution}</p>
								<p class="text-gray-600 text-sm">{item.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>

			<!-- Working Approach -->
			<section class="mb-16">
				<h2 class="text-3xl font-bold text-center mb-12">Meine Arbeitsweise</h2>
				<div class="grid md:grid-cols-3 gap-8">
					{#each approaches as approach}
						<div class="text-center">
							<div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={approach.icon} />
								</svg>
							</div>
							<h3 class="text-xl font-bold mb-2">{approach.title}</h3>
							<p class="text-gray-600">{approach.description}</p>
						</div>
					{/each}
				</div>
			</section>

			<!-- CTA Banner -->
			<section class="mb-16">
				<div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
					<h2 class="text-3xl font-bold mb-4">Lassen Sie uns sprechen</h2>
					<p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
						Vereinbaren Sie einen Termin für eine persönliche Beratung. 
						Gemeinsam finden wir die beste Lösung für Ihr Anliegen.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a href="/kontakt" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
							Kontakt aufnehmen
						</a>
						<a 
							href="https://cal.com/avezgigurcihanaltakan/erstberatung"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-primary-600 transition-colors"
						>
							Termin vereinbaren
						</a>
					</div>
				</div>
			</section>

			<!-- Team Section (mevcut - en altta kalacak) -->
			<section class="pt-16 border-t border-gray-200">
				<div class="text-center mb-12">
					<h2 class="text-3xl font-bold mb-4">Unser Team</h2>
					<p class="text-gray-600 max-w-2xl mx-auto">
						Lernen Sie unser engagiertes Team kennen, das Sie bei Ihren rechtlichen Anliegen mit Fachwissen und
						Erfahrung unterstützt.
					</p>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each teamMembers as member}
						<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div class="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
								<img
									src={member.image}
									alt={member.name}
									class="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>

							<div class="p-6 text-center">
								<h3 class="text-xl font-bold mb-1">{member.name}</h3>
								<p class="text-primary-600 font-medium mb-3">{member.role}</p>
								<p class="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{:else}
			<div class="text-center py-12">
				<p class="text-gray-600">Bu sayfa henüz oluşturulmadı.</p>
			</div>
		{/if}
	</div>
</div>
