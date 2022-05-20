<script>
	import Card from './lib/Card.svelte';
	// @ts-ignore
	import { browser } from '$app/env';

	let cards = [];

	async function refresh() {
		if (!browser) return;

		cards = await fetch('/cards').then((r) => r.json());

		// Sort cards by timestamp, most recent first
		cards.sort((a, b) => b.timestamp - a.timestamp);
	}

	setInterval(refresh, 1000);
</script>

{#each cards as { title, content, timestamp }}
	<Card {title} date={new Date(timestamp)}>{content}</Card>
{/each}
