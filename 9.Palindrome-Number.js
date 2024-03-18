// menggunakan array method reverse()
// namun reverse() hanya bisa mengembalikan nilai array
// jadi ubah ke string menggunakan .toString()

// let isPalindrome = function(x) {
//     if (x.toString() === x.toString().split("").reverse().join("")) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(isPalindrome(121));

// bisa lebih singkat
let isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("");
};
console.log(isPalindrome(121));