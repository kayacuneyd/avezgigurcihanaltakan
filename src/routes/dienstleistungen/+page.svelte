<script lang="ts">
    import SEO from '../../components/SEO.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    const page = data.page;

    // Services data - hardcoded
    const services = [
        {
            icon: 'scale',
            title: 'Familienrecht',
            description: 'Umfassende Beratung und Vertretung in allen Angelegenheiten des Familienrechts.',
            details: [
                'Scheidung und Trennung',
                'Sorgerecht und Umgangsrecht',
                'Unterhalt (Kindesunterhalt, Ehegattenunterhalt)',
                'Vermögensauseinandersetzung',
                'Eheverträge und Trennungsvereinbarungen',
                'Adoption und Vaterschaftsanerkennung'
            ]
        },
        {
            icon: 'briefcase',
            title: 'Handelsrecht',
            description: 'Rechtliche Unterstützung für Unternehmen in allen Phasen ihrer Geschäftstätigkeit.',
            details: [
                'Unternehmensgründung und -strukturierung',
                'Vertragsgestaltung und -prüfung',
                'Handelsvertreterrecht',
                'Gesellschaftsrecht',
                'Forderungsmanagement',
                'Gewerbliche Rechtsstreitigkeiten'
            ]
        },
        {
            icon: 'shield',
            title: 'Strafrecht',
            description: 'Professionelle Verteidigung und Vertretung in strafrechtlichen Angelegenheiten.',
            details: [
                'Strafverteidigung in allen Instanzen',
                'Nebenklagevertretung',
                'Ordnungswidrigkeiten',
                'Jugendstrafrecht',
                'Wirtschaftsstrafrecht',
                'Verkehrsstrafrecht'
            ]
        }
    ];

    // Icon komponenti için helper
    function getIconPath(iconName: string): string {
        const icons = {
            scale: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
            briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
            shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        };
        return icons[iconName] || icons.scale;
    }
</script>

<SEO
    title="Dienstleistungen"
    description={page?.excerpt || 'Informationen zu meinen juristischen Dienstleistungen.'}
    image={page?.featured_image}
/>

<div class="py-16">
    <div class="container-custom">
        <!-- Page Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold mb-4">Meine Dienstleistungen</h1>

            {#if page?.content}
                <!-- WordPress intro text -->
                <div class="max-w-3xl mx-auto text-lg text-gray-600">
                    {@html page.content}
                </div>
            {:else}
                <p class="max-w-3xl mx-auto text-lg text-gray-600">
                    Als erfahrene Rechtsanwältin biete ich Ihnen umfassende Beratung 
                    und Vertretung in verschiedenen Rechtsgebieten.
                </p>
            {/if}
        </div>

        <!-- Service Cards -->
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {#each services as service}
                <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8">
                    <!-- Icon -->
                    <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={getIconPath(service.icon)} />
                        </svg>
                    </div>

                    <!-- Title -->
                    <h2 class="text-2xl font-bold mb-3">{service.title}</h2>

                    <!-- Description -->
                    <p class="text-gray-600 mb-6">{service.description}</p>

                    <!-- Details List -->
                    <ul class="space-y-2">
                        {#each service.details as detail}
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-sm text-gray-700">{detail}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
            <h2 class="text-3xl font-bold mb-4">Benötigen Sie rechtliche Unterstützung?</h2>
            <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie mich für eine unverbindliche Erstberatung. 
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
    </div>
</div>
