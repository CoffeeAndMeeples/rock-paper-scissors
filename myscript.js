
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
    return(humanChoice.toLowerCase());
}


// create playGame function
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // Run the playRound function 5 times incrementing and posting scores each time
    for(let i=0; i < 5; i++) {
        const humanSelection = (getHumanChoice());
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    // Declare a winner
    if (humanScore == computerScore) {
        console.log("It's a Tie! You both have " + humanScore + " points.");
    }
    else if (humanScore > computerScore) {
        console.log("You Win! " + humanScore  + " - " + computerScore);
    }
    else {
        console.log("The Computer Wins! " + computerScore + " - " + humanScore);
    }



// create a ffunction called getComputerChoice that takes no argument and returns 
// one of "rock", "paper", or "scissors"    
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
    
        //console.log the winner
        if (winner === "tie") {
            console.log("Tie!  You both chose " + humanChoice);
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

}

playGame();