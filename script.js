// Naming buttons to add events
const body = document.querySelector("body");
const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissors = document.querySelector("#scissors");
const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");

// User buttons that start each round
userRock.addEventListener("click", playRound);
userPaper.addEventListener("click", playRound);
userScissors.addEventListener("click", playRound);

// Display an error message if the user clicks a button on the computers side
computerRock.addEventListener("click", computerMessage);
computerPaper.addEventListener("click", computerMessage);
computerScissors.addEventListener("click", computerMessage);

// List created and added to body which is used to show round results
const resultList = document.createElement("ul");
body.appendChild(resultList);

function playRound(e) {
	const playerSelection = e.target.id;
	const computerSelection = computerRandom();
	const listItem = document.createElement("li");
	const winResult = document.createElement("li");
	const loseResult = document.createElement("li");
	const playAgainBtn = document.createElement("button");
	playAgainBtn.addEventListener("click", refreshPage); // Restarts game when button clicked
	playAgainBtn.textContent = "Play again?";
	playAgainBtn.classList.add("play-again-btn");
	removeUsersLastPick(); // Removes border from previous rounds choice
	removeCompsLastPick();
	this.classList.add("user-comp-choice"); // Puts a border around the users choice
	listItem.classList.add("result-list"); // Styles round result list
	if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock")
	) {
		listItem.appendChild(
			document.createTextNode(`You win, ${playerSelection} beats ${computerSelection}!`)
		); // Adds round result to list
		resultList.insertBefore(listItem, resultList.firstChild); // Ensures round result goes to top of list and not the bottom
		userWin(); // Adds a point to the scoreboard
		if (userScore.innerText >= 5) {
			winResult.classList.add("win-result");
			winResult.appendChild(document.createTextNode("Congratulations, you've won!"));
			resultList.insertBefore(winResult, resultList.firstChild);
			body.insertBefore(playAgainBtn, resultList);
			disableAllButtons(); // Disables all the buttons once the game has finished
		}
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "scissors" && computerSelection === "rock") ||
		(playerSelection === "paper" && computerSelection === "scissors")
	) {
		listItem.appendChild(
			document.createTextNode(`You lose, ${computerSelection} beats ${playerSelection}!`)
		);
		resultList.insertBefore(listItem, resultList.firstChild);
		computerWin();
		if (compScore.innerText >= 5) {
			loseResult.classList.add("lose-result");
			loseResult.appendChild(document.createTextNode("Unlucky, you lost!"));
			resultList.insertBefore(loseResult, resultList.firstChild);
			body.insertBefore(playAgainBtn, resultList);
			disableAllButtons();
		}
	} else {
		listItem.appendChild(
			document.createTextNode(`It's a draw, you both chose ${playerSelection}!`)
		);
		resultList.insertBefore(listItem, resultList.firstChild);
	}
	computerAnimation(computerSelection); // Highlights whatever choice was chosen for the computer
}

// Generates random choice for computer
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
// Puts a black border around whatever choice is randomly generated for the computer
function computerAnimation(computerRandom) {
	if (computerRandom === "rock") {
		computerRock.classList.add("user-comp-choice");
	} else if (computerRandom === "paper") {
		computerPaper.classList.add("user-comp-choice");
	} else if (computerRandom === "scissors") {
		computerScissors.classList.add("user-comp-choice");
	}
}
// Refresh function for the play again button
function refreshPage() {
	window.location.reload(true);
}
// Adds a point to the users score
function userWin() {
	userScore.innerText = Number(userScore.innerText) + 1;
}
// Adds a point to the computers score
function computerWin() {
	compScore.innerText = Number(compScore.innerText) + 1;
}
// Removes the styling of the users last pick
function removeUsersLastPick() {
	userRock.classList.remove("user-comp-choice");
	userPaper.classList.remove("user-comp-choice");
	userScissors.classList.remove("user-comp-choice");
}
// Removes the styling of the computers last pick
function removeCompsLastPick() {
	computerRock.classList.remove("user-comp-choice");
	computerPaper.classList.remove("user-comp-choice");
	computerScissors.classList.remove("user-comp-choice");
}
// Error message if user clicks wrong buttons
function computerMessage() {
	const errorMessage = document.createElement("li");
	errorMessage.classList.add("result-list");
	errorMessage.appendChild(
		document.createTextNode("You're not a computer, try the buttons on the other side")
	);
	resultList.insertBefore(errorMessage, resultList.firstChild);
}
// Disables all buttons for when the game is over
function disableAllButtons() {
	userRock.removeEventListener("click", playRound);
	userPaper.removeEventListener("click", playRound);
	userScissors.removeEventListener("click", playRound);
	computerRock.removeEventListener("click", computerMessage);
	computerPaper.removeEventListener("click", computerMessage);
	computerScissors.removeEventListener("click", computerMessage);
}
