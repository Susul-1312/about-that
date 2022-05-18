<script>
    export let title;
</script>

<div class="box">
    <table>
    <td class="title">{title}</td>
    <td class="content"><slot></slot></td>
</table>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    .box {
        width: 90%;
        margin: auto;
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
</style>