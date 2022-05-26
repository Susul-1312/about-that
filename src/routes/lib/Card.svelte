<script>
	export /**
	 * @type {String}
	 */
	let title;
	export /**
	 * @type {Date}
	 */
	let date;
</script>

<div class="box">
	<table>
		<td class="title">{title}</td>
		<td class="content"><slot /></td>
	</table>
	<time datetime={date.toISOString()}
		>{date.toLocaleDateString(undefined, {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		})}</time
	>
</div>

<style>
	.box {
		width: 90%;
		margin: 0 auto;
		margin-top: 1em;
		padding: 1em;
		border-radius: 1em;
		background-color: #050505;
		color: white;
		font-family: Raleway, sans-serif;
	}

	.title {
		vertical-align: middle;
		width: 20%;
		font-size: 3em;
	}

	.content {
		vertical-align: middle;
		font-size: 1.5em;
		width: 80%;
	}

	time {
		font-size: 0.8em;
		color: #aaa;
		font-family: 'Roboto Mono', monospace;
	}
</style>
