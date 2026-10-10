function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return "rock";
  } else if (choice > 0.66) {
    return "paper";
  } else {
    return "scissors";
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
    return "scissors";
  } else {
    console.log("invalid choice");
    return getHumanChoice();
  }
}

console.log(getHumanChoice());
