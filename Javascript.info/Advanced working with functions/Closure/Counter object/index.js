function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); // ?
  console.log( counter.up() ); // ?
  console.log( counter.down() ); // ?

//Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?
// Sì, funziona. Mosterà 1, poi 2, poi di nuovo 1