<script lang="ts">
    import {Board} from "./board";
    import Field from "./Field.svelte";
    import {Figure} from "./figureTypes";
    import {setContext} from "svelte";

    let board = new Board();
    board.setup();

    let draggedPos: [number, number] = [0,0];
    let droppedPos: [number, number] = [0,0];

    setContext("dragging", { drag, drop, select, emptySelected })

    let selected: boolean[][];
    let selectedPositions: [number,number][] = []
    emptySelected();

    function emptySelected() {
        let tmp = [];
        for (let i = 0; i < 8; i++) {
            let tmp2 = [];
            for (let j = 0; j < 8; j++) {
                tmp2.push("");
            }
            tmp.push(tmp2)
        }
        selected = tmp;
        selectedPositions = [];
    }

    function select(y:number, x:number) {
        selected[0][0] = true;
        selectedPositions.push([0,0]);
        selected[1][0] = true;
        selectedPositions.push([1,0]);
        selected[2][0] = true;
        selectedPositions.push([2,0]);
        selected[3][0] = true;
        selectedPositions.push([3,0]);
        selected[4][0] = true;
        selectedPositions.push([4,0]);
    }

    function drag(y:number, x:number) {
        draggedPos = [y,x]
    }

    function drop(y:number,x:number) {
        let selected = false;
        for (let selectedPosition of selectedPositions) {
            if (selectedPosition[0] === y && selectedPosition[1] === x) {
                selected = true;
                break;
            }
        }
        emptySelected();
        if (!selected) return;
        if (draggedPos[0] === y && draggedPos[1] === x) return;

        droppedPos = [y,x]

        let figure = board.board[draggedPos[0]][draggedPos[1]];
        board.board[draggedPos[0]][draggedPos[1]] = Figure.empty();

        board.board[droppedPos[0]][droppedPos[1]] = figure;
    }
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
</style>

<main>
    <h1>Chess GUI</h1>

    <div id="board">
        {#each board.board as row, y}
            {#each row as element, x}
                <Field item={element} x="{x}" y="{y}" selectVal="{selected[y][x]}"></Field>
            {/each}
        {/each}
    </div>
</main>