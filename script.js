const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    resultDiv.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
};

rockBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound('rock', computerChoice);
});

paperBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound('paper', computerChoice);
});

scissorsBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound('scissors', computerChoice);
});