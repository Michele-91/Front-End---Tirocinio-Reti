// Write a JavaScript function which accepts an argument and returns the type

function type(param) {
    return typeof param;
}

console.log(type('stringa'));
console.log(type(45));
console.log(type(true));
console.log(type({}));
console.log(type(function(){}));
console.log(type(undefined));