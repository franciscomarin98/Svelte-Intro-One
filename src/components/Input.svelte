<script>
    // your script goes here
    export let name = "World";
</script>

<!-- markup (zero or more items) goes here -->
<div class="Input">
    <input type="text" bind:value={name} />
    <p>Hello {name}!</p>
</div>

<style>
    /* your styles go here */
</style>
