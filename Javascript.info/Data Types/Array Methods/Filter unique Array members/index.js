
// Let arr be an array.
let arr = [];

// Create a function unique(arr) that should return an array with unique items of arr.
function unique(strings) {
    strings.map(item => {
        if(!arr.includes(item)) {
            arr.push(item)
        }
    });
    return arr;
}

// For instance
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O


// soluzione online
// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   }
  