// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.


let calculator = {
    read() {
        this.num1 = +prompt("insert first number:", 0);
        this.num2 = +prompt("insert second number2:", 0);
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );