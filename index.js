const choice = ["rock", "paper", "scissor"];
let playerWon = 0;
let computerWon = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = choice[randomNumber];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        playerWon = 1;
        computerWon = 1;
        return console.log("you both choose "+ playerSelection +", It's a tie");
    } else if (playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "scissor" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        playerWon = 1;
        return console.log("You Won! "+playerSelection+" beats "+ computerSelection);
    } else if (!(playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "scissor" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock")) {
        computerWon = 1;
        return console.log("You Lose! "+computerSelection+" beats "+ playerSelection);
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const player = prompt("Enter your choice!").toLowerCase();
        const computer = getComputerChoice();
        playRound(player, computer);
        
        if (playerWon == 1 && computerWon == 0){
            playerScore += 1;
        } else if (playerWon == 0 && computerWon == 1){
            computerScore += 1;
        } else if (playerWon == 1 && computerWon == 1){ 
            playerScore += 1;
            computerScore += 1;
        }
    }

    if (playerScore < computerScore){
        console.log("Computer Won the match");
    } else if (playerScore > computerScore){
        console.log("You Won the match");
    } else {
        console.log("It's a tie.")
    }

    console.log("Your Score = "+playerScore+" & Computer Score = "+computerScore);
}


game();