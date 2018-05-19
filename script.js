/* var rock = 0;
var paper = 1;
var scissors = 2; */
//generates random numbers to represent rock, paperor scissors
function computerPlay (){
    return Math.floor(Math.random() * 3);
}
const computerSelection = computerPlay();
//console.log(computerSelection);
let computerScore = 0;
let playerScore = 0;
let msg = '';
let displayMsg = document.getElementById("msg");

const buttonSelect = document.getElementById("items");

function clickHandler(e){
    let playerSelection = e.target.value;
    //console.log(playerSelection);
    playRound(playerSelection, computerSelection);

    console.log(playerScore +":" + computerScore)

    document.getElementById("user_score").innerHTML = playerScore;
    document.getElementById("computer_score").innerHTML = computerScore;

    totalScore();
}


buttonSelect.addEventListener("click", clickHandler);

//playround function
function playRound(playerSelection, computerSelection){
    
    if( playerSelection === 'rock' && computerSelection === 0){
        
        document.getElementById("message").innerHTML = "You both chose Rock. It's a draw";

    }else if( playerSelection === "paper" && computerSelection === 1){

        document.getElementById("message").innerHTML = "You both chose Paper. It's a draw";
    }else if( playerSelection === "scissors" && computerSelection === 2){
        
        document.getElementById("message").innerHTML = "You both chose Scissors. It's a draw";
    }
    else if( playerSelection === "rock" && computerSelection === 2){
        
        document.getElementById("message").innerHTML = "You chose Rock, Computer chose Scissors. Rock beats Scissors!";
        playerScore+=1;
    }else if( playerSelection === "paper" && computerSelection === 0){
        
        document.getElementById("message").innerHTML = "You chose Paper Computer chose Rock.Paper beats Rocks!";
        playerScore+=1;
    }else if( playerSelection === "scissors" && computerSelection === 1){
        
        document.getElementById("message").innerHTML = "You chose scissors, Computer chose paper.Scissors beats paper!!";
        playerScore+=1;
    }else if( playerSelection === "scissors" && computerSelection === 0){
        //console.log("Rock beats scissors Computer Wins");
        document.getElementById("message").innerHTML = "You chose Scissors, Computer chose Rock. Rock beats scissors!";
        computerScore+=1;
        
    }else if( playerSelection === "rock" && computerSelection === 1){
        //console.log("Paper beats Rocks. computer WIns!!!");
        document.getElementById("message").innerHTML = "You chose Rock, Computer Chose Paper. Paper beats Rocks!";
        computerScore+=1;
    }else if( playerSelection = "paper" && computerSelection === 2){
        //console.log('Scissors beats paper computer wins');
        document.getElementById("message").innerHTML = "You chose Paper, Computer chose Scissors.Scissors beats paper!";
        computerScore+=1;
    }else{
        //console.log('check your spelling or chose one of the three options');
        document.getElementById("message").innerHTML = "check your spelling or chose one of the three options";
    }
}


function totalScore(){
    if(computerScore > playerScore){
        //console.log("This is computer score : " +computerScore + " This is your Score: " +playerScore)
        //console.log("computer wins this round");
        document.getElementById("winner").innerHTML = "Computer Wins this Round";
    }else if( playerScore > computerScore){
        //console.log("you win this round");
        document.getElementById("winner").innerHTML = "You win this round";
    }else{
        //console.log("It's a draw. Nobody wins play again");
        document.getElementById("winner").innerHTML = "It's a draw, play again";
    }
}


document.getElementById("reset").addEventListener('click', function(){
    //alert('game will reset!')
    const reset= document.location.href="";
});