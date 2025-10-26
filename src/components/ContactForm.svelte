<script lang="ts">
	let loading = false;
	let success = false;
	let error = '';

	let formData = {
		name: '',
		email: '',
		phone: '',
		subject: 'Erstberatung',
		message: '',
		dsgvo: false
	};

	async function handleSubmit() {
		error = '';
		success = false;
		loading = true;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (response.ok) {
				success = true;
				// Form temizle
				formData = {
					name: '',
					email: '',
					phone: '',
					subject: 'Erstberatung',
					message: '',
					dsgvo: false
				};
			} else {
				error = result.error || 'Ein Fehler ist aufgetreten.';
			}
		} catch (err) {
			error = 'Netzwerkfehler. Bitte versuchen Sie es später erneut.';
		} finally {
			loading = false;
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
	{#if success}
		<div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
			<p class="font-medium">✓ Nachricht erfolgreich gesendet!</p>
			<p class="text-sm mt-1">Wir werden uns in Kürze bei Ihnen melden.</p>
		</div>
	{/if}

	{#if error}
		<div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
			<p class="font-medium">✗ {error}</p>
		</div>
	{/if}

	<!-- Name -->
	<div>
		<label for="name" class="block text-sm font-medium text-gray-700 mb-1">
			Name <span class="text-red-500">*</span>
		</label>
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			required
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
			placeholder="Ihr vollständiger Name"
		/>
	</div>

	<!-- Email -->
	<div>
		<label for="email" class="block text-sm font-medium text-gray-700 mb-1">
			E-Mail <span class="text-red-500">*</span>
		</label>
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			required
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
			placeholder="ihre@email.de"
		/>
	</div>

	<!-- Telefon (optional) -->
	<div>
		<label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
			Telefon (optional)
		</label>
		<input
			type="tel"
			id="phone"
			bind:value={formData.phone}
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
			placeholder="+49 ..."
		/>
	</div>

	<!-- Betreff -->
	<div>
		<label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
			Betreff
		</label>
		<select
			id="subject"
			bind:value={formData.subject}
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
		>
			<option value="Erstberatung">Erstberatung</option>
			<option value="Mandatsanfrage">Mandatsanfrage</option>
			<option value="Allgemeine Frage">Allgemeine Frage</option>
		</select>
	</div>

	<!-- Nachricht -->
	<div>
		<label for="message" class="block text-sm font-medium text-gray-700 mb-1">
			Nachricht <span class="text-red-500">*</span>
		</label>
		<textarea
			id="message"
			bind:value={formData.message}
			required
			rows="6"
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
			placeholder="Beschreiben Sie kurz Ihr Anliegen..."
		></textarea>
		<p class="text-sm text-gray-500 mt-1">Mindestens 20 Zeichen</p>
	</div>

	<!-- DSGVO Checkbox -->
	<div class="flex items-start">
		<input
			type="checkbox"
			id="dsgvo"
			bind:checked={formData.dsgvo}
			required
			class="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
		/>
		<label for="dsgvo" class="ml-2 text-sm text-gray-700">
			Ich habe die <a href="/datenschutz" class="text-primary-600 hover:text-primary-700 underline" target="_blank">Datenschutzerklärung</a>
			gelesen und akzeptiere sie. <span class="text-red-500">*</span>
		</label>
	</div>

	<!-- Submit Button -->
	<button
		type="submit"
		disabled={loading || !formData.dsgvo}
		class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
	>
		{#if loading}
			Senden...
		{:else}
			Nachricht senden
		{/if}
	</button>
</form>
