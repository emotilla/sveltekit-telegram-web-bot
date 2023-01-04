<script>
	import { onMount } from 'svelte';

	//import '../styles/global.css';
	onMount(() => {
		window.Telegram.WebApp.ready();
	});
</script>

<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<slot />
