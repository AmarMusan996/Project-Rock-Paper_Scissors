function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex];
}

function getHumanChoice() {
  const choices = prompt('Rock, Paper, or Scissors?', 'Rock').toLowerCase(); // Sta ako osoba klikne "Cancel"? Prompt vrijednost postaje null(null.toLowerCase). Dovest ce do error-a.
  return choices;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
// Human winning.  
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore += 1
    console.log(`You win! Nice job! The score is ${humanScore} to ${computerScore}`);
  }
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore += 1
    console.log(`You win! Nice job! The score is ${humanScore} to ${computerScore}`);
  }
  else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore += 1
    console.log(`You win! Nice job! The score is ${humanScore} to ${computerScore}`);
  }
// Computer winning.
  else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    computerScore += 1
    console.log(`Unlucky. You've lost. The score is ${humanScore} to ${computerScore}`);
  }
  else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    computerScore += 1
    console.log(`Unlucky. You've lost. The score is ${humanScore} to ${computerScore}`);
  }
  else if (computerChoice === 'paper' && humanChoice === 'rock') {
    computerScore += 1
    console.log(`Unlucky. You've lost. The score is ${humanScore} to ${computerScore}`);
  } 
// Draw
  else if (computerChoice === humanChoice) {
    console.log(`It's a draw. The score remains ${humanScore} to ${computerScore}`);
  }
  else {
    console.log('Wow, not sure what that was, try something else.')
  }
}

for (let i = 0; i < 5; i++) {
  const humanChoice = getHumanChoice()
  const computerChoice = getComputerChoice()
  
  playRound(humanChoice, computerChoice) 
}

function finalScore(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log(`Wow, it's a draw. The final score is ${humanScore} for you and ${computerScore} for the machine.`)
  }
  else if (humanScore > computerScore) {
    console.log(`Congradulations, you won! The final score is ${humanScore} for you and ${computerScore} for the machine.`)
  }
  else if (humanScore < computerScore) {
    console.log(`Uhh, you lost. The final score is ${humanScore} for you and ${computerScore} for the machine.`)
  }

} finalScore(humanScore, computerScore)