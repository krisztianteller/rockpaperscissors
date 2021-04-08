alert("ACHTUNG!!!")
var possibilities = ["Rock", "Paper", "Scissors"];
function computerPlay(){
    return possibilities[Math.floor(Math.random() * possibilities.length)];
    
}