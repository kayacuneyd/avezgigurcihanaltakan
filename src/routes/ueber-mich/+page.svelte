<script lang="ts">
	import SEO from '../../components/SEO.svelte';
	import { getAvatarUrl } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const page = data.page;

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
			<h1 class="text-4xl font-bold mb-8">{page.title}</h1>

			<div class="wp-content prose prose-lg">
				{@html page.content}
			</div>

			<section class="mt-16 pt-16 border-t border-gray-200">
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
				<p class="text-gray-600">Diese Seite wurde noch nicht erstellt.</p>
			</div>
		{/if}
	</div>
</div>
