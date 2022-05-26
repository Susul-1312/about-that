<script>
    import { assets } from '$app/paths';
</script>

<footer>
    <a href="/"><img alt="About That Logo" src={`${assets}/favicon.png`} /></a>
	<p>Test</p>
	<p>test</p>
</footer>

<style lang="scss">
    $height: 60px;

    // TODO: fix this
    :global(body) {
        padding-bottom: $height;
    }

	footer {
        color: #fff;
        font-family: 'Roboto Mono', monospace;
		font-size: 0.8em;

        height: $height;
        margin-top: -$height;

        overflow: hidden;

        background-color: #222;
		width: 100%;

        img {
            height: 5em;
            float: left;
            margin-right: 0.5em;
        }
	}
</style>
