

let menuDisplay = document.querySelector('.nav__menu');
let menuButton = document.querySelector('.nav__button');
// let blogTitle = document.querySelector('.blog__title');
// let listTitle = document.querySelector('.list__title');
let home = document.querySelector('#home');
let esplora = document.querySelector('#list');
let blog = document.querySelector('#blog');
let observerArr = [home, esplora, blog];

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
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px 0px -200px 0px"
};


let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        // if(!entry.isIntersecting) {
        //     return;
        // }
        // if(entry.classList.contains()) {

        // }

        console.log(entry.target);
        // observer.unobserve(entry.target);
    })
}, options);
// observer.observe(esplora);



observerArr.forEach(el => {
    observer.observe(el);
})