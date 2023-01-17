const choices = ["rock", "paper", "scissors"];

function playRound() {
	// Random computer choice
	let computerSelection = choices[Math.floor(Math.random() * choices.length)];
	
	// Asks player for their choice and converts to lowercase. If user enters anything outside of the choices it re-asks.
	let playerSelection = prompt("Rock, paper or scissors?");
	if (playerSelection === null) {
		alert("Game quit!");
		return "No result, the game was quit.";
	}
	while (!choices.includes(playerSelection.toLowerCase())) {
		playerSelection = prompt("Please enter rock, paper or scissors. Also check spelling");
		if (playerSelection === null) {
			alert("Game quit!");
			return "No result, the game was quit.";
		}
	}

	playerSelection = playerSelection.toLowerCase();
	// Compares player and computer choices and outputs accordingly
	if (playerSelection === computerSelection) {
		return `It's a tie! You both chose ${playerSelection}.`;

	} else if ((playerSelection === "rock" && computerSelection === "scissors") ||
	 		   (playerSelection === "scissors" && computerSelection === "paper") ||
			   (playerSelection === "paper" && computerSelection === "rock")) {
		return `You win! ${playerSelection} beats ${computerSelection}.`;

	} else {
		return `You lose! ${computerSelection} beats ${playerSelection}.`;
	}
}
console.log(playRound());
