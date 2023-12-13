/* --- VARIABLES --- */
const choices = ["✊", "🤚", "✌️"];
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const resultArea = document.getElementById("result-area");
const playBtn = document.getElementById("play-btn");

/* This will help check your results */
// console.log(player2, resultArea, playBtn);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

const generateChoice = () => {
  let r = Math.floor(Math.random() * 3);
  return choices[r];
};

const insertHTML = (choice1, choice2, result) => {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  resultArea.innerHTML = result;
};

const decideWinner = (a, b) => {
  if (
    (a === "✊" && b === "✊") ||
    (a === "🤚" && b === "🤚") ||
    (a === "✌️" && b === "✌️")
  ) {
    /* 3a. */ return "It's a Tie!";
  } else if (
    (a === "✊" && b === "✌️") ||
    (a === "🤚" && b === "✊") ||
    (a === "✌️" && b === "🤚")
  ) {
    /* 3b. */ return "Player 1 wins";
  } else {
    /* 3c. */ return "Player 2 wins";
  }
};

const play = () => {
  let choice1 = generateChoice();
  let choice2 = generateChoice();
  let result = decideWinner(choice1, choice2);

  insertHTML(choice1, choice2, result);
};

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

/* 2. */
playBtn.addEventListener("click", play);
/* ------------------------------- */
