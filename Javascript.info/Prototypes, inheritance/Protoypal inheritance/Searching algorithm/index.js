// The task has two parts.

// Given the following objects:

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table 
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
// pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), 
console.log(pockets.pen);
// and bed.glasses should be 1 (found in head).
console.log(bed.glasses);
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
// head.glasses
// In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. 
//They remember where the property was found and reuse it in the next request.