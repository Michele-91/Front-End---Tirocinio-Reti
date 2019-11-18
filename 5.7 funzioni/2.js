

// Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(str) {
    return (str === str.split('').reverse().join(''));
}

console.log(palindrome('ingegni'));
console.log(palindrome('laptop'));