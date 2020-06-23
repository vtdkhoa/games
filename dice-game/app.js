let scores, roundScore, activePlayer,
  p1, p1Score, p1CurrentScore,
  p2, p2Score, p2CurrentScore,
  isGamePlaying

init()

// Todo: Handle roll the dice
document.querySelector('.btn-roll').addEventListener('click', () => {
  if (isGamePlaying) {
    // Random dice from 1 to 6
    let dice = Math.floor(Math.random() * 6) + 1

    // Display the dice
    let diceImg = document.querySelector('.dice')
    diceImg.style.display = 'block'
    diceImg.src = `images/dice-${dice}.png`

    // Update the round score if the rolled number is not 1
    if (dice !== 1) {
      // Add to score
      roundScore += dice
      document.querySelector(`#current-score-${activePlayer}`).textContent = roundScore
    } else {
      // Dice equal 1, switch to the next player
      switchPlayer()
    }
  }
})

// Todo: Handle hold the score
document.querySelector('.btn-hold').addEventListener('click', () => {
  if (isGamePlaying) {
    // Add the current score to the global score
    scores[activePlayer] += roundScore

    // Update to UI
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]

    // Check if player win the game
    if (scores[activePlayer] >= 100) {
      document.querySelector(`#name-${activePlayer}`).textContent = 'Winner !'
      document.querySelector('.dice').style.display = 'none'
      document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
      document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
      isGamePlaying = false // Game over, the winner has found
    } else {
      // Switch the next player
      switchPlayer()
    }
  }
})

// Todo: Handle start/reset a new game
document.querySelector('.btn-new-game').addEventListener('click', init)

function init() {
  scores = [0, 0] // [Player 1, Player 2]
  roundScore = 0
  activePlayer = 0 // 0: Player 1, 1: Player 2
  isGamePlaying = true // Game is playing or not

  document.querySelector('.dice').style.display = 'none'

  // Player 1
  p1 = document.querySelector('.player-0-panel')
  p1Score = document.getElementById('score-0').textContent = '0'
  p1CurrentScore = document.getElementById('current-score-0').textContent = '0'

  // Player 2
  p2 = document.querySelector('.player-1-panel')
  p2Score = document.getElementById('score-1').textContent = '0'
  p2CurrentScore = document.getElementById('current-score-1').textContent = '0'

  // Rename player name
  document.getElementById('name-0').textContent = 'Player 1'
  document.getElementById('name-1').textContent = 'Player 2'

  // Clear all display
  p1.classList.remove('winner')
  p2.classList.remove('winner')
  p1.classList.remove('active')
  p2.classList.remove('active')
  // Add active class in player 1
  p1.classList.add('active')
}

function switchPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  // Reset the previous player's score
  roundScore = 0
  p1CurrentScore = p2CurrentScore = '0'
  p1.classList.toggle('active')
  p2.classList.toggle('active')
  document.querySelector('.dice').style.display = 'block'
}