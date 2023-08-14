const cells = document.querySelectorAll('.cell')
let currentPlayer = 'X'
let gameEnded = false

function checkWin(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  return winningCombinations.some((combination) => {
    return combination.every((index) => cells[index].textContent === player)
  })
}

function checkDraw() {
  return Array.from(cells).every((cell) => cell.textContent !== '')
}

function endGame(result) {
  gameEnded = true
  alert(result)
}

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (!cell.textContent && !gameEnded) {
      cell.textContent = currentPlayer

      if (checkWin(currentPlayer)) {
        endGame(`Player ${currentPlayer} wins!`)
      } else if (checkDraw()) {
        endGame("It's a draw!")
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      }
    }
  })
})
