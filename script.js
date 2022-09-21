'use strict';

//Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//New game
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice
btnRoll.addEventListener('click', function () {
  //Generate random roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display dice
  diceEl.classList.remove('hidden');
  console.log(dice);
  diceEl.src = `dice-${dice}.png`;
});
