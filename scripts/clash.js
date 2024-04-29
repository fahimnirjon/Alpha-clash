function playNow(){
    hideElement('home');
    hideElement('score-line');
    showElement('play-ground');
    
    setValueById('life-score',5)
    setValueById('play-score',0)
    continueGame()
}

function gameOver(){
    hideElement('play-ground');
    showElement('score-line');

    const finalScore = getValueById('play-score');
    setValueById('final-score', finalScore);

    const alphabetCurrent = getTextValueById('para');
    removeColor(alphabetCurrent)
}

function continueGame(){
    const alphabets = getRandomAlphabet();

    const currentAlphabet = document.getElementById('para');
    currentAlphabet.innerText = alphabets;

    setBackColor(alphabets);
}
function keyboardKeyPress(event){
    const currentKey = event.key;
    console.log('player pressed', currentKey);


    if(currentKey === 'Escape'){
        gameOver();
    }
    const currentKeyPressed = document.getElementById('para');
    const currentAlphabetElement = currentKeyPressed.innerText;
    const expectedElement = currentAlphabetElement.toLowerCase();
    console.log(currentKey, expectedElement)
    
    // condition

    if(currentKey === expectedElement){
        console.log('You Get a Point', expectedElement);
        // play score

        const currentScore = getValueById('play-score');
        const updateScore = currentScore + 1;
        setValueById('play-score',updateScore);

        continueGame();
        removeColor(expectedElement)
    }
    else{
        console.log('You lost a life')

        const currentLife = getValueById('life-score');
        const newLife = currentLife -1;
        setValueById('life-score', newLife);

        if(newLife === 0){
            gameOver();
        }
    }

    
}

document.addEventListener('keyup',keyboardKeyPress);
