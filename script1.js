// script.js
let currentPlayer = 'X';
let gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

function handleClick(index) {
    if (gameStatus[index] === '-' && !checkWinner()) {
        gameStatus[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        } else if (!gameStatus.includes('-')) {
            document.getElementById('status').innerText = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameStatus[a] !== '-' && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}