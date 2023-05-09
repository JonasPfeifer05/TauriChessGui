export class Figure {
    static whitePawn(): Figure {return new Figure(""+Math.random(), "/white_pawn.png")}
    static blackPawn(): Figure {return new Figure(""+Math.random(), "/black_pawn.png")}
    static whiteRook(): Figure {return new Figure(""+Math.random(), "/white_rook.png")}
    static blackRook(): Figure {return new Figure(""+Math.random(), "/black_rook.png")}
    static whiteKnight(): Figure {return new Figure(""+Math.random(), "/white_knight.png")}
    static blackKnight(): Figure {return new Figure(""+Math.random(), "/black_knight.png")}
    static whiteBishop(): Figure {return new Figure(""+Math.random(), "/white_bishop.png")}
    static blackBishop(): Figure {return new Figure(""+Math.random(), "/black_bishop.png")}
    static whiteQueen(): Figure {return new Figure(""+Math.random(), "/white_queen.png")}
    static blackQueen(): Figure {return new Figure(""+Math.random(), "/black_queen.png")}
    static whiteKing(): Figure {return new Figure(""+Math.random(), "/white_king.png")}
    static blackKing(): Figure {return new Figure(""+Math.random(), "/black_king.png")}
    static empty(): Figure {return new Figure("-1", "/empty.png")}

    id: string;
    img: string;
   private constructor(id: string, img: string) {
        this.id = id;
        this.img = img;
   }

   randomise(): Figure {
       this.id = ""+Math.random()*1000;
       return this;
   }
}