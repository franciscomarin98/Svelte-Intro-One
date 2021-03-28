<script>
    import { onMount } from "svelte";
    let photos = [];
    onMount(async () => {
        console.log('onMount')
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos?_limit=20"
        );
        photos = await response.json();
    });
</script>

<!-- markup (zero or more items) goes here -->
<div class="Photos">
    {#each photos as item}
        <figure>
            <img src="{item.thumbnailUrl}" alt={item.title} />
            <figcaption>{item.title}</figcaption>
        </figure>
    {:else}
        <p>Loading...</p>
    {/each}
</div>

<style>
    .Photos{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
    }

</style>
