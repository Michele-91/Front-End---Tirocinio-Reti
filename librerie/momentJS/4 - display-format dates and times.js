
const m = moment(); 

console.log(m.toString());
console.log(m.format("dddd MMM YYYY"));
console.log(m.format("dddd Mo YYYY"));
console.log(m.format("[Yeah the day is] dddd [and we're in] YYYY"));

m.locale("en-au");
console.log(m.format("L"));
const m2 = moment("2019-05-13")

console.log(m2.fromNow());
console.log(m2.from("2019-02-10"));

const eventMoment = moment().add(2, "hours");
console.log(eventMoment.calendar());