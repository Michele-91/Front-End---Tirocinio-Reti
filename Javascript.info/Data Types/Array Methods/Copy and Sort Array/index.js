
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let arr2 = arr.map(item => item);
    return arr2.sort();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)


// soluzione line
// function copySorted(arr) {
//     return arr.slice().sort();
//   }