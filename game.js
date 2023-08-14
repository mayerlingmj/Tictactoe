const boardContainer = document.getElementById('board')
const congratulationsPopup = document.getElementById('congratulationsPopup')
const winnerText = document.getElementById('winnerText')
const cells = []

function initializeGame() {
  cells.length = 0
  gameEnded = false
  currentPlayer = 'X'
  boardContainer.innerHTML = ''

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.className = 'cell'
    cell.addEventListener('click', handleCellClick)
    cells.push(cell)
    boardContainer.appendChild(cell)
  }
}

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
  winnerText.textContent = result
  congratulationsPopup.style.display = 'block'
}

function handleCellClick(event) {
  const cell = event.target

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
}

function restart() {
  initializeGame()
  congratulationsPopup.style.display = 'none'
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('startGame') === 'true') {
    initializeGame()
  }
})
