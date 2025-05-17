document.addEventListener("DOMContentLoaded", () => {
    const boxs = document.querySelectorAll('.cell');
    const Restart = document.querySelector('#Restart');

    let turn0 = true
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

    tiles.forEach((cell) => {
        cell.addEventListener("click", () => {
            console.log("clicked")
            if (turn0 == true) {
                cell.innerText = "O";
                turn0 = false;
            }
            else {
                cell.innerText = "X";
                turn0 = true;
            }
            cell.disabled = true;
        })

    })
})