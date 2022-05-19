<script>
	import Card from "./lib/Card.svelte";

	let cards = [];

	async function refresh() {
		cards = [
			{
				title: "Test Card",
				content:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis laborum, aperiam natus fuga dolores ad molestiae officia deserunt animi? Totam recusandae debitis sapiente saepe voluptatem quam aspernatur harum dolorem.",
				timestamp: Date(),
			},
		];
	}

	refresh();
</script>

{#each cards as { title, content, timestamp }, i (timestamp)}
	<Card {title} date={new Date(timestamp)}>{content}</Card>
{/each}
