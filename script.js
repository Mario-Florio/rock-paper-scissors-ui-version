//Declaring variables which will be used to keep track of score and round numnber
let playerScore = 0
let computerScore = 0
let roundNumber = 1

let roundNumberDisplay = document.querySelector('#round-number')
let playerScoreDisplay = document.querySelector('#player-score')
let computerScoreDisplay = document.querySelector('#computer-score')

roundNumberDisplay.textContent = `Round ${roundNumber}`
playerScoreDisplay.textContent = `Player score: ${playerScore}`
computerScoreDisplay.textContent = `Computer score: ${computerScore}`

console.log(`Round ${roundNumber}`)

//Function below randomly selcts 'Rock', 'Paper', or 'Scissors'
let computerChoice

let computerChoiceDisplay = document.querySelector('#computer-choice')

function getComputerChoice() {
    
    let CPU = Math.floor(Math.random() * 3)

    if (CPU === 0) {
        
        computerChoice = 'rock'
        console.log(`Computer choice: ${computerChoice}`)
        computerChoiceDisplay.textContent = 'Rock'

    } else if (CPU === 1) {
        
        computerChoice = 'paper'
        console.log(`Computer choice: ${computerChoice}`)
        computerChoiceDisplay.textContent = 'Paper'

    } else if (CPU === 2) {
        
        computerChoice = 'scissors'
        console.log(`Computer choice: ${computerChoice}`)
        computerChoiceDisplay.textContent = 'Scissors'
    }
}

//Function keeps track of variables associated with round number, resets when appropriate, and displays current round on UI
function roundTracker() {
        if (roundNumber < 6) {
            roundNumber++
            console.log(`Round: ${roundNumber}`)
            roundNumberDisplay.textContent = `Round ${roundNumber}`
        }

        if (roundNumber > 5) {
            roundNumberDisplay.textContent = 'Round 5'
            gameResults()
            resetGame()
        }
}

//Function gets player choice from button click which initiates game
let playerChoice

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

let playerChoiceDisplay = document.querySelector('#player-choice')

function playGame() {
    rock.addEventListener('click', () => {
        playerChoice = 'rock'
        console.log(`Player choice: ${playerChoice}`)
        playerChoiceDisplay.textContent = 'Rock'
        getComputerChoice()
        roundResults(playerChoice, computerChoice)
        roundTracker()
    })

    paper.addEventListener('click', () => {
        playerChoice = 'paper'
        console.log(`Player choice: ${playerChoice}`)
        playerChoiceDisplay.textContent = 'Paper'
        getComputerChoice()
        roundResults(playerChoice, computerChoice)
        roundTracker()
    })

    scissors.addEventListener('click', () => {
        playerChoice = 'scissors'
        console.log(`Player choice: ${playerChoice}`)
        playerChoiceDisplay.textContent = 'Scissors'
        getComputerChoice()
        roundResults(playerChoice, computerChoice)
        roundTracker()
    })
}

playGame()

//Function which plugs playerChoice and computerChoice to determine who won round and display results to UI
let resultsDisplay = document.querySelector('#results')


function roundResults(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {

        console.log('Its a draw')
        resultsDisplay.textContent = 'Its a draw'
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
        playerScoreDisplay.textContent = `Player score: ${playerScore}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`

    }

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        
        console.log('You win')
        resultsDisplay.textContent = `Rock beats scissors. You win!`
        playerScore++
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
        playerScoreDisplay.textContent = `Player score: ${playerScore}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`

    } 
    
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        
        console.log('You lose')
        resultsDisplay.textContent = `Paper beats rock. You lose.`
        computerScore++
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
        playerScoreDisplay.textContent = `Player score: ${playerScore}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`

    }
    
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        
        console.log('You win')
        resultsDisplay.textContent = `Paper beats rock. You Win!`
        playerScore++
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
        playerScoreDisplay.textContent = `Player score: ${playerScore}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`

    }
    
    if (playerChoice === 'paper' && computerChoice === 'scissors') {
        
        console.log('You lose')
        resultsDisplay.textContent = `Scissors beats paper. You lose.`
        computerScore++
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
        playerScoreDisplay.textContent = `Player score: ${playerScore}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`

    }

    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        
        console.log('You win')
        resultsDisplay.textContent = `Scissors beats paper. You win!`
        playerScore++
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
        playerScoreDisplay.textContent = `Player score: ${playerScore}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`

    }
    
    if (playerChoice === 'scissors' && computerChoice === 'rock') {
        
        console.log('You lose')
        resultsDisplay.textContent = `Rock beats scissors. You lose.`
        computerScore++
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
        playerScoreDisplay.textContent = `Player score: ${playerScore}`
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`

    } 
}

//Function displays game results to UI 
let gameResultsDisplay = document.querySelector('#game-results')

let playAgain = document.createElement('button')

playAgain.textContent = 'Play Again'

function gameResults() {
if (playerScore === computerScore) {
    gameResultsDisplay.textContent = `You and the computer both won ${playerScore} out of 5 rounds. It's a draw. `
    gameResultsDisplay.appendChild(playAgain)
}

if (playerScore > computerScore) {
    gameResultsDisplay.textContent = `You won ${playerScore} out of 5 rounds. You win! `
    gameResultsDisplay.appendChild(playAgain)
}

if (playerScore < computerScore) {
    gameResultsDisplay.textContent = `Computer won ${computerScore} out of 5 rounds. You lose. `
    gameResultsDisplay.appendChild(playAgain)
}
}

//Resets varaibles tracking game to base
function resetGame() {
    playAgain.addEventListener('click', () => {
    roundNumber = 1
    console.log(`Round: ${roundNumber}`)
    roundNumberDisplay.textContent = `Round ${roundNumber}`
    playerScore = 0
    computerScore = 0
    playerChoiceDisplay.textContent = ' '
    computerChoiceDisplay.textContent = ' '
    resultsDisplay.textContent = ' '
    playerScoreDisplay.textContent = `Player score: ${playerScore}`
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`
    gameResultsDisplay.textContent = ' '
    })
}