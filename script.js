const body = document.querySelector("body");
const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissors = document.querySelector("#scissors");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");

// List created and added to body, used to show round results
const resultList = document.createElement("ul");
body.appendChild(resultList);

userRock.addEventListener("click", playRound);
userPaper.addEventListener("click", playRound);
userScissors.addEventListener("click", playRound);

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

// Updates scoreboard
const userWin = () => (userScore.innerText = Number(userScore.innerText) + 1);
const computerWin = () => (compScore.innerText = Number(compScore.innerText) + 1);

if (userScore.innerText >= 5) {
	listItem.classList.add("win-result");
	listItem.appendChild(document.createTextNode("Congratulations, you've won!"));
	resultList.insertBefore(listItem, resultList.firstChild);
	body.insertBefore(playAgainBtn, resultList);
	userRock.removeEventListener("click", playRound);
	userPaper.removeEventListener("click", playRound);
	userScissors.removeEventListener("click", playRound);
} else if (compScore.innerText >= 5) {
	listItem.classList.add("lose-result");
	listItem.appendChild(document.createTextNode("Unlucky, you lost!"));
	resultList.insertBefore(listItem, resultList.firstChild);
	body.insertBefore(playAgainBtn, resultList);
	userRock.removeEventListener("click", playRound);
	userPaper.removeEventListener("click", playRound);
	userScissors.removeEventListener("click", playRound);
}

function playRound(e) {
	const playerSelection = e.target.id;
	const computerSelection = computerRandom();
	const listItem = document.createElement("li");
	const winResult = document.createElement("li");
	const loseResult = document.createElement("li");
	const playAgainBtn = document.createElement("button");
	playAgainBtn.addEventListener("click", refreshPage);
	playAgainBtn.textContent = "Play again?";
	playAgainBtn.classList.add("play-again-btn");
	listItem.classList.add("result-list");
	if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock")
	) {
		listItem.appendChild(
			document.createTextNode(`You win, ${playerSelection} beats ${computerSelection}!`)
		);
		resultList.insertBefore(listItem, resultList.firstChild);
		userWin();
		if (userScore.innerText >= 5) {
			winResult.classList.add("win-result");
			winResult.appendChild(document.createTextNode("Congratulations, you've won!"));
			resultList.insertBefore(winResult, resultList.firstChild);
			body.insertBefore(playAgainBtn, resultList);
			disableUserButtons();
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
			disableUserButtons();
		}
	} else {
		listItem.appendChild(
			document.createTextNode(`It's a draw, you both chose ${playerSelection}!`)
		);
		resultList.insertBefore(listItem, resultList.firstChild);
	}
}

function disableUserButtons() {
	userRock.removeEventListener("click", playRound);
	userPaper.removeEventListener("click", playRound);
	userScissors.removeEventListener("click", playRound);
}

function refreshPage() {
	window.location.reload(true);
}
