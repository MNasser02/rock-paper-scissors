function computerPlay(){
    random = Math.random()
    return (random < 0.33) ? "rock" : (random < 0.66) ? "paper" : "scissors";
}


function singleRound(playerSelection, computerSelection){
    let player =playerSelection.toLowerCase();
     switch (player){
        case "rock": 
            if (computerSelection == "rock"){
                return "Tie -_-";
            }
            if (computerSelection == "paper"){
                return "You Lose! Better luck next round";
            }
            if (computerSelection == "scissors"){
                return "You are VICTORIOUS!";
            }
        case "paper": 
            if (computerSelection == "rock"){
                return "You are VICTORIOUS!";
            }
            if (computerSelection == "paper"){
                return "Tie -_-";
            }
            if (computerSelection == "scissors"){
                return "You Lose! Better luck next round";
            }
        case "scissors":
        case "scissor": 
            if (computerSelection == "rock"){
                return "You Lose! Better luck next round";
            }
            if (computerSelection == "paper"){
                return "You are VICTORIOUS!";
            }
            if (computerSelection == "scissors"){
                return "Tie -_-";
            }
        default:
            return false;
        }
}

function game(gamesNumber){
    let playerSelection = "";
    let computerSelection = "";
    let compScore = 0, playerScore = 0;
    for (let i = 0; i < gamesNumber ; i++){
        playerSelection = window.prompt("Your Choice Is:");
        computerSelection = computerPlay();
        result = singleRound(playerSelection, computerSelection);
        if (!result){
            console.log("Invalid input, try again");
            i--;
            continue;
        }else {
        console.log("You're opponent chose " + computerSelection + "..." + result); 
        if (result == "You are VICTORIOUS!"){
            playerScore++;
        }
        else if (result == "You Lose! Better luck next round"){
            compScore++;
        }
        console.log("YOU vs AI(or perhaps a random generator): " + playerScore + "-" + compScore ); 
        }
    }
    let winner = (playerScore > compScore) ? "HUMANITY" : (playerScore == compScore) ? "Boring...It's a TIE" : "ARTIFICIAL INTELLIGENCE";
    console.log("WINNER: "+ winner);
}
let nmber = "";
do {
   let gamesNumber = window.prompt("How many games are you willing to play?");
   nmber = parseFloat(gamesNumber);
} while (!(Number.isInteger(nmber)) || nmber < 1);

game(nmber);


