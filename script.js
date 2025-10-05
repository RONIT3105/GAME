// Game state
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// DOM elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const gameResultEl = document.getElementById('game-result');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const tieScoreEl = document.getElementById('tie-score');
const resetBtn = document.getElementById('reset-btn');

// Choices array
const choices = ['rock', 'paper', 'scissors'];

// Event listeners for choice buttons
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// Reset button
resetBtn.addEventListener('click', resetScore);

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'tie';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    
    // Update display
    playerChoiceEl.textContent = `Your choice: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    computerChoiceEl.textContent = `Computer choice: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    
    const winner = determineWinner(playerChoice, computerChoice);
    
    if (winner === 'tie') {
        tieScore++;
        gameResultEl.textContent = "It's a tie!";
        gameResultEl.style.color = '#666';
    } else if (winner === 'player') {
        playerScore++;
        gameResultEl.textContent = "You win!";
        gameResultEl.style.color = '#4CAF50';
    } else {
        computerScore++;
        gameResultEl.textContent = "Computer wins!";
        gameResultEl.style.color = '#f44336';
    }
    
    // Update scores
    updateScoreDisplay();
}

function updateScoreDisplay() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    tieScoreEl.textContent = tieScore;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    updateScoreDisplay();
    playerChoiceEl.textContent = 'Your choice: None';
    computerChoiceEl.textContent = 'Computer choice: None';
    gameResultEl.textContent = "Let's play!";
    gameResultEl.style.color = '#333';
}