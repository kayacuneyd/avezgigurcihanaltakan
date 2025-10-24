<script lang="ts">
    import SEO from '../../components/SEO.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    const settings = data.siteSettings;
</script>

<SEO title="Kontakt | Av. Ezgi G. Altakan" description="Kontaktieren Sie uns für rechtliche Beratung." />

<div class="py-16">
    <div class="container-custom">
        <h1 class="text-4xl font-bold mb-12">Kontakt</h1>

        <div class="grid md:grid-cols-2 gap-12">
            <div>
                <h2 class="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                
                {#if settings}
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div>
                                <div class="font-medium">Telefon</div>
                                <a href="tel:{settings.phone}" class="text-primary-600 hover:text-primary-700">
                                    {settings.phone}
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div>
                                <div class="font-medium">E-Mail</div>
                                <a href="mailto:{settings.email}" class="text-primary-600 hover:text-primary-700">
                                    {settings.email}
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div>
                                <div class="font-medium">Adresse</div>
                                <p class="text-gray-600">{settings.address}</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div>
                                <div class="font-medium">Öffnungszeiten</div>
                                <p class="text-gray-600">{settings.working_hours}</p>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>

            <div>
                <h2 class="text-2xl font-bold mb-6">Kontaktformular</h2>
                <div class="bg-gray-50 p-6 rounded-lg">
                    <p class="text-gray-600 mb-4">
                        Das Formular wird bald verfügbar sein. Bitte kontaktieren Sie uns vorerst telefonisch oder per E-Mail.
                    </p>
                    <a href="tel:{settings?.phone}" class="btn-primary w-full text-center">
                        Anrufen: {settings?.phone}
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
