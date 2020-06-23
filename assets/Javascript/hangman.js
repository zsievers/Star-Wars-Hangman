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

    winningImg = document.querySelector(".winningImg")
    winningImg.classList.add("hide");
    winningImg.classList.remove("show");

    losingImg = document.querySelector(".losingImg")
    losingImg.classList.add("hide");
    losingImg.classList.remove("show");
   


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
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
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
    // 
    if (scoresAndLetters.indexOf("_") === -1){
        // console.log(scoresAndLetters.indexOf("_"));
        setTimeout(function(){
            alert("You Won!")}, 1000
        );
        setTimeout(function(){
            startGame()}, 2000
            );
        wins++;
        winningImg = document.querySelector(".winningImg");
        winningImg.classList.add("show");
        winningImg.classList.remove("hide");
        
        if (chosenWord === "skywalker"){
            document.querySelector(".winningImg").setAttribute("src", "assets/images/luke.jpg"); 
        }
        else if (chosenWord === "yoda"){
            document.querySelector(".winningImg").setAttribute("src", "http://pluspng.com/img-png/star-wars-yoda-png-star-wars-png-555.png");
        }
        else if (chosenWord === "palpatine"){
            document.querySelector(".winningImg").setAttribute("src", "https://www.pngmart.com/files/12/Emperor-Palpatine-PNG-Background-Image.png");
        }
        else if (chosenWord === "chewbacca"){
            document.querySelector(".winningImg").setAttribute("src", "assets/images/chewy.jpg");
        }
        else if( chosenWord === "vader"){
            document.querySelector(".winningImg").setAttribute("src", "assets/images/vader.png");
        }
        else if (chosenWord === "solo"){
            document.querySelector(".winningImg").setAttribute("src", "assets/images/solo.jpg");
        }
       
        // display win
        document.getElementById("wins").innerHTML = wins;

    }
    // user lost
    else if (guessesRemaining === 0){
        setTimeout(function(){
            alert("You Lost!")}, 1000
        );
        setTimeout(function(){
            startGame()}, 2000
            );
        loss++;
        losingImg = document.querySelector(".losingImg");
        losingImg.classList.add("show");
        losingImg.classList.remove("hide");

        if (chosenWord === "skywalker"){
            document.querySelector(".losingImg").setAttribute("src", "assets/images/luke.jpg"); 
        }
        else if (chosenWord === "yoda"){
            document.querySelector(".losingImg").setAttribute("src", "http://pluspng.com/img-png/star-wars-yoda-png-star-wars-png-555.png");
        }
        else if (chosenWord === "palpatine"){
            document.querySelector(".losingImg").setAttribute("src", "https://www.pngmart.com/files/12/Emperor-Palpatine-PNG-Background-Image.png");
        }
        else if (chosenWord === "chewbacca"){
            document.querySelector(".losingImg").setAttribute("src", "assets/images/chewy.jpg");
        }
        else if( chosenWord === "vader"){
            document.querySelector(".losingImg").setAttribute("src", "assets/images/vader.png");
        }
        else if (chosenWord === "solo"){
            document.querySelector(".losingImg").setAttribute("src", "assets/images/solo.jpg");
        }
        

        //display loss
        document.getElementById("loss").innerHTML = loss;
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