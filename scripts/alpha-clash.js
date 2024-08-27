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
    console.log('player press', playerPressed);


    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // chack matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // ----------------------------------------------------


        // update score:
        // 1.gate the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2.increase the score by 1
        // const newScore = currentScore + 1 ; 
        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;
        // // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you are losses');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver();
        }
        // 1.gate the current life b=number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        // // 2.reduce the life count
        // const newLife = currentLife - 1 ;
        // // 3.display the life update count
        // currentLifeElement.innerText = newLife;
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
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore);

    // clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}