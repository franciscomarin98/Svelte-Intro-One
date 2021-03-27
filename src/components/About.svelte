<script>
    let someText = "Frontend Developer at Home";
    let count = 0;
    const handleIncrement = () =>{
        count++;
    }
</script>

<div class="About">
    <p>{someText}</p>
    <button on:click={handleIncrement}>
        Click {count === 0 ? '' : count}
    </button>
</div>

<style>
    p {
        color: var(--theme-color);
        font-size: 2rem;
    }
</style>
