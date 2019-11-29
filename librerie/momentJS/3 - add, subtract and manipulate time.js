
const m = moment();

console.log(`Original Moment: ${m.toString()}`);

m.add(4, "hours");
m.add(4, "h");

m.add( {
    "hours": 7,
    "minutes": 15
});

m.subtract( {
    "hours": 7,
    "minutes": 15
});

m.add(7, "hours").add(7, "minutes");


m.startOf("hour");
m.endOf("day");

m.utc();
m.local();

m.utcOffset();
m.utcOffset(300);
m.utcOffset("03:00");
m.utcOffset("-03:00");

console.log(`After manipulation: ${m.toString()}`);