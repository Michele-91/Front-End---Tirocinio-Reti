// Write function sum that works like this: sum(a)(b) = a+b.

function sum(a) {
    return function(b) {
        return a + b;
    }
}

// For instance:
// sum(1)(2) = 3
// sum(5)(-1) = 4

console.log(sum(1)(2));
console.log(sum(5)(-1));