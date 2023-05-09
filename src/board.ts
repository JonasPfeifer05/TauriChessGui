import {Figure} from "./figureTypes";

export class Board {
    board: Figure[][];

    constructor() {
        this.board = [];
        for (let i = 0; i < 8; i++) {
            let figureRow = [];
            for (let j = 0; j < 8; j++) {
                figureRow.push(Figure.empty())
            }
            this.board.push(figureRow)
        }
    }

    setup() {
        for (let i = 0; i < 8; i++) {
            this.board[1][i] = Figure.blackPawn();
            this.board[6][i] = Figure.whitePawn();
        }
        this.board[0][0] = Figure.blackRook();
        this.board[0][1] = Figure.blackKnight();
        this.board[0][2] = Figure.blackBishop();
        this.board[0][3] = Figure.blackQueen();
        this.board[0][4] = Figure.blackKing();
        this.board[0][5] = Figure.blackBishop();
        this.board[0][6] = Figure.blackKnight();
        this.board[0][7] = Figure.blackRook();

        this.board[7][0] = Figure.whiteRook();
        this.board[7][1] = Figure.whiteKnight();
        this.board[7][2] = Figure.whiteBishop();
        this.board[7][3] = Figure.whiteQueen();
        this.board[7][4] = Figure.whiteKing();
        this.board[7][5] = Figure.whiteBishop();
        this.board[7][6] = Figure.whiteKnight();
        this.board[7][7] = Figure.whiteRook();
    }
}