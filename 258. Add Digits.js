// Tidak submit //
const addDigits = function(num) {
    while (num >= 10) {
        num = String(num).split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return num;
}

const num1 = 38;
const result1 = addDigits(num1);
console.log(`Input: ${num1}\nOutput: ${result1}`);

const num2 = 0;
const result2 = addDigits(num2);
console.log(`Input: ${num2}\nOutput: ${result2}`);