// Global Variables
var word = ["skywalker", "stormtrooper", "jedi", "palpatine", "vader",
];
var wins = 0; // start the game with 0 wins
// var letterIndex = 0; // index to hold hangman words
var guessesLeft = 10; // start game with 10 guess remaining
var lettersGuessed; // letters guessed by user
// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var randWord = Math.floor(Math.random() * word.length); 
// var chosenWord = word[randWord];
var underScore = [];
var win = document.getElementsByClassName("Wins");
var docUnderScore = document.getElementsByClassName("underscore");
var gameFinished = false;
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

        } 
        
        for (var i = 0; i < lettersGuessed.length; i++) {
            underScore[lettersGuessed[i]] = userGuess;
          //   console.log(underScore[lettersGuessed[i]]);
          //   console.log([lettersGuessed[i]]);           
      };    
    
      if (lettersGuessed.length <= 0) {
        guessesLeft--;
        console.log(guessesLeft)
    }


                
                updateDisplay() 
};   


// update display during the game ; brings letters to page
    function updateDisplay() {
        document.querySelector(".underscore").textContent = "";
        for (i = 0; i < underScore.length; i++) {
            document.querySelector(".underscore").textContent += 
            underScore[i];
        }

    }
    
    if ((userGuess === "chosenWord.length")) {
        winText.textContent = "Wins: " + winText;
    }
     


};
// calling the 2 functions at the beginning of the game

