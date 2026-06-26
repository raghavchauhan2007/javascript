let randNum = Math.floor(Math.random() * 100 + 1)

const userInput = document.getElementById('input')
const submit = document.getElementById('submit')
const previousGuesses = document.querySelector('.array')
const attempts = document.querySelector('.attempts-left')
const error = document.querySelector('.error')

let prevGuesses = []
let play = true

const endGame = () => {
    play = false
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    submit.innerHTML = 'Start New Game'
}

const newGame = () => { 
    submit.innerText = 'Submit Guess'
    randNum = Math.floor(Math.random() * 100 + 1)
    prevGuesses = []
    previousGuesses.innerText = 'Previous Guesses: '
    userInput.removeAttribute('disabled')
    attempts.innerHTML = '10'
    error.innerHTML = ''
    play = true
}

const displayMessage = (message) => {
    error.innerHTML = `<h2>${message}</h2>`
}

const cleanup = () => {
    userInput.value = ''
    previousGuesses.innerHTML += `${prevGuesses.at(prevGuesses.length-1)} | `
    attempts.innerHTML = 10-prevGuesses.length
}

const checkGuess = (guess) => {
    if (guess === randNum) {
        displayMessage(`You Guessed it Right!! 😎`)
        endGame()
    }

    else if (guess < randNum) {
        displayMessage(`Number is TOOO Low`)
    }

    else {
        displayMessage(`Number is TOOO High`)
    }
}

const validateGuess = (guess) => {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please give a valid number')
    }

    else {
        prevGuesses.push(guess)
        // Check the guess first (so a correct final guess wins)
        checkGuess(guess)
        cleanup()

        // If this was the 10th attempt and the player hasn't won, end the game
        if (prevGuesses.length === 10 && play) {
            displayMessage(`Game Over! ☹️ The number was ${randNum}`)
            endGame()
        }
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if (play) {
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    }

    else {
        newGame()
    }
})