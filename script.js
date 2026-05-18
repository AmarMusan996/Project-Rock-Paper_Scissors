
// Computer choice

function getComputerChoice() {
// Gets a random number between 1 and 3
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

// The value of "choice" is the random number from the function getComputerChoice()
let choice = getComputerChoice();

// Checking and converting the random number in to one of three possible results (Rock, Paper, Scissors)
    if (choice == 1) {
            console.log('Rock');
        }

        else if (choice == 2) {
            console.log('Paper')
        }

        else {
            console.log('Scissors')
        }

// Capturing the human choice by using the prompt for human to write out the choice
function getHumanChoice() {
    let human = window.prompt('Rock, Paper or Scissors?');
    return human;
}
// Value of "human" is whatever was writen in the prompt in function getHumanChoice()
let human = getHumanChoice();

// Checking what the human player has written
if (human == 'Rock') {
        console.log('Rock');
        }
        else if (human == 'Paper') {
        console.log('Paper');
        }
        else { 
        console.log('Scissors');
    }

// Score keeper

let humanScore = 0;
let computerScore = 0;


// Single round

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
// Covjek dobija rundu
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
       humanScore += 1
    console.log('Rundu dobija igrac');
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1
    console.log('Rundu dobija igrac');
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore += 1
    console.log('Rundu dobija igrac');
    }
// Kompjuter dobija rundu
    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        computerScore += 1
        console.log('Rundu dobija kompjuter');
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore += 1
        console.log('Rundu dobija kompjuter');
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        computerScore += 1
        console.log('Rundu dobija kompjuter')
    }
// Nerijesena runda
    else if (humanChoice == 'rock' && computerChoice == 'rock') {
    console.log('Nerijeseno');
    }
    else if (humanChoice == 'paper' && computerChoice == 'paper') {
    console.log('Nerijeseno');
    }
    else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
    console.log('Nerijeseno');
    }
}