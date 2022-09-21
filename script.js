'use strict';

//Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];

//New game
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

//Rolling dice
btnRoll.addEventListener('click', function () {
  //Generate random roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display dice
  diceEl.classList.remove('hidden');
  console.log(dice);
  diceEl.src = `dice-${dice}.png`;

  //Check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
