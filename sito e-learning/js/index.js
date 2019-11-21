

let menuDisplay = document.querySelector('.nav__menu');
let menuButton = document.querySelector('.nav__button');


menuButton.addEventListener('click', (e) => {
    menuDisplay.classList.toggle('nav__menu--animated');
    // if (menuDisplay.style.display == 'none') {
    //     menuDisplay.style.display = 'flex' ;
    //     menuDisplay.style.transition = 'all .2s fade-in';
    // } else {
    //     menuDisplay.style.display = 'none' ;
    //     menuDisplay.style.transition = 'all .2s fade-out';
    // }
});