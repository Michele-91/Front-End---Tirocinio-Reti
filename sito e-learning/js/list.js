

let list = {
    javascript: {
        name: "javascript", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    react: {
        name: "react", 
        description: "This is a React course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    }, 
    css: {
        name: "CSS", 
        description: "This is a css course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    typescript: {
        name: "typescript", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    angular: {
        name: "angular", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    html: {
        name: "html", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    html: {
        name: "html", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    html: {
        name: "html", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    html: {
        name: "html", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    html: {
        name: "html", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    html: {
        name: "html", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    },
    html: {
        name: "html", 
        description: "This is a javascript course",
        amount: 0,
        added: 0,
        edited: 0,
        stars: 0,
        students: 0
    }
}

// oggetto che funge da aiuto per controllare che un elemento della lista sià già stato visualizzato
// oppure no in seguito all'analisi di un input
let presentCheck =  {};

// selezione <ul> che contiene gli elementi della lista nella pagina HTML
let selectContainer = document.querySelector('.gallery-grid');
// selezione barra di ricerca nella pagina HTML
let inputFilter = document.querySelector('.search-bar__field');
// selezione di tutti gli elementi della lista nella pagina HTML
let selection = document.querySelectorAll('.gallery-item');


// se la stringa passata non è composta da zero caratteri (e perciò non deve avvenire alcuna visualizzazione),
// o se la stringa non è già presente nell'oggetto presentCheck (per evitare doppie visualizzazioni), 
// aggiunta di un nuovo elemento della lista all'interno del DOM e della stringa passata nella funzione
// all'interno dell'oggetto presentCheck
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

// attraversa lista html e rimozione elementi già presenti che corrispondono a stringa passata nella funzione,
// basandosi sul nome della classe (aggiunto al momento di aggiunta dell'elemento in addNewElement)
let removeNewElement = function (text, reg) {
    let selection = document.querySelectorAll('.gallery-item');
    for (let item of selection) {
        if(item.classList.value.includes(text)) {
            item.remove();
            delete presentCheck[text];
        }
    }
}

// - iterazione attraverso chiavi dell'oggetto
// - se chiave corrisponde a input e lunghezza dell'input maggiore di zero, chiamata della funzione addNewElement che
//   aggiunge elementi corrispondenti all'input
// - alternativamente, chiamata della funzione che rimuove elementi corrispondenti all'input
let iterate = function(regEx, len) {

    for(let listItem of Object.entries(list)) {
        if(regEx.test(listItem[0]) && len > 0) {
            addNewElement(listItem[0]);
        } else {
            removeNewElement(listItem[0], regEx);
        }
    }

}


// rispondi a nuovo input
inputFilter.addEventListener('input', function (e) {
    let regEx = new RegExp(`${e.target.value}`, 'iu');
    iterate(regEx, e.target.value.length);

});
