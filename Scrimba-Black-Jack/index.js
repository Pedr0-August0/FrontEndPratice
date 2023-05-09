let firstCard = 8

let secondCard = 11

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let = message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame() {

	sumEl.textContent = "Sum: " + sum
	cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

	if (sum <= 20) {
		message = "Want to draw a new card?"

	} else if (sum === 21) {
		message = "Blackjack!"
		hasBlackJack = true

	} else {
		message = "You lose!"
		isAlive = false
	}

	messageEl.textContent = message
}

function newCard() {

	let card = 2

	sum += card

	startGame()
}



