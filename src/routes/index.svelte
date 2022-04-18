<script lang="ts">
	import { onMount } from 'svelte';
	let firstName: string = '';

	onMount(() => {
		firstName = window.Telegram.WebApp.initDataUnsafe.user.first_name || '';
	});

	function toggleMainButton() {
		const mainButton = window.Telegram.WebApp.MainButton;

		if (mainButton.isVisible) mainButton.hide();
		else mainButton.show();
	}
</script>

<h1>Hello {firstName}!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>
	If you are inteserted in Telegram web Bots please <a
		href="https://core.telegram.org/bots/webapps"
		target="_blank">click me</a
	>
</p>

<h2>Lets look at what Telegram Web Bots can do</h2>

<button on:click={toggleMainButton}>
	<h3>Show/Hide Main Button</h3>
</button>
<pre />
