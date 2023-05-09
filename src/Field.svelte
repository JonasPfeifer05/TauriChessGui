<script lang="ts">
    import {dndzone} from "svelte-dnd-action";
    import {flip} from "svelte/animate";
    import {Figure} from "./figureTypes";

    export let items: Figure[] = [];
    export let x = 0;
    export let y = 0;

    let light = !(y % 2 === 0 ^ x % 2 === 0);

    const flipDurationMs = 50;

    function handleDnd(e) {
        items = e.detail.items;
    }
</script>

<style>
    :root {
        --dark-color: black;
        --light-color: white;

        --dark-highlight-color: red;
        --light-highlight-color: blue;
    }

    .light {
        background-color: var(--light-color);
    }

    .dark {
        background-color: var(--dark-color);
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 90%;
        height: 90%;
    }
</style>

<div class:light={light} class:dark={!light} use:dndzone={{items, flipDurationMs, dropTargetStyle: ""}}
     on:consider={handleDnd} on:finalize={handleDnd}>
    {#each items as item (item.id)}
        <div animate:flip>
            <img src="{item.img}" alt="">
        </div>
    {/each}
</div>