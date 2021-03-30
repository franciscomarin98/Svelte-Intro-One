<script>
    import { count } from "../store/store";

    const handleCountIncrement = () => {
        count.update((n) => n + 1);
    };
</script>

<!-- markup (zero or more items) goes here -->
<div class="ButtonCount">
    <button on:click={handleCountIncrement}>
        Counter click {$count === 0 ? "" : $count}
    </button>
</div>

<style>
    .ButtonCount button {
        background-color: orange;
        color: white;
        border: none;
        border-radius: 4px;
        padding: .5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
