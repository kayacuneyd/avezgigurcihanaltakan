<script lang="ts">
	import { page } from '$app/stores';
	
	let mobileMenuOpen = false;

	// reactive currentPath to ensure active state works after hard refresh
	let currentPath = '';
	$: currentPath = $page.url.pathname;

	const navItems = [
		{ title: 'Startseite', href: '/' },
		{ title: 'Über mich', href: '/ueber-mich' },
		{ title: 'Dienstleistungen', href: '/dienstleistungen' },
		{ title: 'Blog', href: '/blog' },
		{ title: 'Kontakt', href: '/kontakt' }
	];

	function isActive(href: string, pathname: string): boolean {
		if (href === '/') {
			return pathname === '/';
		}
		// Exact match or sub-route (e.g. /blog and /blog/my-post)
		return pathname === href || pathname.startsWith(href + '/');
	}
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
	<nav class="container-custom">
		<div class="flex justify-between items-center h-16">
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center space-x-3">
					<img
						src="/logo.svg"
						alt="Ezgi G. Altakan Logo"
						class="h-10 w-auto"
					/>
					<span class="text-xl font-bold text-gray-900 hidden sm:inline">
						Av. Ezgi G. Altakan
					</span>
				</a>
			</div>

			<div class="hidden md:flex md:space-x-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
						class:text-primary-600={isActive(item.href, currentPath)}
						class:border-b-2={isActive(item.href, currentPath)}
						class:border-primary-600={isActive(item.href, currentPath)}
						class:text-gray-700={!isActive(item.href, currentPath)}
						class:hover:text-primary-600={!isActive(item.href, currentPath)}
					>
						{item.title}
					</a>
				{/each}
			</div>

			<div class="hidden md:block">
				<a
					href="https://cal.com/avezgigurcihanaltakan/erstberatung"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-primary"
				>
					Termin vereinbaren
				</a>
			</div>

			<div class="md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
				>
					<span class="sr-only">Menü</span>
					{#if !mobileMenuOpen}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>

		{#if mobileMenuOpen}
			<div class="md:hidden pb-4">
				<div class="pt-2 pb-3 space-y-1">
					{#each navItems as item}
						<a
							href={item.href}
							class="block pl-3 pr-4 py-2 text-base font-medium"
							class:text-primary-600={isActive(item.href, currentPath)}
							class:bg-primary-50={isActive(item.href, currentPath)}
							class:text-gray-700={!isActive(item.href, currentPath)}
							on:click={() => (mobileMenuOpen = false)}
						>
							{item.title}
						</a>
					{/each}
				</div>

					<div class="pt-4 pb-3 border-t border-gray-200">
						<a
							href="https://cal.com/avezgigurcihanaltakan/erstberatung"
							target="_blank"
							rel="noopener noreferrer"
							class="block w-full mx-3 btn-primary text-center"
							on:click={() => (mobileMenuOpen = false)}
						>
							Termin vereinbaren
						</a>
				</div>
			</div>
		{/if}
	</nav>
</header>
