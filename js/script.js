//JS for "Guess the Word" game project

//unordered list for player's guessed letters appear
const guessedLetters = document.querySelector(".guessed-letters");

//guess button element
const guessButton = document.querySelector(".guess");

//player's input
const playersInput = document.querySelector(".letter");

//empty para where word in progress appears
const wordInProgress = document.querySelector(".word-in-progress");

//para where remaining guesses will appear
const remainingGuesses = document.querySelector(".remaining");

//para <span> element displays num of remaining guesses
const numOfGuesses = document.querySelector(".remaining span");

//empty para where msg appears when player guesses a letter
const msg = document.querySelector(".message");

//hidden play-again prompt button
const playAgainButton = document.querySelector(".play-again");

//test variable & value for word game 
const word = "magnolia";

// displays placeholder symbol for each letter in a specified word
const placeholder = function(word) {
    const placeholderLetters = []; //empty array for placeholders

    for(const letter of word) {
        placeholderLetters.push("●"); //adds element to END of array

        //tests if word value converts to a string of letters in array
        //console.log(letter);
    }
    //converts string elements representing array values using default separator - comma
    wordInProgress.innerText = placeholderLetters.join(""); 
};

placeholder(word); //returns placeholders for each letter

//guessButton Event Listener on click w/event parameter to submit player's letter guess
guessButton.addEventListener("click", function(e) {
    e.preventDefault(); //prevents form default behaviors (submit/reload)

    const capturedLetter = playersInput.value; //captures player's input value
    console.log(capturedLetter); //tests capturing player's input value

    clearInput(); //calls function to empty input value
});

//clears player's Input value after click event
const clearInput = function() {
    playersInput.value = "";
};
