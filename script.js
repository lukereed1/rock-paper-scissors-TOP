const choices = ["rock", "paper", "scissors"];

function computerRandom() {
	let random = Math.floor(Math.random() * 3);
	switch (random) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
	}
}

const body = document.querySelector("body");
const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissors = document.querySelector("#scissors");
const resultList = document.createElement("ul");

userRock.addEventListener("click", playRound);
userPaper.addEventListener("click", playRound);
userScissors.addEventListener("click", playRound);

body.appendChild(resultList);

function playRound(e) {
	const playerSelection = e.target.id;
	const computerSelection = computerRandom();
	const listItem = document.createElement("li");
	if (playerSelection === computerSelection) {
		listItem.appendChild(
			document.createTextNode(`It's a draw, you both chose ${playerSelection}!`)
		);
		resultList.appendChild(listItem);
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock")
	) {
		listItem.appendChild(
			document.createTextNode(
				`You win, ${playerSelection} beats ${computerSelection}!`
			)
		);
		resultList.appendChild(listItem);
	} else {
		listItem.appendChild(
			document.createTextNode(
				`You lose, ${computerSelection} beats ${playerSelection}!`
			)
		);
		resultList.appendChild(listItem);
	}
}
