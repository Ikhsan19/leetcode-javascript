var arrayStringsAreEqual = function(word1, word2) {
    const string1 = word1.join('');
    const string2 = word2.join('');
    return string1 === string2;
}
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))