let guessLeft = 5;
let gamesLeft = 10;
let currentCharacter = "homer";
let blankArray = [];
let guesslog = [];
let characterList = [];
let stats = [];

//===========================================
function scoreKeeper(guessLeft) {
  let points = 20;
  points *= guessLeft;
  stats.push(points);
  console.log("points scored ",points);
}


// userGrabber();
    //tries to authenticate and grabs user

    // characterRandomizer();
    // gets character randomizer aafter authentication

//gameEnder()

//================================================
document.getElementById("guess-left").innerHTML = guessLeft;

function blankRevealer(guess, index) {
  blankArray[index] = guess;
  document.getElementById("character-name").innerHTML = blankArray.join(" ");
}

function guessLogger(guess) {
  guesslog.push(guess);
  console.log(guesslog);
  element = document.getElementById("letters-guessed");
  element.innerHTML = guesslog;
}

function guessChecker(guess) {
  var testArray = blankArray;
  guessLogger(guess);

  for (i = 0; i < currentCharacter.length; i++) {
    if (currentCharacter.charAt(i) === guess) {
      blankRevealer(currentCharacter.charAt(i), i);
    }
  }
  // check for change
  for (counter = 0; counter < currentCharacter.length; counter++) {
    if (currentCharacter.indexOf(guess) === -1) {
      guessLeft--;
      break;
    }
  }
}

function blankBuilder() {
  for (pusher = 0; pusher < currentCharacter.length; pusher++) {
    blankArray.push("_");
  }
  console.log(blankArray);
  document.getElementById("character-name").innerHTML = blankArray.join(" ");
}

function writeToGuessed(keyPress) {
  document.getElementById("letters-guessed").innerHTML = keyPress;
  //   guessLeft--;
}

function reset() {
  if (guessLeft === 0) {
    scoreKeeper(guessLeft);

    blankArray = [];
    guesslog = [];
    guessLeft = 5;
    gamesLeft--;
    currentCharacter = "lisa";
    //   secretWord = wordList[Math.floor(Math.random() * wordList.length)];

    blankBuilder();
    document.getElementById("character-name").innerHTML = blankArray;
    document.getElementById("guess-left").innerHTML =
      "Loser! Press a key to play again!";
  }
  // convert secret word into a comma string.
  secretWordConvert = currentCharacter;
  secretWordConvert = secretWordConvert.split("");
  secretWordConvert = secretWordConvert.toString();

  var blankArrayConvert = blankArray;
  blankArrayConvert = blankArrayConvert.toString();

  if (blankArrayConvert === secretWordConvert) {
    console.log("victory tries left ", guessLeft);
    scoreKeeper(guessLeft);

    document.getElementById("guess-left").innerHTML =
      "you win! Press a key to try again!";

    blankArray = [];
    guesslog = [];
    tryLeft = 5;
    gamesLeft--;
    currentCharacter = "lisa";
    // secretWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(currentCharacter);
    blankBuilder();
    document.getElementById("character-name").innerHTML = blankArray;
  }
}

//=====================================================================
blankBuilder();
document.addEventListener("DOMContentLoaded", () => {
  document.onkeyup = () => {
    let keyPress = String.fromCharCode(event.which).toLowerCase();
    writeToGuessed(keyPress);
    guessChecker(keyPress);
    document.getElementById("guess-left").innerHTML = guessLeft;

    reset();
  };
});
