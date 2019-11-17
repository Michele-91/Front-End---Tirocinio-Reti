
let container = document.querySelector('.container');
let menu = document.querySelector('.menu');
let itemCounter = 3;
// let flowDirCol = document.querySelector('.flow-dir-col');
// let flowDirRow = document.querySelector('.flow-dir-row');

// flowDirCol.addEventListener( 'click', function (e) {
//     container.style.flexDirection = 'column';
// });


document.addEventListener('click', function (e) {
    // console.log(e.target.classList[1].includes());
    switch (e.target.classList[1]) {
        case 'flexdir-col':
            container.style.flexDirection = 'column';
            break;
        case 'flexdir-row':
            container.style.flexDirection = 'row';
            break;
        case 'flexdir-columnreverse':
            container.style.flexDirection = 'column-reverse';
            break;
        case 'flexdir-rowreverse':
            container.style.flexDirection = 'row-reverse';
            break;
        case 'flexwrap-nowrap':
            container.style.flexWrap = 'nowrap';
            break;
        case 'flexwrap-wrap':
            container.style.flexWrap = 'wrap';
            break;
        case 'flexwrap-wrapreverse':
            container.style.flexWrap = 'wrap-reverse';
            break;
        case 'justcont-start':
            container.style.justifyContent = 'flex-start';
            break;
        case 'justcont-end':
            container.style.justifyContent = 'flex-end';
            break;
        case 'justcont-center':
            container.style.justifyContent = 'center';
            break;
        case 'justcont-spacebetw':
            container.style.justifyContent = 'space-between';
            break;
        case 'justcont-spacearo':
            container.style.justifyContent = 'space-around';
            break;
        case 'justcont-spaceeven':
            container.style.justifyContent = 'space-evenly';
            break;
        case 'alignit-start':
            container.style.alignItems = 'flex-start';
            break;
        case 'alignit-end':
            container.style.alignItems = 'flex-end';
            break;
        case 'alignit-center':
            container.style.alignItems = 'center';
            break;
        case 'alignit-stretch':
            container.style.alignItems = 'stretch';
            break;
        case 'alignit-baseline':
            container.style.alignItems = 'baseline';
            break;
        case 'aligncont-start':
            container.style.alignContent = 'flex-start';
            break;
        case 'aligncont-end':
            container.style.alignContent = 'flex-end';
            break;
        case 'aligncont-center':
            container.style.alignContent = 'center';
            break;
        case 'aligncont-stretch':
            container.style.alignContent = 'stretch';
            break;
        case 'aligncont-spacebetw':
            container.style.alignContent = 'space-between';
            break;
        case 'aligncont-spacearo':
            container.style.alignContent = 'space-around';
            break;
        case 'scale-col':
            menu.style.gridTemplateColumns = 'repeat(1, auto)';
            menu.style.gridAutoFlow = 'column';
            break;
        case 'scale-row':
            menu.style.gridTemplateColumns = 'repeat(1, auto)';
            menu.style.gridAutoFlow = 'row';
            break;
        case 'add-item':
            console.dir(container);
            let newElement = document.createElement('div');
            container.appendChild(newElement);
            itemCounter++;
            container.lastElementChild.classList.add(`item`, `item${itemCounter}`);
            newElement.textContent = `${itemCounter}`;
            break;
        case 'rm-item':
            container.lastElementChild.remove();
            itemCounter--;
            break;
        default: 
            console.log('nothing happened here');
            break;
    }
});