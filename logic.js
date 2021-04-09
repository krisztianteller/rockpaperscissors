alert("ACHTUNG!!!")

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
}