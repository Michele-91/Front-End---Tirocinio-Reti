// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

  
function sumSalaries(salaries) {
    let sum = 0;
    for(let value of Object.values(salaries)) {
        sum += value;
    }
    return sum;
}

// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce( (sum, salary) => sum + salary);
// }


console.log(sumSalaries(salaries)); // 650