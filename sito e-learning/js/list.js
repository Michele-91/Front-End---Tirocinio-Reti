

let filteredList = document.querySelector('.search-bar__field');
let paragraph = document.querySelectorAll('.gallery-item__para');
let card = document.querySelectorAll('.gallery-item');


filteredList.addEventListener('input', function(e) {
    for(let item of paragraph) {
        // filterArr(item.textContent);
        // if(!item.textContent.includes(e.target.value)) {            
        //     item.display = 'none';
        // }
        if(!item.textContent.includes(e.target.value)) {
            item.parentElement.style.display = 'none';
        } else {
            item.parentElement.style.display = '';
        }
    }
    // console.log(e.target.value);
});