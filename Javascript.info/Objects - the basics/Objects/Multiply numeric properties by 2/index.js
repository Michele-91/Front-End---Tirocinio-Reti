// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


// after the call
// menu = {
    //   width: 400,
    //   height: 600,
    //   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. 
// It should modify the object in-place.
    
function multiplyNumeric(obj) {
    for( let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
    
multiplyNumeric(menu);
console.log(menu);