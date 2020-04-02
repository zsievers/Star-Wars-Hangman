// Global Variables
// =========================================================================
var words = ["skywalker", "yoda", "solo", "palpatine", "vader", "chewbacca"];
var chosenWord = ""; // word chosen
var lettersInWord = []; // whatletters are in the word
var lettersGuessed = []; // 
var underscores = 0; //  number of underscores in the word
var scoresAndLetters = []; // v _ _ _ r 

var wins = 0;
var loss = 0;
var guessesRemaining = 10;
// functions (reusable blocks of code that i will call upon )
// =========================================================================

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)]; // randomizes words array
    lettersInWord = chosenWord.split("");// break word apart in indiv letters
    underscores = lettersInWord.length;

    // reset each round
    guessesRemaining = 10;
    lettersGuessed = [];
    scoresAndLetters = [];

    // generates underscores and letters in word
    for (var i = 0; i < underscores; i++) {
        scoresAndLetters.push("_");
    }

    // display to html
    document.getElementById("currentWord").innerHTML = scoresAndLetters.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesRemaining;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loss").innerHTML = loss;

    //testing
    console.log(chosenWord);
    // console.log(lettersInWord);
    // console.log(underscores);
    console.log(scoresAndLetters);
} 

    // check if letter is in word
function checkLetters(letter){
    var keyInWord = false;

    for (var i = 0; i < underscores; i++) {
        if(chosenWord[i] == letter) {
            keyInWord = true;
        }
    }

    if (keyInWord) {
        for (var i = 0; i < underscores; i++) {
            if (chosenWord[i] == letter) {
                scoresAndLetters[i] = letter;
            }
        }
    }    
    else {
        lettersGuessed.push(letter);
        guessesRemaining --;
    }

    console.log(scoresAndLetters);
}
        


function gameEnd() {
    // update html 
    document.getElementById("guessesLeft").innerHTML = guessesRemaining;
    document.getElementById("currentWord").innerHTML = scoresAndLetters.join(" ");
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");

    // user won
    if (lettersInWord.toString() === scoresAndLetters.toString()) {
        wins++;
        alert("You won"); // change this

        // display win
        document.getElementById("wins").innerHTML = wins;
        startGame();
    }
    // user lost
    else if (guessesRemaining === 0){
        loss++;
        alert("you lost"); // change this

        //display loss
        document.getElementById("loss").innerHTML = loss;
        startGame();
    }
      
}
// main process
// =========================================================================
// generates code for first time
startGame();

// keyclicks
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userGuess = event.key.toLowerCase();
        checkLetters(userGuess);
        gameEnd();
    }
};