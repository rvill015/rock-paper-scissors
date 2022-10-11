var choices = [
    'Rock',
    'Paper',
    'Scissors'
];

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for(var x=0; x<20; x++)
    console.log(getComputerChoice(choices));

function playRound(playerSelection, computerSelection) {
    if computerSelection = "paper" {
        return "You Lose! Paper beats Rock"
    }
}

const playerSelection = "rock";
const computerSelection - getComputerChoice();
console.log(playRound(playerSelection, computerSelection));