
let hamster = {
    stomach: [],
    
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple


// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?
// Posso sia assegnare food direttamente a this.stomach senza usare un metodo array, oppure dotare sia speedy che lazy di un
// proprio array stomach

