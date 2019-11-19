// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string

function vowelNum(str) {
    let vowelCount = 0;
    let consonantCount = 0;
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a': case 'A':
            case 'e': case 'E':
            case 'i': case 'i':
            case 'o': case 'o':
            case 'u': case 'U':
            vowelCount = vowelCount + 1;
            break;
            default:
            consonantCount++;  
            break;
        }
    }
    return vowelCount;
}

console.log(vowelNum('supercalifragilistichespiralidoso'));