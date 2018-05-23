


let guessLeft = 5;
let gamesLeft = 9;
let characterList = [
  "homer",
  "lisa",
  "marge",
  "maggie",
  "bart",
  "person",
  "me",
  "you",
  "we",
  "they"
];
let blankArray = [];
let guesslog = [];
let currentScore = 0;
let currentChar = characterList[gamesLeft];
let points = 0;

const GUESS = $("#guess-left");
const CHAR = $("#character-name");
const DONUT = $("#donut-coin");
const LETSGUESS = $("#letters-guessed");

//===========================================
let UserData = {};
let CharacterData = [];

function scoreKeeper(guessLeft) {
  let currentPts = 20;
  currentPts *= guessLeft;
  points += currentPts;
  console.log("points scored ", currentPts);

  DONUT.html(points);
  UserData.DonutCoins += currentPts;
}

// function userGrabber(){
//   console.log("im in userGrabber!");
//   UserData = User;
//   $("#user-name").html(User.Username);
// }


 function characterRandomizer(){
   for(let index in Character){
    CharacterData.push(index);
   }
   for(let count = 0; count < 10; count++){
     characterList.push(CharacterData[Math.floor(Math.random() * CharacterData.length)])
   }
 
};
// gets character randomizer aafter authentication

// function gameEnder()

//================================================
GUESS.html(guessLeft);

function blankRevealer(guess, index) {
  blankArray[index] = guess;
  CHAR.html(blankArray.join(" "));
}

function guessLogger(guess) {
  guesslog.push(guess);
  console.log(guesslog);
  LETSGUESS.html(guesslog);
}

function guessChecker(guess) {
  let testArray = blankArray;

  guessLogger(guess);

  for (i = 0; i < currentChar.length; i++) {
    if (currentChar.charAt(i) === guess) {
      blankRevealer(currentChar.charAt(i), i);
    }
  }
  // check for change
  for (counter = 0; counter < currentChar.length; counter++) {
    if (currentChar.indexOf(guess) === -1) {
      guessLeft--;
      break;
    }
  }
}

function blankBuilder() {
  for (pusher = 0; pusher < currentChar.length; pusher++) {
    blankArray.push("_ ");
  }
  console.log(blankArray);
  CHAR.html(blankArray.join(" "));
}

function writeToGuessed(keyPress) {
  LETSGUESS.html(keyPress);
  //   guessLeft--;
}

function reset() {
  
  if (guessLeft === 0) {
    scoreKeeper(guessLeft);

    blankArray = [];
    guesslog = [];
    guessLeft = 6;
    gamesLeft--;
    games.html(gamesLeft);
    currentChar =  characterList[gamesLeft];
    //   secretWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log("games left ", gamesLeft);

    blankBuilder();
    CHAR.html(blankArray);
    GUESS.html("Loser! Press a key to continue!");
  }
  // convert secret word into a comma string.
  secretWordConvert = currentChar;
  secretWordConvert = secretWordConvert.split("");
  secretWordConvert = secretWordConvert.toString();

  let blankArrayConvert = blankArray;
  blankArrayConvert = blankArrayConvert.toString();

  if (blankArrayConvert === secretWordConvert) {
    console.log("victory tries left ", guessLeft);
    scoreKeeper(guessLeft);

    GUESS.html("you win! Press a key to continue!");

    blankArray = [];
    guesslog = [];
    guessLeft = 5;
    gamesLeft--;
    
    currentChar =  characterList[gamesLeft];
    console.log(currentChar);
    games.html(gamesLeft);
    // secretWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log("games left ", gamesLeft);
    blankBuilder();
    CHAR.html(blankArray);
  }
}

//============================= Game Logic Start =============================
DONUT.html(currentScore);
let games = $("#games-left");
games.html(gamesLeft);

blankBuilder();
// userGrabber();

$().ready(() => {
  document.onkeyup = () => {
    let keyPress = String.fromCharCode(event.which).toLowerCase();
    writeToGuessed(keyPress);
    guessChecker(keyPress);
    GUESS.html(guessLeft);

    reset();
  };
});
