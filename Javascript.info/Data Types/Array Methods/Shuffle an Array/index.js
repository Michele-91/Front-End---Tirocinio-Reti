// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. 

// here’s a great algorithm called Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it:
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    
        // swap elements arr[i] and arr[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = arr[i]; arr[i] = arr[j]; arr[j] = t
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };


for( let i = 0; i < 10000000; i++) {
    let arr = [1, 2, 3];
    shuffle(arr);
    count[arr.join('')]++;
}

for(let prop in count) {
    console.log(`${prop}: ${count[prop]}`);
}

