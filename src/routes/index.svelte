<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let tgApp: TelegramWebApp;
	onMount(() => {
		tgApp = window.Telegram.WebApp;
		window.Telegram.WebApp.onEvent('viewportChanged', () => {
			tgApp = window.Telegram.WebApp;
		});

		onDestroy(() => {
			window.Telegram.WebApp.offEvent('viewportChanged', () => {
				tgApp = window.Telegram.WebApp;
			});
		});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<pre>{JSON.stringify(
		{ tgApp: typeof window !== 'undefined' ? window.Telegram.WebApp : undefined },
		null,
		2
	)}</pre>
