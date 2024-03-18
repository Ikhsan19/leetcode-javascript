var findMedianSortedArrays = function(nums1, nums2) {
    let median;
    let merged = []
    console.log(merged)
    for (let i = 0; i < nums1.length; i++) {
        merged.push(nums1[i]);
    }
    for (let i = 0; i < nums2.length; i++) {
        merged.push(nums2[i]);
    }
    merged.sort(function(a, b) {
        return a - b;
    });
    if (merged.length % 2 === 1) {
        median = merged[(merged.length - 1) / 2];
    } else {
        median = (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2;
    }
    return median
};
console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 3], [2, 4]))

// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums = nums1.concat(nums2).sort((a, b) => a - b)
//     if (nums.length % 2 === 0) {
//         let mid = Math.trunc(nums.length / 2) - 1
//         return (nums[mid] + nums[mid + 1]) / 2
//     } else {
//         let mid = Math.trunc(nums.length / 2)
//         return nums[mid]
//     }
// };
// console.log(findMedianSortedArrays([1, 3], [2, 4]))
// console.log(findMedianSortedArrays([1, 3], [2]))