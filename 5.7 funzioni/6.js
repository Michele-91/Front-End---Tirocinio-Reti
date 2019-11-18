// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function longest(str) {
    let count = 0;
    let longestWord = '';
    str = str.split(' ');
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str[i].length; j++) {
            if (j > count) {
                count = j;
                longestWord = str[i];
            }
        }
    }
    return longestWord;
}

console.log(longest('trentatre trentini entrarono a trento tutti e trentatre trotterellando'));
console.log(longest('tante parole chissà quale sarà la più lunga'));