

let gameBoard = () => {
    let gameBoardArr = ['','','','','','','','',''];

    let drawInSquare = (gameSymbol, boxNum) => {
        // if box is not drawn in add symbol
        if (gameBoardArr[boxNum] == '') {
            gameBoardArr[boxNum] = gameSymbol;
        }
    }

    let resetBoard = () => {
        // reset Game
        gameBoardArr = ['','','','','','','','',''];
    }
}