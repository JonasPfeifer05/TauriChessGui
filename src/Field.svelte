<script lang="ts">
    import {Figure} from "./figureTypes";
    import {getContext} from "svelte";

    export let item: Figure = Figure.empty();
    export let x = 0;
    export let y = 0;
    export let selectVal = "";

    let light = !(y % 2 === 0 ^ x % 2 === 0);

    const {drag, drop, select, emptySelected} = getContext("dragging")
</script>

<style>
    :root {
        --dark-color: black;
        --light-color: white;

        --dark-highlight-color: #008000;
        --light-highlight-color: #80FF80;
    }

    .light {
        background-color: var(--light-color);
    }

    .dark {
        background-color: var(--dark-color);
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
    }

    .grab {
        cursor: grab;
    }

    img {
        width: 90%;
        height: 90%;
    }

    .selectedLight {
        background-color: var(--light-highlight-color);
    }

    .selectedDark {
        background-color: var(--dark-highlight-color);
    }
</style>

<div class="outerContent"
     class:light={light}
     class:dark={!light}
     class:selectedLight={light && selectVal}
     class:selectedDark={!light && selectVal}
>
    <div class="content"
         draggable={item.id !== "-1"}
         class:grab={item.id !== "-1"}
         on:drop={(e) => {drop(y,x)}}
         on:dragover={(ev) => {ev.preventDefault()}}
         on:dragstart={() => {drag(y,x)}}
         on:mousedown={() => {select(y,x)}}
         on:mouseenter={() => {select(y,x)}}
         on:mouseleave={() => {emptySelected()}}
    >
        {#if item.id !== "-1"}
            <img src="{item.img}">
        {/if}
    </div>
</div>