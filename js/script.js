//JS for "Guess the Word" game project
//unordered list for player's guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
//empty Array to contain all the letters the player guesses
const guessedLetters = [];


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

    msg.innerText = "";

    const capturedLetter = playersInput.value; //captures player's input value
    //console.log(capturedLetter); //tests capturing player's input value

    const guess = playersInput.value;
    const inputResults = validateInput(guess);
    //console.log(inputResults); //logs out an "undefined" result for everything that is not a single letter value

    /* if letter is returned from validateInput function pass guess to 
    makeGuess Function to verify if letter was aready entered by player */
    if(inputResults) {
        makeGuess(guess); //call makeGuess function using playersInput.value as argument
    }
    clearInput(); //calls function to empty player's input from textbox
});


//clears player's Input value from textbox after click event
const clearInput = function() {
    playersInput.value = "";
};


//regular expression used to validate player's input is a letter
const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/g;

    //checks player's input for empty input, more than one letter, or a character
    if(input === "") {
        msg.innerText = "Please enter a letter, ex: f"; //entered empty value
    } else if(!input.match(acceptedLetter)) {
        msg.innerText = "Please enter only an alphabetical letter, ex: g"; //entered num, symbol, or mixed value other than a letter
    } else if(input.length > 1) {
        msg.innerText = "Please enter a single letter only from A to Z, ext: h"; //entered more than a single letter
    } else {
        return input;
    }
};


//Function Captures Input & turns all values to uppercase
const makeGuess = function(guess) {
    guess = guess.toUpperCase(); //changes all guess values to uppercase

    //checks Array to see if player entered the same letter already, returning a Boolean of true or false
    if(guessedLetters.includes(guess)) {
        msg.innerText = "Sorry, but you have aready guessed this letter. Please try again."; //returns true, displays try again msg
    } else {
        guessedLetters.push(guess); // returns false, adds letter to end of guessedLetters Array
        console.log(guessedLetters); //shows letters added to Array
    }
};
