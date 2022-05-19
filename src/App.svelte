<script>
	import Card from "./lib/Card.svelte";

	let cards = [];

	async function refresh() {
		cards = Array(20).fill(null).map(function() {
            return {
            timestamp: Math.floor(Math.random() * Date.now()),
            title: (Math.random() + 1).toString(36).substring(2),
            content: Array(Math.floor(Math.random() * 100)+ 110).fill(null).map(() => String.fromCharCode(Math.floor(Math.random()*25) + 97)).join(" ")
        }})

        // Sort cards by timestamp, most recent first
		cards.sort((a, b) => b.timestamp - a.timestamp);
	}

	refresh();
</script>

{#each cards as { title, content, timestamp }}
	<Card {title} date={new Date(timestamp)}>{content}</Card>
{/each}
