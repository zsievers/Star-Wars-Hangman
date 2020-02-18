// Array of Words to guess 
var words = [
    "skywalker", 
    "stormtrooper",
    "jedi",
    "palpatine",
    "chewbacca",
];
// Choosing Random Word from array
var word = words[Math.floor(Math.random() * words.length)];

// setting up letters in word
var lettersArray = [];
    for (var i = 0; i < word.length; i++) {
        lettersArray[i] = "_";
    }
var remainingLetters = word.length;

// Remaining letters code


// when user presses key to start game
document.onkeyup = function(event) {

// making letters lowercase
    var userInput = event.key.toLocaleLowerCase();
}










// References
// https://nostarch.com/download/JS4K_ch7.pdf
// https://codepen.io/cathydutton/pen/ldazc

