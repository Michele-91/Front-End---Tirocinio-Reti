

// Sort the array in decreasing order



let arr = [5, 2, 1, -10, 8];

// function decreasingOrder(a, b) {
//     if (b > a) return 1;
//     if (a == b) return 0;
//     if (a > b) return -1;
// }
// arr.sort(decreasingOrder);

arr.sort( (a, b) => b - a);

console.log( arr ); // 8, 5, 2, 1, -10