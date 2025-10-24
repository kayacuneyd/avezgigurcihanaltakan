<script lang="ts">
	import { page } from '$app/stores';
	
	let mobileMenuOpen = false;

	const navItems = [
		{ title: 'Ana Sayfa', href: '/' },
		{ title: 'Hakkımda', href: '/hakkimda' },
		{ title: 'Hizmetler', href: '/hizmetler' },
		{ title: 'Blog', href: '/blog' },
		{ title: 'İletişim', href: '/iletisim' }
	];

	function isActive(href: string): boolean {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(href);
	}
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
	<nav class="container-custom">
		<div class="flex justify-between items-center h-16">
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold text-gray-900">
					Av. Ezgi G. Altakan
				</a>
			</div>

			<div class="hidden md:flex md:space-x-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors
							{isActive(item.href)
								? 'text-primary-600 border-b-2 border-primary-600'
								: 'text-gray-700 hover:text-primary-600'}"
					>
						{item.title}
					</a>
				{/each}
			</div>

			<div class="hidden md:block">
				<a href="/iletisim" class="btn-primary">
					Randevu Al
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
							class="block pl-3 pr-4 py-2 text-base font-medium
								{isActive(item.href) ? 'text-primary-600 bg-primary-50' : 'text-gray-700'}"
							on:click={() => (mobileMenuOpen = false)}
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>
</header>
