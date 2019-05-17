// var rock = 0;
// var paper = 1;
// var scissors = 2;


let computerScore = 0;
let playerScore = 0;


//generates random numbers to represent rock, paperor scissors
function computerPlay (){
    return Math.floor(Math.random() * 3);
}
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){

    if( playerSelection === 'rock' && computerSelection === 0){
        console.log("it's a draw");
    }else if( playerSelection === "paper" && computerSelection === 1){
        console.log("it's a draw");
    }else if( playerSelection === "scissors" && computerSelection === 2){
        console.log("it's a draw");
    }
    else if( playerSelection === "rock" && computerSelection === 2){
        console.log("You win!!!");
        playerScore++;
    }else if( playerSelection === "paper" && computerSelection === 0){
        console.log("you Win!!!");
        playerScore++;
    }else if( playerSelection === "scissors" && computerSelection === 1){
        console.log('You Win!!!');
        playerScore++;
    }else if( playerSelection === "scissors" && computerSelection === 0){
        console.log("Computer Wins");
        computerScore++;
        
    }else if( playerSelection === "rock" && computerSelection === 1){
        console.log("computer WIns!!!");
        computerScore++;
    }else if( playerSelection = "paper" && computerSelection === 2){
        console.log('computer wins');
        computerScore++;
    }else{
        console.log('check your spelling or chose one of the three options');
    }
}

console.log("computer score: "+computerScore);
console.log("player score: "+playerScore);


//functon to record game score for the 5 rounds of the game
function game(){
    let gameRound = 0;
    while (gameRound < 5){
        let playerSelection = prompt("choose either rock, paper or scissors").toLowerCase(); // converts the players input to lower case
        playRound(playerSelection, computerSelection);
        gameRound++;
    }
    if(computerScore > playerScore){
        console.log("This is computer score : " +computerScore + " This is your Score: " +playerScore)
        console.log("computer wins this round");
    }else if( playerScore > computerScore){
        console.log("you win this round");
    }else{
        console.log("It's a draw. Nobody wins play again");
    }
}

game();

