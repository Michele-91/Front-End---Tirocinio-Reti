// What is the result of this code?

let user = {
  name: "John",
  go: function() { console.log(this.name) }
}

(user.go)()


// code gives an error because the semicolon is missing at the end of the object literal