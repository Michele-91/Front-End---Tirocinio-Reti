





// Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. 
// Should understand plus + and minus -.

function Calculator() {
    
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    }
    this.calculate = function(str) {

        let split = str.split(' ');
        let a = +split[0];
        let op = +split[1];
        let b = +split[2];

        if(!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

// Usage example
let calc = new Calculator();
console.log(calc.calculate("3 + 7") ); // 10

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and 
// the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.