// Global Variables
// =========================================================================
var word = ["skywalker", "yoda", "solo", "palpatine", "vader", "chewbacca"];

var randWord = Math.floor(Math.random() * word.length); 

var chosenWord = word[randWord];

// counters
var wins = 0;
var loss = 0;
var guessesLeft = 10;


var underScore = [];
var win = document.getElementsByClassName("Wins");
var docUnderScore = document.getElementsByClassName("underscore");


// Starts game

onload= function() { // allows page to load before running script

    var randWord = Math.floor(Math.random() * word.length); 
    var chosenWord = word[randWord];
    var userGuess = event.key;

console.log(chosenWord); // allows you to see the word in console

// Press any letter to start the game
document.addEventListener("keypress", function() {
    document.getElementById("start").innerHTML = "Guess a letter!"
  });

// creating underscore based on random wrod
var generateUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_"); // for loop ; chooses random word in word array; so that index numbers and "_" match
        docUnderScore[0].innerHTML = underScore.join('');
    }
    console.log(underScore); // shows number of underscores on console
    return underScore; // brings number of underscores associated with word to life
}

generateUnderscore (); // loop now = generateUnderscore

// ----------------------------------------------------------------------------

// get users guess
    document.onkeyup = function (event) { 
        var userGuess = event.key; 

// empty array for letters guessed
    var lettersGuessed =[];

// next step: add all user guesses into an array ; create a check loop
    for (var i = 0; i < chosenWord.length; i++) {

            if (chosenWord[i] === userGuess) {
                lettersGuessed.push(i);
                // console.log("LetterExits");
                // console.log(lettersGuessed)
            }
            else if (guessesLeft === 0 ) {
                alert ("You Lose. Refresh if you want to play again!")
                };
            

        } 
    
        
        for (var j = 0; j < lettersGuessed.length; j++) {
            underScore[lettersGuessed[j]] = userGuess;
          //   console.log(underScore[lettersGuessed[i]]);
          //   console.log([lettersGuessed[i]]);           
      };    
    
      if (lettersGuessed.length <= 0) {
        guessesLeft--;
        console.log(guessesLeft) 
        document.querySelector(".guessesLeft").textContent = "Remaining guesses left: " + guessesLeft;

    }    
    updateDisplay() 
};   


// update display during the game ; brings letters to page
    function updateDisplay() {
        document.querySelector(".underscore").textContent = "";
        for (z = 0; z < underScore.length; z++) {
            document.querySelector(".underscore").textContent += 
            underScore[z];
        }

    }
    
};



