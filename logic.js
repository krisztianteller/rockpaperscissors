
let playerScore = 0;
let computerScore = 0;

//creating a random outcome
function computerPlay(){
   const number = Math.floor(Math.random() * 3);
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


//checking winner
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
        return "You win!";
}

};
//create input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Some input', (answer) => {
  // TODO: Log the answer in a database
  console.log(`user input result: ${answer}`);

  rl.close();
});

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));