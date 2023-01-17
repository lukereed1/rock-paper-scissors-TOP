const choices = ["rock", "paper", "scissors"];
let playerSelection = " ";
let computerSelection = " ";
let playerScore = 0;
let computerScore = 0;

function playRound() {
	// Random computer choice
	computerSelection = choices[Math.floor(Math.random() * choices.length)];

	// Asks player for their choice and converts to lowercase. If user enters anything outside of the choices it re-asks
	playerSelection = prompt("Rock, paper or scissors?");
	if (playerSelection === null) {
		playerSelection = "Nothing!";
		alert("Round quit");
		return "No result, the round was quit";
	}
	while (!choices.includes(playerSelection.toLowerCase())) {
		playerSelection = prompt(
			"Please enter rock, paper or scissors. Also check spelling"
		);
		if (playerSelection === null) {
			playerSelection = "Nothing!";
			alert("Round quit");
			return "No result, the round was quit";
		}
	}
	playerSelection = playerSelection.toLowerCase();

	// Compares player and computer choices and outputs accordingly
	if (playerSelection === computerSelection) {
		return `It's a tie! You both chose ${playerSelection}.`;
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock")
	) {
		++playerScore;
		return `You win! ${playerSelection} beats ${computerSelection}.`;
	} else {
		++computerScore;
		return `You lose! ${computerSelection} beats ${playerSelection}.`;
	}
}

//Starts a five round game, giving both choices and a score update each round and a final result at the end
function game() {
	for (i = 1; i <= 5; ++i) {
		let result = playRound();
		console.log(`Round ${i}: `);
		console.log(`Player chose: ${playerSelection}`);
		console.log(`Computer chose: ${computerSelection}`);
		console.log(result);
		console.log(`Player score: ${playerScore}`);
		console.log(`computerScore: ${computerScore}`);
		console.log("----------------------------------");
	}

	console.log(`Final score:`);
	console.log(`Player: ${playerScore}`);
	console.log(`Computer: ${computerScore}`);

	if (playerScore === computerScore) {
		console.log("It's a draw! Try again");
	} else if (playerScore > computerScore) {
		console.log("You win! Nice job");
	} else {
		console.log("You lost! Better luck next time");
	}
}
