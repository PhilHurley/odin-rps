console.log("Rock, Paper, Scissors.");

//Get computer choice
function getComputerChoice(){
	var computer=Math.random();
	if(computer<0.333){
		return("rock");
	} else if(computer >0.333 && computer < 0.666){
		return("paper");
	} else {
		return("scissors");
	}
	return computerChoice;
	};
	
//Get human choice
function getHumanChoice(){
	var human=prompt("Which do you choose? Rock, Paper or Scissors?");
	if(human.toLowerCase()!="rock"&&human.toLowerCase()!="paper"&&human.toLowerCase()!="scissors"){
		return("Wrong!")
		getHumanChoice();
		return;
		} else {
			return(human.toLowerCase());
		};
	
};

//Setup scores
var humanScore=0;
var computerScore=0;

//Play a round

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("It's a draw!");
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    return ("You win! Rock beats scissors");
    humanScore++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return ("You lose! Paper beats rock");
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return ("You win! Paper beats rock");
    humanScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return ("You lose! Scissors beat paper");
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return ("You win! Scissors beat paper");
    humanScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return ("You lose!Rock beats scissors");
    computerScore++;
  }

	};
var result=playRound();
for(var i=0; i<5;i++){
	console.log(playRound(getHumanChoice(), getComputerChoice()));
};
console.log("Computer "+computerScore);
console.log("You " +humanScore);


