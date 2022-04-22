let difficulty = 'Easy';
let guess = document.getElementById('input');
let number = Math.floor(Math.random()*10+1);;
let minGuess = 1;
let maxGuess = 1000;
let max = 1000;
let numOfGuess = 0;

function setDifficulty(){
    difficulty = document.getElementById('diff');
    if(difficulty.value === 'Easy'){
        maxGuess = 10;
        number = Math.floor(Math.random()*10+1);
    } else if(difficulty.value === 'Medium'){
        maxGuess = 100;
        number = Math.floor(Math.random()*100+1);
    } else if(difficulty.value === 'Hard'){
        maxGuess = 1000;
        number = Math.floor(Math.random()*1000+1);
    }
    return number;
}

function newStart(){
    let output = document.getElementById('myDiv')
    numOfGuess = 0;
    output.textContent = "";
    console.log(number);
}

let suggestBox = document.getElementById('helpBox')
let suggestElement = document.createElement('h4');
suggestBox.appendChild(suggestElement);

function suggestNumber(){
    let suggestNum = Math.floor((minGuess/2 + maxGuess/2));
    suggestElement.textContent = `I suggest: ${suggestNum}`;
}

function checkNumbers() {
    numOfGuess++;
    console.log(number);
    guess = document.getElementById('input');
    if(guess.value-number < 0 && guess.value > minGuess){minGuess = guess.value;}; 
    if(guess.value-number > 0 && guess.value < maxGuess){maxGuess = guess.value;};

    let output = document.getElementById('guessTrack')
    let message = document.createElement('p');
    output.appendChild(message);

    if(guess.value == number){
        message.textContent = `${guess.value}: CONGRATULATIONS!!! You found it in ${numOfGuess} guesses!`;
        guess.value = "";
    } else if(guess.value < number){
        message.textContent = `${guess.value}: Go up!`;
        guess.value = "";
    } else if(guess.value > number){
        message.textContent = `${guess.value}: Go down!`;
        guess.value = "";
    }
}