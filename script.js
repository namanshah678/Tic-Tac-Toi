window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.cell'))
    const playerDisplay = Array.from(document.querySelectorAll('.display-Player'))
    const resetButton = Array.from(document.querySelectorAll('#Restart'))
    const announcer = Array.from(document.querySelectorAll('.announcer'))

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const playerX_won = 'PlayerX_Won'
    const player0_won = 'Player0_Won'
    const Tie = 'TIE';

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const isValidAction = (cell) => {
        if (cell.innerText === 'X' || cell.innerText === "O") {
            return false;
        }
        return true;
    }

    const updateBoard = (index) =>{
        board[index] = currentPlayer;
    }
    const changePlayer = () =>{
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`Player${currentPlayer}`);
    }

    const 
})