<script lang="ts">
    import {Board} from "./board";
    import Field from "./Field.svelte";

    let board = new Board();
    board.setup();
</script>

<style lang="css">
    :root {
        --max-width: 40vw;
        --max-height: 75vh;
        --min-size: min(var(--max-height), var(--max-width));
    }

    * {
        font-family: Arial, sans-serif;
    }

    h1 {
        text-align: center;
    }

    #board {
        display: grid;

        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);

        width: var(--min-size);
        height: var(--min-size);

        margin: 10px auto;
    }

    .testImg {
        width: 50px;
        height: 50px;
    }
    .testContainer {
        width: 50px;
        height: 50px;

        background-color: yellow;
    }

    .drag {
        padding:20px;
        margin: 10px;
        cursor:grab;
        background: #efe;
    }
</style>

<main>
    <h1>Chess GUI</h1>

    <div id="board">
        {#each board.board as row, y}
            {#each row as element, x}
                <Field items={element} x="{x}" y="{y}"></Field>
            {/each}
        {/each}
    </div>
</main>