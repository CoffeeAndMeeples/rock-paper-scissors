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


function playRound(humanChoice, computerChoice) {
    //reset the UI if this is the start of a new game
    if(computerScore == 0 && humanScore == 0) {
        gameResult.textContent = "";
    }

    let winner;
    // handle ties
    if(humanChoice === computerChoice) {
        winner = "tie";
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

    //check for round result and announce winner
    if (winner === "tie") {
        roundResult.textContent = "Tie!  You both chose " + humanChoice;
    }
    else if(winner === "human") {
        roundResult.textContent = "You Win! You chose " + humanChoice + " and the Computer chose " + computerChoice + "!";
        humanScore++;
    }
    else {
        roundResult.textContent = "You Lose! You chose " + humanChoice + " and the Computer chose " + computerChoice + "!";
        computerScore++;
    }

    // update score on page
    score.textContent = "Person " + humanScore + " - " + "Computer " + computerScore;

    // check for winner
    if (humanScore == 5) {
        gameResult.textContent = "You Win! " + humanScore  + " - " + computerScore;
        computerScore = 0;
        humanScore = 0;
    }
    if (computerScore == 5) {
        gameResult.textContent = "The Computer Wins! " + computerScore + " - " + humanScore;
        computerScore = 0;
        humanScore = 0;

    }
}


// put event listener on buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
});
    

let humanScore = 0;
let computerScore = 0;

const gameResult = document.createElement("h1");
const roundResult = document.createElement("p");
const score = document.createElement("p");

score.textContent = "Person " + humanScore + " - " + "Computer " + computerScore;
const scores = document.querySelector(".results");

scores.appendChild(gameResult);
scores.appendChild(roundResult);
scores.appendChild(score);

