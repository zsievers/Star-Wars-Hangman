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

    //testing
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(underscores);
    console.log(scoresAndLetters);
  

}
// main proces
// =========================================================================
startGame();