var missingNumber = function(nums) {
    let totalShouldBe = (nums.length * (nums.length + 1)) / 2;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    let missingNumber = totalShouldBe - total;
    return missingNumber;
};
let x = [9, 6, 4, 2, 3, 5, 7, 0, 1]
console.log(missingNumber(x))


// let array = [1, 2, 3, 4, 5];
// let total = 0;

// for (let i = 0; i < array.length; i++) {
//     total += array[i];
// }

// console.log(total);