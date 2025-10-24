<script lang="ts">
	export let siteSettings: any = null;

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-white">
	<div class="container-custom py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-lg font-bold mb-4">Av. Ezgi G. Altakan</h3>
				<p class="text-gray-400 mb-4">
					Profesyonel hukuki danışmanlık ve temsil hizmetleri.
				</p>
			</div>

			<div>
				<h3 class="text-lg font-bold mb-4">İletişim</h3>
				{#if siteSettings}
					<ul class="space-y-2 text-gray-400">
						<li>{siteSettings.phone}</li>
						<li>{siteSettings.email}</li>
						<li class="text-sm">{siteSettings.address}</li>
					</ul>
				{/if}
			</div>

			<div>
				<h3 class="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-400 hover:text-white">Ana Sayfa</a></li>
					<li><a href="/hakkimda" class="text-gray-400 hover:text-white">Hakkımda</a></li>
					<li><a href="/hizmetler" class="text-gray-400 hover:text-white">Hizmetler</a></li>
					<li><a href="/blog" class="text-gray-400 hover:text-white">Blog</a></li>
					<li><a href="/iletisim" class="text-gray-400 hover:text-white">İletişim</a></li>
				</ul>
			</div>
		</div>

		<div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
			<p>&copy; {currentYear} Ezgi G. Altakan. Tüm hakları saklıdır.</p>
			<div class="mt-2">
				<a href="/kvkk" class="hover:text-white">KVKK</a>
			</div>
		</div>
	</div>
</footer>
