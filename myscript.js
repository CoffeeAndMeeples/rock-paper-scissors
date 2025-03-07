
// create a ffunction called getComputerChoice that takes no argument and returns 
// one of "rock", "paper", or "scissors"
function getComputerChoice() {
    // get a number between 0 and 2
    let computerChoice = Math.floor(Math.random() * 3);
    //if 0, return rock
    if(computerChoice == 0){
        return("rock")
    }
    //if 1, return paper
    else if(computerChoice == 1) {
        return("paper");
    }
    //if 2 return scissors
    else {
        return("scissors")
    }
}

// create a function called getHumanChoice that prompts a user for either 
// "rock", "paper", or "scissors" -ignore defending against invalid input
function getHumanChoice() {
    //ask user for one of the three options
    let humanChoice = prompt("Choose your weapon!", "'rock', 'paper', or 'scissors'");
    
    // return the input
    return(humanChoice);
}
// create a function called playRound that takes 2 parameters of humanChoice and computerChoice
// that compares them and returns the results of a winner or draw
function playRound(humanChoice, computerChoice) {
    //get the human choice and make lowercase
   // let input = getHumanChoice();
    //humanChoice = input.toLowerCase();

    // get the computer choice
    //computerChoice = getComputerChoice();

    //compare 2 choices to declare a winner or tie
    let winner;
    // handle ties
    if(humanChoice === computerChoice) {
        winner = "Tie!  You both chose " + humanChoice;
    }
    // handle computer choosing rock
    else if (computerChoice === "rock") {
        if (humanChoice === "paper"){
            winner = "human";
        }
        else {
            winner = "computer";
        }

    }

    // computer choosing paper
    else if (computerChoice === "paper") {
        if (humanChoice === "scissors"){
            winner = "human";
        }
        else {
            winner = "computer";
        }
    }
    // commputer choosing scissors
    else {
        if (humanChoice === "rock"){
            winner = "human";
        }
        else {
            winner = "computer";
        }
    }

    //console.log the winner
    if (winner === "Tie") {
        console.log("Tie!");
    }
    else if(winner === "human") {
        console.log("You Win! You chose " + humanChoice + " and the Computer chose " + computerChoice + "!");
    }
    else {
        console.log("You Lose! You chose " + humanChoice + " and the Computer chose " + computerChoice + "!")
    }

    // increment the winner's score
    if(winner === "human") {
        humanScore++;
    }
    if(winner === "computer") {
        computerScore++;
    }

}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);

