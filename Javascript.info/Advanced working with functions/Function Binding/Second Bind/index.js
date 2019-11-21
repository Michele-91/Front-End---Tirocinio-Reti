// Can we change this by additional binding?


function f() {
    alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();

// What will be the output?
// L'output sarà John

// The exotic bound function object returned by f.bind(...) remembers the context (and arguments if provided) only at creation time.

// A function cannot be re-bound.