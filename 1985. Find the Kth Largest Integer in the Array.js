// var kthLargestNumber = function(nums, k) {
//     nums.sort((a, b) => {
//         if (a.length !== b.length) {
//             return a.length - b.length;
//         } else {
//             return a.localeCompare(b); // For strings of the same length, compare lexicographically
//         }
//     });
//     return nums[nums.length - k];
// };
// console.log(kthLargestNumber(["2", "21", "12", "1"], 4))

function kthLargestNumber(nums, k) {
    nums.sort((a, b) => b - a);
    console.log(nums)
    return nums[k - 1];
}

// Example 1
console.log(kthLargestNumber(["2", "21", "12", "1"], 4));