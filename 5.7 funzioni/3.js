// Write a JavaScript function that generates all combinations of a string.

// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const powerset = (array) => { // O(2^n)
	const results = [[]];
	for (const value of array) {
		const copy = [...results]; // See note below.
		for (const prefix of copy) {
			results.push(prefix.concat(value));
		}
	}
	return results;
};

console.log(
	powerset(['D', 'O', 'G'])
);