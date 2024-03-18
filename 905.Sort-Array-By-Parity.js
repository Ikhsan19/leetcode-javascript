var sortArrayByParity = function(nums) {
    let evenOdd = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenOdd.push(nums[i]);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            evenOdd.push(nums[i]);
        }
    }
    return evenOdd;
};
console.log(sortArrayByParity([0]));
console.log(sortArrayByParity([3, 1, 2, 4]));

// var sortArrayByParity = function(nums) {
//     let evenIndex = 0;

//     // Memindahkan bilangan genap ke bagian depan array
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             // Tukar nilai dengan elemen di evenIndex dan tingkatkan evenIndex
//             [nums[i], nums[evenIndex]] = [nums[evenIndex], nums[i]];
//             console.log(nums[evenIndex])
//             console.log(evenIndex)
//             evenIndex++;
//         }
//     }
//     return nums;
// }
// console.log(sortArrayByParity([3, 1, 2, 4]));
// console.log(sortArrayByParity([0]));

// var sortArrayByParity = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//         while (left < right && nums[left] % 2 === 0) {
//             left++;
//         }
//         while (left < right && nums[right] % 2 === 1) {
//             right--;
//         }
//         if (left < right) {
//             [nums[left], nums[right]] = [nums[right], nums[left]];
//             left++;
//             right--;
//         }
//     }
//     return nums;
// }
// console.log(sortArrayByParity([3, 1, 2, 4, 9]))