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

// Todo: Scroll hero to the left
function scrollToLeft() {
  // Do Something...
}

// Todo: Scroll hero to the right
function scrollToRight() {
  // Do something...
}

// Todo: Handle select hero for player 1
function selectHeroPlayer1() {
  // Do something...
}

// Todo: Handle select hero for player 2
function selectHeroPlayer2() {
  // Do something...
}

function closeModal() {
  document.getElementById('modal-heroes').style.display = 'none'
}

// Test
window.onclick = event => {
  if (event.target === document.getElementById('modal-heroes')) {
    closeModal()
  }
}

// Test
document.querySelector('.btn').addEventListener('click', () => {
  document.getElementById('modal-heroes').style.display = 'block'
})