

// Write a JavaScript function that reverses a number
function reverse(num) {
    let remainder;
    let reversedNum = '';
    for(let i = 0; i < num; i++) {
        remainder = num % 10;
        num = Math.trunc(num / 10);
        reversedNum += remainder;
    }

    return reversedNum;
}

// soluzione online
// function reverse(num) {
//     num = num + '';
//     return num.split('').reverse('').join('');
// }


console.log(reverse(54));
console.log(reverse(324));
console.log(reverse(80531));


