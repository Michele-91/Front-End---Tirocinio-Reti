// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Make 3 solution variants:
// Using a for loop.
// function sumTo(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(n) {
    if (n == 1) {
        return 1;   
    }
    else {
        return n + sumTo(n - 1)
    }
}
// function sumTo(n) {
//     return n == 1 ? 1 : n + sumTo(n - 1);
// }


// Using the arithmetic progression formula.


// function sumTo(n) { /*... your code ... */ }

// An example of the result:
console.log( sumTo(100) ); // 5050


// P.S. Which solution variant is the fastest? The slowest? Why?
// Di solito la soluzione che utilizza il for loop è la più veloce, in quanto la ricorsione deve salvare in memoria
// il contesto d'esecuzione di tante funzioni quanti sono i cicli di ricorsione, e ciò rende il processo più lento
// (intuitivamnete mi verrebbe anche da pensare, personalmente, che naturalmente "l'andata e ritorno" impieghino più
// tempo dell'andata e basta);
// In questo caso però la soluzione aritmetica è la più veloce in assoluto, perché il numero di operazioni
// necessarie ad ottenere il risultato è molto più basso

// P.P.S. Can we use recursion to count sumTo(100000)?
// No perché è difficile che l'interpreter utilizzato supporti un numero di contesti d'esecuzione talmente elevato