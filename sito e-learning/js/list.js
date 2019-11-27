
let list = {
    javascript: {name: "javascript", description: "This is a javascript course"},
    react: {name: "react", description: "This is a React course"},
    css: {name: "CSS", description: "This is a CSS course"},
    typescript: {name: "typescript", description: "This is a Typescript course"},
    angular: {name: "angular", description: "This is a Angular course"},
    html: {name: "html", description: "This is a HTML course"}
}

let presentCheck =  {};

let selectContainer = document.querySelector('.gallery-grid');
let inputFilter = document.querySelector('.search-bar__field');
let selection = document.querySelectorAll('.gallery-item');

let addNewElement = function (text) {

    if(Object.keys(presentCheck).length == 0 || !presentCheck[text]) {
        let newLi = document.createElement('li');
        newLi.classList.add('gallery-item');
        newLi.classList.add(text);
        selectContainer.append(newLi);
        let newDiv = document.createElement('div');
        newDiv.classList.add('gallery-item__pic');
        newLi.append(newDiv);
        let newPic = document.createElement('img');
        newPic.setAttribute("src", "https://picsum.photos/300/200");
        newPic.setAttribute("alt", "gallery-picture");
        newDiv.append(newPic);
        let newP = document.createElement('p');
        newP.classList.add('gallery-item__para');
        newP.textContent = text;
        newLi.append(newP);
        // arr.push(text);
        presentCheck[text] = text;
    }
}

let removeNewElement = function (text, reg) {
    let selection = document.querySelectorAll('.gallery-item');
    for (let item of selection) {
        if(item.classList.value.includes(text)) {
            item.remove();
            delete presentCheck[text];
        }
    }
}

let reset = function() {
    let selection = document.querySelectorAll('.gallery-item');
    for (let item of selection) {
        item.remove();
    }
    let selectContainer = document.querySelector('.gallery-grid');
    console.log("resettato: ", selectContainer);
}

let iterate = function(regEx, len) {

    for(let listItem of Object.entries(list)) {
        if(regEx.test(listItem[0]) && len > 0) {
            addNewElement(listItem[0]);
        } else {
            removeNewElement(listItem[0], regEx);
        }
    }

}

inputFilter.addEventListener('input', function (e) {

    let regEx = new RegExp(`${e.target.value}`, 'iu');

    iterate(regEx, e.target.value.length);

});
