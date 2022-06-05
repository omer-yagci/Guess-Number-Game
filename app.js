const btnGuess = document.querySelector(".control");
const restart = document.querySelector(".reset");
const userChoice = document.querySelector(".ınputValue");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const secretNumber = document.querySelector(".secret-number");
const guessInfo = document.querySelector(".guess-info");
let randomNumber = Math.trunc(Math.random() * 100) + 1;
secretNumber.value = randomNumber;

// Display for Secretnumber
console.log(secretNumber.value);

// Guess Button Start

const btnConrol = () => {
  // There is no valid number Check
  if (!userChoice.value || userChoice.value > 100 || userChoice.value < 0) {
    guessInfo.innerHTML = `💥Invalid Number Type`;
  }

  //When Player win the game
  else if (+userChoice.value === secretNumber.value) {
    if (+score.innerText > +highscore.innerText) {
      highscore.innerText = score.innerText;
    }
    guessInfo.innerText = `💪You Won the Game💪`;
    secretNumber.innerText = secretNumber.value;
    userChoice.value = "";
    // For Excelent score music
    if (highscore.innerText == 100) {
      winning.play();
    } // For normal score music
    else {
      applause.play();
    }
  }

  //When guess is to high
  else if (userChoice.value > secretNumber.value) {
    if (score.innerText > 1) {
      +score.innerText--;
      guessInfo.innerText = ` ❕ Your Guess is Too High`;
    } else {
      guessInfo.innerText = `You Lost the Game!! `;
    }
  }

  //When guess is to low
  else if (userChoice.value < secretNumber.value) {
    if (score.innerText > 1) {
      +score.innerText--;
      guessInfo.innerText = ` ⬇ Your Guess is Too Low`;
    } else {
      guessInfo.innerText = `You Lost the Game!! `;
    }
  }
};

//  Guess Button Event
btnGuess.addEventListener("click", btnConrol);

// Reset Button Start

const btnReset = () => {
  guessInfo.innerText = `Start guessing... `;
  score.innerText = ` 100`;
  userChoice.value = "";
  secretNumber.value = Math.trunc(Math.random() * 20) + 1;
  secretNumber.innerText = "?";

  // Display for new secrey number
  console.log(secretNumber.value);
};

//  Reset Button Event
restart.addEventListener("click", btnReset);
