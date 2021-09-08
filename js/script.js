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
        msg.innerText = "Please enter a letter. For example: f"; //entered empty value
    } else if(!input.match(acceptedLetter)) {
        msg.innerText = "Please enter only an alphabetical letter from A to Z. For example: g"; //entered num, symbol, or mixed value other than a letter
    } else if(input.length > 1) {
        msg.innerText = "Please enter a single letter only. For example: h"; //entered more than a single letter
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
        //console.log(guessedLetters); //shows letters added to Array
        
        showGuessedLetters(); //calls function to display 1st time letter guesses
        updateWordInProgress(guessedLetters); //calls function that displays the letters in the specified hidden word
    }
};

//function Displays Guessed Letters
const showGuessedLetters = function() {
    guessedLettersElement.innerHTML = ""; //clears unordered list element
    
    for(const showLetters of guessedLetters) {
        const li = document.createElement("li"); //creates list item element
        li.innerHTML = showLetters; //adds letter to HTML page
        guessedLettersElement.append(li); //adds letter to end of unordered list
    }
};

//funciton replaces circular symbols with correct letters guessed for the word
const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase(); //changes word variable to uppercase
    const wordArray = wordUpper.split(""); //returns entire string
    
    const displayWord = []; //empty Array for displaying correct letters in word

    console.log(displayWord); //test if letters display & display correctly in array

    for(const letter of wordArray) {
        //checks if guessedLetters contain the same letter found in display word
        if(guessedLetters.includes(letter)) {
            displayWord.push(letter.toUpperCase()); //adds letter to end of displayWord Array
        } else {
            displayWord.push("●"); //adds symbol to the end of array
        }
    }

    wordInProgress.innerText = displayWord.join(""); //converts & returns array elements as a string
    playerWinsCheck(); //calls function to check if Player won
};

//function checks if Player WINS Game
const playerWinsCheck = function() {

    /* searches wordInProgress's innerText string to see if the uppercase test word matches.
    Statement doesn't work if you use "this.wordUpper". */
    if(wordInProgress.innerText === word.toUpperCase()) {
        msg.classList.add(".win"); //add win class to para message class
        msg.innerHTML = '<p class="highlight">You guessed the correct word! Congrats!</p>'; //changes para to CSS highlight class selector
    }
};
