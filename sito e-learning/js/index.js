

let menuDisplay = document.querySelector('.nav__menu');
let menuButton = document.querySelector('.nav__button');
// let blogTitle = document.querySelector('.blog__title');
// let listTitle = document.querySelector('.list__title');
let home = document.querySelector('#home');
let esplora = document.querySelector('#list');
let blog = document.querySelector('#blog');
let observerArr = [home, esplora, blog];
// let observerArr = document.querySelectorAll('origin');

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

// document.addEventListener('load', function () {

// });



// const options = {
//     root: null,
//     threshold: 0.1,
//     // rootMargin: "-0px 0px 0px 0px"
// };


// let observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.style.animation = 'appear .6s forwards ease-in';
//             entry.target.style.animationIterationCount = '1';
//         }
//         else {
//             entry.target.style.animationIterationCount = '1';
//             entry.target.style.animation = 'none';
//         }
//         // observer.unobserve(entry.target);
//     })
// }, options);



// observerArr.forEach(el => {
//     observer.observe(el);
// })