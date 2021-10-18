const { checkPrime } = require("crypto");
const inquirer = require("inquirer");

let wins = 0;
let losses = 0;
let playerChoice;
let compSelect;

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "Do you want to play?",
        choices: ["Yes", "No"]
      },
    ])
    .then(({ start }) => {
      if (start === "Yes") {
        play();
      } else {
        console.log("GoodBye");
      }
    });
}

function play() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "playerChoice",
        message: "What do you choose?",
        choices: ["Rock", "Paper", "Scissors"],
      },
    ])
    .then((answer) => {
      playerChoice = answer.playerChoice;
      console.log(`You chose ${playerChoice}`);
      compChoice();
      check();
      start()
    });
}

function compChoice() {
  const rand = Math.floor(Math.random() * 3);
  computerChoices = ["Rock", "Paper", "Scissors"];
  compSelect = computerChoices[rand];
  console.log(`Computer chooses ${compSelect}`);
}

function check() {
  if (playerChoice === compSelect) {
    console.log("It's a tie!");
  } else if (playerChoice === "Rock" && compSelect === "Scissors" || playerChoice === "Paper" && compSelect === "Rock" || playerChoice === "Scissors" && compSelect === "Paper") {
    wins++;
    console.log("You win!");
    console.log(`${wins} wins, ${losses} losses`);
  } else {
    losses++;
    console.log("You Lose");
    console.log(`${wins} wins, ${losses} losses`);
  }
}

start();
