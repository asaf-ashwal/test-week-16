import {
  currentPlayer,
  currentScore,
  resetAllGame,
  resetGame,
  rollDice,
  win,
} from "./funtions.js";

const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", (e) => {
  resetAllGame();
});

const rollDiceButton = document.querySelector(".roll-dice");
rollDiceButton.addEventListener("click", (e) => {
  rollDice();
});

const hold = document.querySelector(".hold");
hold.addEventListener("click", (e) => {
  resetGame(currentScore, currentPlayer);
});
