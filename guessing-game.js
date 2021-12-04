
function getTitle(){
    let title = document.getElementById('title');

    title.innerHTML = '? THE GUESSING GAME ?';
    // title.id = 'already-changed';
}


let guessButton = document.getElementById('submit-guess')


function submittedGuess(inputElement){
    const numGuess = inputElement.value;
    inputElement.value = 0;
    alert(numGuess);
}


guessButton.addEventListener('click', function(){
    alert('This button was clicked');

    const inputElement = document.querySelector('input')

    submittedGuess(inputElement)
});



let playAgainButton = document.getElementById('play-again')

playAgainButton.addEventListener('click', function(){
    alert('This button was clicked');
});

let hintButton = document.getElementById('give-hint')

hintButton.addEventListener('click', function(){
    alert('you\'re very close');
});

