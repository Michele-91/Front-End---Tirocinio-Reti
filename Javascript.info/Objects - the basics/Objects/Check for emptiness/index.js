// Write the function isEmpty(obj) which returns true if the object has no 
// properties, false otherwise.

function isEmpty(obj) {
    let count = 0;
    for( let prop in obj) {
        count++;
    }
    if(count > 0) {
        return false;
    }
    return true;
}

// Soluzione online
// function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false
