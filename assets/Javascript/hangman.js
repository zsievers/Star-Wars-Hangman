// Global Variables
// =========================================================================
var words = ["skywalker", "yoda", "solo", "palpatine", "vader", "chewbacca"];
var chosenWord = ""; // word chosen
var lettersInWord = []; // whatletters are in the word
var wrongLetters = []; // 
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
    wrongLetters = [];
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
    console.log(lettersInWord);
    console.log(underscores);
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
        wrongLetters.push(letter);
        guessesRemaining --;
    }

    console.log(scoresAndLetters);
}
        


function gameEnd() {
    console.log("Wins: " + wins + " | Losses: " + loss + " | Guesses Remaining: " + guessesRemaining);
    // user won
    if (lettersInWord.toString() == scoresAndLetters.toString()) {
        wins++;
        alert("You won");

        // display win
        document.getElementById("wins").innerHTML = wins;

        startGame();
    }
    // user lost
}
// main process
// =========================================================================
// generates code for first time
startGame();

// keyclicks
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(userGuess);
    gameEnd();
    console.log(userGuess)
}