<script lang="ts">
    import SEO from '../../components/SEO.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    const page = data.page;
</script>

<SEO
    title="Dienstleistungen"
    description={page?.excerpt || 'Informationen zu meinen juristischen Dienstleistungen.'}
    image={page?.featured_image}
/
>

<div class="py-16">
    <div class="container-custom">
        <h1 class="text-4xl font-bold mb-8">Meine Dienstleistungen</h1>

        {#if page}
            <div class="wp-content prose prose-lg">
                {@html page.content}
            </div>
        {:else}
            <div class="text-center py-12">
                <p class="text-gray-600">Diese Seite wurde noch nicht erstellt.</p>
            </div>
        {/if}
    </div>
</div>
