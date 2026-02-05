export let players = [
  { name: "player1", score: 0 },
  { name: "player2", score: 0 },
];
export let currentPlayer = 1;
export let currentScore = 0;
export let maxScore = 100;

export function getRandomNumber() {
  const min = 1;
  const max = 6;
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

export function rollDice() {
  const pictirs = [
    "./images/dice-1.png",
    "./images/dice-2.png",
    "./images/dice-3.png",
    "./images/dice-4.png",
    "./images/dice-5.png",
    "./images/dice-6.png",
  ];
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const dices = document.querySelectorAll(".img-dice");
  dices[0].src = pictirs[firstNum - 1];
  dices[1].src = pictirs[secondNum - 1];

  if (firstNum === secondNum) {
    resetGame(0, currentPlayer);
  } else {
    currentScore += firstNum + secondNum;

    document.querySelectorAll(".current-score-span")[
      currentPlayer
    ].textContent = currentScore;
  }
}

export function resetGame(fCurrentScore) {
  players[currentPlayer].score += fCurrentScore;
  if (players[currentPlayer].score >= maxScore) {
    win();
  } else if (fCurrentScore) {
    const player = document.querySelectorAll(`.player-score`);
    player[currentPlayer].textContent = players[currentPlayer].score;
  }
  currentScore = 0;
  document.querySelectorAll(".current-score-span")[currentPlayer].textContent =
    0;
  currentPlayer = currentPlayer ? 0 : 1;
  chengeBackround();
}

export function resetAllGame() {
  const dices = document.querySelectorAll(".dice");
  dices[0].textContent = 0;
  dices[1].textContent = 0;
  players[0] = [
    { name: "player1", score: 0 },
    { name: "player2", score: 0 },
  ];
  currentPlayer = 0;
  currentScore = 0;
  maxScore = 0;
  const scores = document.querySelectorAll(".current-score-span");
  scores[0].textContent = 0;
  scores[1].textContent = 0;

  const playerScores = document.querySelectorAll(".player-score");
  playerScores[0].textContent = 0;
  playerScores[1].textContent = 0;
}

export function win() {
  document.querySelector("main").innerHTML += `<section class="won-section">
          <p>player won</p>
          <p>${players[currentPlayer].name}</p>
        </section>`;

  setTimeout(() => {
    const wonSection = document.querySelector(".won-section");
    wonSection.remove();
  }, 4000);
}

function chengeBackround() {
  const playersClasses = document.querySelectorAll(".player");
  if (playersClasses[0].classList.contains("current-player")) {
    playersClasses[0].classList.remove("current-player");
    playersClasses[1].classList.add("current-player");
  } else {
    playersClasses[1].classList.remove("current-player");
    playersClasses[0].classList.add("current-player");
  }
}
