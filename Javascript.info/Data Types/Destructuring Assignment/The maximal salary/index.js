
// There is a salaries object:

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

//Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

function topSalary(salaries) {
    let max = 0;
    let maxName;
    for(let [name, value] of Object.entries(salaries)) {
        if(value > max) {
            max = value;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));