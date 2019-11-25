let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();


// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
// rabbit
console.log(rabbit);