// Write a JavaScript function which will take an array of numbers stored and find the second 
// lowest and second greatest numbers, respectively

function second(nums) {
    nums.sort( (a,b) => a - b);
    console.log(nums[1]);
    console.log(nums[nums.length - 2]);
}

second([1,2,3,4,5]);

// secondSample array : [1,2,3,4,5]
// Expected Output : 2,4