var addStrings = function(num1, num2) {
    let result = (BigInt(num1) + BigInt(num2)).toString();
    return result;
};
console.log(addStrings("9333852702227987", "85731737104263"))
console.log(addStrings("0", "0"))