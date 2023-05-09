<script lang="ts">
    import {Figure} from "./figureTypes";
    import {scale, slide} from "svelte/transition";
    import {getContext} from "svelte";

    export let item: Figure = Figure.empty();
    export let x = 0;
    export let y = 0;

    let light = !(y % 2 === 0 ^ x % 2 === 0);

    const { drag, drop } = getContext("dragging")
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

    .outerContent {

    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        cursor: grab;
    }

    img {
        width: 90%;
        height: 90%;
    }
</style>

<div class="outerContent" class:light={light} class:dark={!light}>
    <div class="content"
         draggable="true"
         on:drop={(e) => {drop(y,x)}}
         on:dragover={(ev) => {ev.preventDefault()}}
         on:dragstart={() => {drag(y,x)}}>
        <img src="{item.img}">
    </div>
</div>