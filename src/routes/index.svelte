<script>
	import Card from './lib/Card.svelte';
	import Footer from './lib/Footer.svelte';
	// @ts-ignore
	import { browser } from '$app/env';

	/**
	 * @type {any[]}
	 */
	export let cards;

	cards.sort((a, b) => b.timestamp - a.timestamp);

	async function refresh() {
		if (!browser) return;

		({ cards } = await fetch('/__data.json').then((r) => r.json()));

		// Sort cards by timestamp, most recent first
		cards.sort((a, b) => b.timestamp - a.timestamp);
	}

	setInterval(refresh, 1000);
</script>

{#each cards as { title, content, timestamp }}
	<Card {title} date={new Date(timestamp)}>{content}</Card>
{/each}

<Footer />