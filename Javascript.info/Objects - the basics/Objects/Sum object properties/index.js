// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let unemployedSalary = {

}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
function sumFunc(obj) {
    let sum = 0;
    for(let key in obj) {
        sum += obj[key];
    }
    return sum;
}
console.log(sumFunc(salaries));
console.log(sumFunc(unemployedSalary));


