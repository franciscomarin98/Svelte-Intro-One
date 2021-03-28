<script>
    // your script goes here
    export let count = 0;
    export let text;
</script>

<div class="Button">
    <button on:click>{text} component {count === 0 ? "" : count}</button>
</div>

<!-- markup (zero or more items) goes here -->

<style>
    /* your styles go here */
</style>
