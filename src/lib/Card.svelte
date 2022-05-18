<script>
    export let title;
    export let imageURL = null;
    export let imageAlt = null;
</script>

<div class="box">
    <h1>{title}</h1>
    {#if imageURL}
        <img src={imageURL} alt={imageAlt || "No alt text was provided"} />
    {/if}
    <slot></slot>
</div>