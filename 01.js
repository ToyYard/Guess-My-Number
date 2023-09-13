'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// This is responsible for restart thr game.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.qt-symbol').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  /* - When you use getElementById for selecting id element then doesn't need to use # symbol, But 
     in case if you want to use querySelector for selecting Id element then you must be use # symbol.
     - For form type element we should always use id instead of class. 
*/
  document.getElementById('guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.qt-symbol').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
});

// Use Function for repeating code.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const winInterface = function () {
  displayMessage('Correct Number!');
  document.querySelector('.qt-symbol').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.qt-symbol').style.width = '20rem';
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

// Game Logic.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.getElementById('guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Give Number 1 to 20';
  } else if (score > 1) {
    if (secretNumber === guess) {
      winInterface();
    } else {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    if (secretNumber === guess) {
      winInterface();
    } else {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage('You Lose!');
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});
