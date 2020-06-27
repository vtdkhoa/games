let activePlayer, p1Health, p2Health,
  isPlaying, p1selectedHero, p2selectedHero

let heroes = [
  { id: 1, name: "gladiator", image: "images/heroes/gladiator/gladiator.png", item: "images/heroes/gladiator/spear.png" },
  { id: 2, name: "knight", image: "images/heroes/knight/knight.png", item: "images/heroes/knight/sword-shield.png" },
  { id: 3, name: "magician", image: "images/heroes/magician/magician.png", item: "images/heroes/magician/wand.png" },
  { id: 4, name: "ninja", image: "images/heroes/ninja/ninja.png", item: "images/heroes/ninja/shuriken.png" },
  { id: 5, name: "samurai", image: "images/heroes/samurai/samurai.png", item: "images/heroes/samurai/katana.png" },
  { id: 6, name: "warrior", image: "images/heroes/warrior/warrior.png", item: "images/heroes/warrior/dual-axe.png" },
  { id: 7, name: "werewolf", image: "images/heroes/werewolf/werewolf.png", item: "images/heroes/werewolf/claws.png" },
  { id: 8, name: "witch", image: "images/heroes/witch/witch.png", item: "images/heroes/witch/witch-wand.png" }
]

initTheGame()

/**
 * Handle events area
 */

// Todo: Handle roll the dice
document.querySelector('.btn-roll').addEventListener('click', () => {
  if (isPlaying) {
    // Random dice form 1 to 6
    let dice = Math.floor(Math.random() * 6) + 1

    // Display the dice
    let diceImg = document.querySelector('.dice')
    diceImg.style.display = 'block'
    diceImg.src = `images/dice/dice-${dice}.png`

    if (activePlayer === 0) {
      if (dice % 2 === 0) {
        // Do something...
      } else {
        // Do something...
      }
    }

    if (activePlayer === 1) {
      if (dice % 2 === 0) {
        // Do something...
      } else {
        // Do something...
      }
    }
  }
})

// Todo: Handle select hero for player 1
document.querySelector('#bl-player-0').addEventListener('click', () => {
  if (p1selectedHero) {
    document.getElementById('player-0-selected').textContent = ''
    document.getElementById('bl-player-0').textContent = 'select'
    p1selectedHero = false
  } else {
    document.getElementById('player-0-selected').textContent = 'selected'
    document.getElementById('bl-player-0').textContent = 'reselect'
    p1selectedHero = true
  }
})

// Todo: Handle select hero for player 2
document.querySelector('#bl-player-1').addEventListener('click', () => {
  if (p2selectedHero) {
    document.getElementById('player-1-selected').textContent = ''
    document.getElementById('bl-player-1').textContent = 'select'
    p2selectedHero = false
  } else {
    document.getElementById('player-1-selected').textContent = 'selected'
    document.getElementById('bl-player-1').textContent = 'reselect'
    p2selectedHero = true
  }
})

document.querySelector('.btn-new-game').addEventListener('click', () => {
  initTheGame()
})

/**
 * Declare functions area
 */

// Todo: Handle attack action
function attack() {
  // Do something...
}

// Todo: Handle heal action
function heal() {
  // Do something...
}

// Todo: Start the game
function initTheGame() {
  activePlayer = 0
  isPlaying = true
  p1Health = 100
  p2Health = 100
  p1selectedHero = false
  p2selectedHero = false

  document.getElementById('modal-heroes').style.display = 'block'
  document.querySelector('.dice').style.display = 'none'

  document.getElementById('current-health-0').textContent = '100'
  document.getElementById('current-health-1').textContent = '100'
}

// Todo: Scroll hero to the left
function scrollToLeft() {
  // Do Something...
}

// Todo: Scroll hero to the right
function scrollToRight() {
  // Do something...
}

function closeModal() {
  document.getElementById('modal-heroes').style.display = 'none'
}

function openModal() {
  document.getElementById('modal-heroes').style.display = 'block'
}

function switchPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
}

if (p1selectedHero && p2selectedHero) {
  closeModal()
}

// Test
window.onclick = event => {
  if (event.target === document.getElementById('modal-heroes')) {
    closeModal()
  }
}