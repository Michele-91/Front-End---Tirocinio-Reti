// We’d like to get an array of map.keys() in a variable and then do apply array-specific methods to it, e.g. .push.

// But that doesn’t work:

let map = new Map();

map.set("name", "John");
map.set("surname", "Smith");
map.set("address", "New York");
map.set("occupation", "programmer");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");
console.log(keys);

// Why? How can we fix the code to make keys.push work?
// Dobbiamo convertire i valori trovati in un array e poi utilizzare il metodo .push();