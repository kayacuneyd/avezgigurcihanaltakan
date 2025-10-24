<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_SITE_URL } from '$env/static/public';

	export let title: string;
	export let description: string;
	export let image: string | null = null;
	export let canonical: string | null = null;

	$: fullTitle = title ? `${title} | Av. Ezgi G. Altakan` : 'Av. Ezgi G. Altakan - Hukuk Bürosu';
	$: canonicalUrl = canonical || `${PUBLIC_SITE_URL}${$page.url.pathname}`;
	$: ogImage = image || `${PUBLIC_SITE_URL}/og-default.jpg`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="Av. Ezgi G. Altakan" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
