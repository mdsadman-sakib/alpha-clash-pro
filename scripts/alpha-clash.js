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

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}