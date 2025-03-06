
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

let weapon = getHumanChoice();
console.log(weapon);
