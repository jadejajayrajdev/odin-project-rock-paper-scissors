let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return "rock";
  } else if (choice > 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let choice = prompt(
    "Enter your choice: \n 1: rock \n 2: paper \n 3: scissor",
  );
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else if (choice == 3) {
    return "scissor";
  } else {
    console.log("invalid choice");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (computerChoice === "rock" && humanChoice === "scissor") ||
    (computerChoice === "scissor" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    console.log("You Lose!");
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissor" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissor")
  ) {
    humanScore++;
    console.log("You Win!");
  } else {
    console.log("Draw");
  }
  console.log(`computer had selected: ${computerChoice}`);
  console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
}

playGame();
