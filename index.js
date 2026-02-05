import { currentPlayer, currentScore, resetAllGame, resetGame, rollDice, win } from "./funtions.js";


const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", (e) => {
  resetAllGame();
  console.log(" newGameButton presed");

});


const rollDiceButton = document.querySelector(".roll-dice");
rollDiceButton.addEventListener("click", (e) => {
  rollDice();
  console.log(" rollDiceButton presed");
});

const hold = document.querySelector(".hold");
hold.addEventListener("click", (e) => {
  resetGame(currentScore, currentPlayer);
  console.log("hold prese");
});
