// Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let stringUser = JSON.stringify(user);
console.log(stringUser);
let reObjectUser = JSON.parse(stringUser);
console.log(reObjectUser);

// soluzione online
// let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);