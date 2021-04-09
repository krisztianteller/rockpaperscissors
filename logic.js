
//creating a random outcome

function computerPlay(){
   const number = Math.floor(Math.random() * 1000);
   if( number % 3 === 0){
       return "rock";
   } 
   else if(number & 3 === 1){
        return "paper";
   }
   else{
       return "scissors";
   }
};

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats Rock.";
    }
    if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper.";
    }
    if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats Scissors.";
    } else {
        return "You won"
    }

}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));