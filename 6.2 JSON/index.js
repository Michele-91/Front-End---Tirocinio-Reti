// Dato il seguente JSON:

/*
[
    { “nome”: “Marco”, “data”: “23/02/1980”, “occhi”: null, “capelli”: “neri” }, 
    { “nome”: “Caterina”, “data”: “07/04/2015”, “occhi”: null, “capelli”: “null” }
]
*/

let esempio = [
    { 
        "nome": "Marco", 
        "data": "23/02/1980", 
        "occhi": null, 
        "capelli": "neri"
    }, 
    { 
        "nome": "Caterina", 
        "data": "07/04/2015", 
        "occhi": null, 
        "capelli": "null" 
    }
]

// Trasformalo in stringa non inserendo le proprietà null.
// Ritrasformalo poi in un oggetto Javascript creando degli oggetti Date per le date.
let stringEsempio = JSON.stringify(esempio, function replacer(key, value) {
    return (value == "null" || value == null) ? undefined : value;
});
console.log(stringEsempio);
let parseEsempio = JSON.parse(stringEsempio, function(key, value) {
    return (key == "data") ? new Date(value) : value;
});
console.log(parseEsempio);


// versione tutta attaccata
// let stringEsempio = JSON.parse(JSON.stringify(esempio, function replacer(key, value) {
//     return (value == "null" || value == null) ? undefined : value;
// }), function(key, value) {
//     return (key == "data") ? new Date(value) : value;
// });
// console.log(stringEsempio);
