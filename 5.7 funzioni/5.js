
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function convert(str) {
    str = str.split(' ');
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str;
}

console.log(convert('tanto va la gatta al lardo che ci lascia lo zampino'));