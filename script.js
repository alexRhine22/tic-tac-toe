const gameBoard = (() => {
    const squares = [];
    const gameGrid = document.getElementById('game-grid');
    let gameBoardArr = ['', '', '', '', '', '', '', '', ''];

    gameBoardArr.forEach(function (tile, index) {
        let div = document.createElement('div');
        div.innerHTML = tile;
        div.classList.add('box');  // Adds box style to each box in tic-tac-toe grid
        div.setAttribute('id', index);
        squares.push(div); // add square to square array
        gameGrid.append(div); // Add div to gamegrid
    });

    return { squares }
})();

function render() {
    gameBoard.squares.forEach(square => {
        square.addEventListener("click", function () {
            if (square.innerHTML !== 'O' || square.innerHTML !== 'X') {
                square.innerHTML = 'X';
            }    
        });
    });
}

document.getElementById('reset-game').addEventListener("click", function () {
    // event listener for reset game button
    gameBoard.squares.forEach(square => {
        square.innerHTML = '';
    });

});

render();