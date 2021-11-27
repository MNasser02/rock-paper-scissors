// Generate random computer choice
function computerPlay(){
    random = Math.random()
    return (random < 0.33) ? "rock" : (random < 0.66) ? "paper" : "scissors";
}

let scoreUser = 0;
let scoreCmp = 0;

//play out a single round between computer and player
function playRound(e){
    let result = "";
    let playerSelection = e.target.textContent;
   

    //account for all possible cases in the game
    let computerSelection = computerPlay();
     switch (playerSelection){
        case "ROCK": 
            if (computerSelection == "rock"){
                result = "Tie -_-";
            }
            if (computerSelection == "paper"){
                result = "You Lose! Better luck next time";
                scoreCmp++;
            }
            if (computerSelection == "scissors"){
                result = "You win this round!";
                scoreUser++;
            }
            break;
        case "PAPER": 
            if (computerSelection == "rock"){
                result = "You win this round!";
                scoreUser++;
            }
            if (computerSelection == "paper"){
                result = "Tie -_-";
            }
            if (computerSelection == "scissors"){
                result = "You Lose! Better luck next time";
                scoreCmp++;
            }
            break;
        case "SCISSORS":
            if (computerSelection == "rock"){
                result = "You Lose! Better luck next time";
                scoreCmp++;
            }
            if (computerSelection == "paper"){
                result = "You win this round!";
                scoreUser++;
            }
            if (computerSelection == "scissors"){
                result = "Tie -_-";
            }
            break;
        }

    //dislpay results to user
    const displayResult = document.querySelector('p');
    displayResult.textContent = "Your opponent chose " + computerSelection + "..." + result;
    const score = document.querySelector('h3');
    score.textContent = "YOU vs BOT: " + scoreUser + "-" + scoreCmp;

    if (scoreUser == 5){
        displayResult.textContent = "YOU SCORED 5 ~ VICTORY!"
        scoreUser = 0;
        scoreCmp = 0;
    }
    if (scoreCmp == 5){
        displayResult.textContent = "BOT SCORED 5 ~ DEFEAT!"
        scoreCmp = 0;
        scoreUser = 0;
    }
    
}


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);