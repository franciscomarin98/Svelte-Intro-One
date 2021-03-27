<script>
    // your script goes here
    let skills = [
        {
            id: 1,
            name: "Angular",
        },
        {
            id: 1,
            name: "Svelte",
        },
        {
            id: 1,
            name: "React",
        },
        {
            id: 1,
            name: "Node",
        },
    ];
</script>

<div class="Skills">
    <!-- Forma 1 de hacerlo -->
    <h3>Forma 1: </h3>
    {#each skills as skill}
        <!-- content here -->
        <ul>
            <li>{skill.name}</li>
        </ul>
    {/each}

    <span style="margin: 15px"></span>
    <!-- Forma 2 de hacerlo -->
    <h3>Forma 2: </h3>
    {#each skills as { name }}
        <ul>
            <li>{name}</li>
        </ul>
    {/each}
</div>

<style>
    /* your styles go here */
    .Skills{
        display:flex;
        align-items:center;
        justify-content: center;
    }

    ul{
        margin:0;
        padding: 0;
        list-style: none;
    }
    li{
        display: inline;
        margin: 0 0 0 0.4em;
    }
</style>