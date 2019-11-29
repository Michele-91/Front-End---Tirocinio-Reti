

let list = {
    javascript: {
        name: "javascript",
        description: "dThis is a javascript course",
        amount: 4,
        added: `2017-04-23`,
        edit: `2018-11-12`,
        stars: 4.5,
        students: 5775
    },
    react: {
        name: "react",
        description: "cThis is a React course",
        amount: 3,
        added: `2019-02-03`,
        edit: `2019-02-03`,
        stars: 4.3,
        students: 241
    },
    css: {
        name: "css",
        description: "bThis is a css course",
        amount: 2,
        added: `2016-7-22`,
        edit: `2018-07-15`,
        stars: 5.0,
        students: 16802
    },
    typescript: {
        name: "typescript",
        description: "bThis is a typescript course",
        amount: 1,
        added: `2015-11-08`,
        edit: `2019-10-05`,
        stars: 3.3,
        students: 2593
    },
    angular: {
        name: "angular",
        description: "aThis is an angular course",
        amount: 0,
        added: `2018-09-29`,
        edit: `2018-12-05`,
        stars: 4.4,
        students: 1806
    }
}

// oggetto che funge da aiuto per controllare che un elemento della lista sià già stato visualizzato
// oppure no in seguito all'analisi di un input
let presentCheck = {};

// selezione <ul> che contiene gli elementi della lista nella pagina HTML
let selectContainer = document.querySelector('.gallery-grid');
// selezione barra di ricerca nella pagina HTML
let inputFilter = document.querySelector('.search-bar__field');
// selezione di tutti gli elementi della lista nella pagina HTML
let selection = document.querySelectorAll('.gallery-item');



let dropdownItems = document.querySelector('select');
let drop = document.querySelectorAll('option');
// let arr = [];
// let newArr = Array.from(list);
let sortValue = dropdownItems[0].value;

// se la stringa passata non è composta da zero caratteri (e perciò non deve avvenire alcuna visualizzazione),
// o se la stringa non è già presente nell'oggetto presentCheck (per evitare doppie visualizzazioni),
// aggiunta di un nuovo elemento della lista all'interno del DOM e della stringa passata nella funzione
// all'interno dell'oggetto presentCheck
let addNewElement = function (text) {

    if (Object.keys(presentCheck).length == 0 || !presentCheck[text]) {
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
        presentCheck[text] = text;

        newLi.dataset.name = list[text].name;
        newLi.dataset.description = list[text].description;
        newLi.dataset.amount = list[text].amount;
        newLi.dataset.added = list[text].added;
        newLi.dataset.edit = list[text].edit;
        newLi.dataset.stars = list[text].stars;
        newLi.dataset.students = list[text].students;
    }
}

// attraversa lista html e rimozione elementi già presenti che corrispondono a stringa passata nella funzione,
// basandosi sul nome della classe (aggiunto al momento di aggiunta dell'elemento in addNewElement)
let removeNewElement = function (text, reg) {
    let selection = document.querySelectorAll('.gallery-item');
    for (let item of selection) {
        if (item.classList.value.includes(text)) {
            item.remove();
            delete presentCheck[text];
        }
    }
}

let sortController = function (valueForSorting) {
    let selectContainer = document.querySelector('.gallery-grid');
    // let paraSelection = document.querySelectorAll('gallery-item__para');

    switch (valueForSorting) {

        case 'name':
            [...selectContainer.children]
                .sort((a, b) => a.innerText > b.innerText ? 1 : -1)
                .map(node => selectContainer.appendChild(node));
            break;
        case 'amount':
            [...selectContainer.children]
                .sort((a, b) => a.dataset.amount > b.dataset.amount ? 1 : -1)
                .map(node => selectContainer.appendChild(node));
            break;
        case 'added':
            [...selectContainer.children]
                .sort((a, b) => a.dataset.added > b.dataset.added ? 1 : -1)
                .map(node => selectContainer.appendChild(node));
            break;
        case 'edit':
            [...selectContainer.children]
                .sort((a, b) => a.dataset.edit > b.dataset.edit ? 1 : -1)
                .map(node => selectContainer.appendChild(node));
            break;
        case 'stars':
            [...selectContainer.children]
                .sort((a, b) => a.dataset.stars > b.dataset.stars ? 1 : -1)
                .map(node => selectContainer.appendChild(node));
            break;
        case 'students':
            [...selectContainer.children]
                .sort((a, b) => a.dataset.students > b.dataset.students ? 1 : -1)
                .map(node => selectContainer.appendChild(node));
            break;

    }
}

// - iterazione attraverso chiavi dell'oggetto
// - se chiave corrisponde a input e lunghezza dell'input maggiore di zero, chiamata della funzione addNewElement che
//   aggiunge elementi corrispondenti all'input
// - alternativamente, chiamata della funzione che rimuove elementi corrispondenti all'input
let iterate = function (regEx, len) {

    for (let listItem of Object.entries(list)) {
        if (regEx.test(listItem[0]) && len > 0) {
            addNewElement(listItem[0]);
        } else {
            removeNewElement(listItem[0], regEx);
        }
    }
    sortController(sortValue);
}


// rispondi a nuovo input
inputFilter.addEventListener('input', function (e) {
    let regEx = new RegExp(`${e.target.value}`, 'iu');
    iterate(regEx, e.target.value.length);
});

dropdownItems.addEventListener('change', function (e) {
    sortValue = e.target.value;
    sortController(sortValue);
});


// function optionsControl() {
//     let drop = document.querySelectorAll('.select');
//     for(let i = 0; i < drop.length; i++) {
//         console.dir(drop[i].textContent);
//         drop[i].addEventListener('change', function() {
//             console.log(drop[i].textContent);
//         });
//     }
// }

// optionsControl();