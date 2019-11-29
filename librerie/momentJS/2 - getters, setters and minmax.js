
const m = moment();

console.log(m.toString());

// Getting units
console.log(m.minutes());
console.log(m.hour());
console.log(m.week());
console.log(m.get("quarter"));
console.log(m.quarter());


// Setting units
m.minutes(52);
m.hour(14);
m.week(4);
m.set("day", 4);

console.log(m.toString());

const differentMoment = moment("2019-05-25");

console.log(moment.max(m, differentMoment).toString());
console.log(moment.min(m, differentMoment).toString());