// Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30,
};

// function count(obj) {
//     let count = 0;
//     for(let value of Object.keys(user)) {
//         count++;
//     }
//     return count;
// }

function count(obj) {
    return Object.keys(user).length;
}

console.log( count(user) ); // 2