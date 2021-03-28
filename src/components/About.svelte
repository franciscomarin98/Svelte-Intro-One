<script>
import Button from './Button.svelte';

    let someText = "Frontend Developer at Home";
    let count = 0;
    let styles = {
        darkMode: false,
    };

    const handleIncrement = () => {
        count++;
    };

    function toggle() {
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }
</script>

<div class="About">
    {#if !styles.darkMode}
         <!-- content here -->
         <p>{someText}</p>
    {:else}
         <!-- else content here -->
         <p>
             <span>Hello DarkMode</span>
        </p>
    {/if}
    <!-- <button on:click={handleIncrement}>
        Click {count === 0 ? "" : count}
    </button> -->
    <!-- <button on:click={toggle}>Dark Mode</button> -->
    <Button text="Click" 
            count={count}
            on:click={handleIncrement} />

    <Button text='DarkMode' 
            on:click={toggle} />
</div>

<style>
    p {
        color: var(--theme-color);
        font-size: 2rem;
    }
</style>
