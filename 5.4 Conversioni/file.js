
/* boolean to number conversion */
let boolean = true;
boolean = Number(boolean);
console.log(boolean); // result: 1

let boolean2 = false;
boolean2 = Number(boolean2);
console.log(boolean2) // result: 2

/* boolean to string conversion */
let boolean3 = false;
boolean3 = String(boolean3);
console.log(boolean3); // result: "false";

let boolean4 = true;
boolean4 = String(boolean4);
console.log(boolean4); // result: "true";












/* number to boolean conversion */
let num = 0;
num = Boolean(num);
console.log(num); // result: false

let num2 = NaN;
num2 = Boolean(num2);
console.log(num2); // result: false

let num3 = 5;
num3 = Boolean(num3);
console.log(num3); // result : true

/* number to string conversion */
let num4 = NaN;
num4 = String(num4);
console.log(num4); // result: "NaN";

let num5 = 7;
num5 = String(num5);
console.log(num5); // result: "7";

let num6 = Infinity;
num6 = String(num6);
console.log(num6); // result: "Infinity";












/* string to boolean conversion */ 
let str = "hello";
str = Boolean(str);
console.log(str); // result: true;

let str2 = "";
str2 = Boolean(str2);
console.log(str2); // result // false;

/* string to number conversion */
let str3 = "4.5";
str3 = Number(str3);
console.log(str3); // result: 4.5;

let str4 = "";
str4 = Number(str4);
console.log(str4);  // result: 0;

let str5 = "Nan";
str5 = Number(str5);
console.log(str5); // result: Nan;









/* null to boolean conversion */

let assenza = null;
assenza = Boolean(assenza);
console.log(assenza); // result: false;

/* null to number conversion */

let assenza2 = null;
assenza2 = Number(assenza2);
console.log(assenza2); // result: 0;

/* null to string conversion */

let assenza3 = null;
assenza3 = Number(assenza3);
console.log(assenza3); // result: "null";









/* undefined to boolean conversion */

let indefinito = undefined;
indefinito = Boolean(indefinito);
console.log(indefinito);

/* undefined to number conversion */

let indefinito2 = undefined;
indefinito2 = Number(indefinito2);
console.log(indefinito2); // result: NaN;

/* undefined to string conversion */

let indefinito3 = undefined;
indefinito3 = String(indefinito3);
console.log(indefinito3); // result: "undefined";
