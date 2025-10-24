<script lang="ts">
    import SEO from '../../components/SEO.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    const page = data.page;
</script>

<SEO
    title="Datenschutz"
    description={page?.excerpt || 'Informationen zum Datenschutz.'}
    image={page?.featured_image}
/
>

<div class="py-16">
    <div class="container-custom max-w-4xl">
        {#if page}
            <h1 class="text-4xl font-bold mb-8">{page.title}</h1>
            <div class="wp-content prose prose-lg">
                {@html page.content}
            </div>
        {:else}
            <p class="text-gray-600">Die Datenschutzseite muss in WordPress erstellt werden (Slug: datenschutz)</p>
        {/if}
    </div>
</div>
