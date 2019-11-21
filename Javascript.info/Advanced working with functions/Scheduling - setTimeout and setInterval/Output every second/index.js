// Write a function printNumbers(from, to) that outputs a number every second, 
// starting from from and ending with to.

// Make two variants of the solution.
// Using setInterval.
// Using nested setTimeout.

// function printNumbers(from, to) {
//     let timerId = setInterval( () => {
//         if(from <= to) {
//             console.log(from);
//             from++;
//         } else {
//             clearInterval(timerId);
//         }
//     }, 1000);
// }
    

function printNumbers(from, to) {
    setTimeout( function go() {
        if(from <= to) {
            console.log(from);
            timerId = setTimeout(go, 1000);
        }
        from++;
    }, 1000);
}
printNumbers(3, 7);

// soluzione online
// function printNumbers(from, to) {
//     let current = from;
  
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }