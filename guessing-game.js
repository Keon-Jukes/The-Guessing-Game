
let startGame;
//Constructor function which can be invoked with 'new' keyword to continously create new games
function Game(){
    this.playerGuess = null;
    this.previousGuesses = [];
    this.winningNumber = generateWinningNumber();
}

function generateWinningNumber(){
    return Math.floor(Math.random() * 101);
}

function newGame(){
    return new Game();
}


Game.prototype.playerGuessSubmission = function(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        return 'that guess is invalid, enter a number between 1-100'
    }
    this.playerGuess = guess;
    return this.guessCheck();
}

Game.prototype.guessCheck = function(){
    if(this.previousGuesses.includes(this.playerGuess)){
        return 'you\'ve already guessed that Number';
    }
    if(this.playerGuess === this.winningNumber){
        return `You win! The number was ${this.winningNumber}`
    } else if(this.playerGuess < this.winningNumber){
        if(this.previousGuesses.length >= 5) {
            return 'you lose';
        } else{
            this.previousGuesses.push(this.playerGuess)
        return 'Guess higher'
        }
    } else if(this.playerGuess > this.winningNumber){
        if(this.previousGuesses.length >= 5) {
            return 'you lose';
        } else {
            this.previousGuesses.push(this.playerGuess)
            return 'Guess lower';
        }
       
    }
}


// ----------------------------------------------------------------------------------------------------------------------------

let guessButton = document.getElementById('submit-guess')
let playAgainButton = document.getElementById('play-again')
let hintButton = document.getElementById('give-hint')
let guess1 = document.getElementById('guess-1')
let guess2 = document.getElementById('guess-2')
let guess3 = document.getElementById('guess-3')
let guess4 = document.getElementById('guess-4')

function submittedGuess(inputElement){
    const numGuess = Number(inputElement.value); //coercion to change String value to Number
    alert(startGame.playerGuessSubmission(numGuess));
    if(isNaN(numGuess) || numGuess < 1 || numGuess > 100){
        console.log('invalid number, try again')
    } else if(startGame.previousGuesses.length === 1){
        guess1.innerHTML = numGuess;
    } else if(startGame.previousGuesses.length === 2) {
        guess2.innerHTML = numGuess;
    } else if(startGame.previousGuesses.length === 3) {
        guess3.innerHTML = numGuess;
    } else if(startGame.previousGuesses.length === 4) {
        guess4.innerHTML = numGuess;
    } else{
        alert('you have lost this game')
        guess1.innerHTML = "";
        guess2.innerHTML = "";
        guess3.innerHTML = "";
        guess4.innerHTML = "";
        startGame = newGame();
    }
    inputElement.value = '';
}


guessButton.addEventListener('click', function(){
    
    const inputElement = document.querySelector('input')

    submittedGuess(inputElement)
});




playAgainButton.addEventListener('click', function(){
    alert('starting a new game!');
        guess1.innerHTML = "";
        guess2.innerHTML = "";
        guess3.innerHTML = "";
        guess4.innerHTML = "";
        startGame = newGame();
});



hintButton.addEventListener('click', function(){
    alert('you\'re very close');
});


window.addEventListener('DOMContentLoaded', (event) => {
    startGame = newGame();
});

