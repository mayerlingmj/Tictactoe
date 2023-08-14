document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton')

  if (startButton) {
    startButton.addEventListener('click', () => {
      window.location.href = 'game.html'
    })
  }

  const board = document.getElementById('board')

  if (board) {
    const cells = Array.from(
      { length: 9 },
      (_, index) => `<div class="cell" data-index="${index}"></div>`
    )
    board.innerHTML = cells.join('')

    const cellElements = document.querySelectorAll('.cell')
    cellElements.forEach((cell) => {
      cell.addEventListener('click', handleCellClick)
    })
  }
  const currentPlayer = 'X'

  function handleCellClick(event) {
    const cell = event.target
    const index = cell.getAttribute('data-index')
  }
})
