// function play(){
//     // hidden
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection);

//     // show the play ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList);
// }

function handleKeyboardkeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player press',playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed ,expectedAlphabet);

    // chack matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you got a point');
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('you are losses');
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardkeyUpEvent);

function continueGame() {
    // step :1-  generate a random alphabet
    const alphabet = getaRandomAlphabet();
    // console.log('your random word', alphabet);

    // set randomly generate alphabet to the screen (show it)
    const currentElementAlphabet = document.getElementById('current-alphabet');
    currentElementAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}