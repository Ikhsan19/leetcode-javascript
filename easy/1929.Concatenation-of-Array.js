var getConcatenation = function(nums) {
    const ans = new Array(2 * nums.length);
    for (let i = 0; i < nums.length; i++) {
        ans[i] = ans[i + nums.length] = nums[i];
    }
    return ans;
};
console.log(getConcatenation([1, 2, 1]))

// var getConcatenation = function(nums) {
//     let numss = nums;
//     let x = nums.length;
//     for (i = 0; i < x; i++) {
//         numss.push(nums[i]);
//     }
//     return numss;
// };