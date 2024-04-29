function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString=    'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    // console.log(alphabet);

    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);
    // console.log(index);

    const alphabets = alphabet[index];
    console.log(index,alphabets);
    return alphabets;
}

function setBackColor(elementId){
    const backGround = document.getElementById(elementId);
    backGround.classList.add('bg-amber-600');
}

function removeColor(elementId){
    const backGround = document.getElementById(elementId);
    backGround.classList.remove('bg-amber-600');
}

function getValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

function setValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getTextValueById(elementId){
    const element =  document.getElementById(elementId);
    const text = element.innerText;
    return text;
}