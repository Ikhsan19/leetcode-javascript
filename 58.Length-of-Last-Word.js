var lengthOfLastWord = function(s) {
    let cleaned = s.split(/\s+/).join(' ').trim();
    let words = cleaned.split(' ');
    return result = words[words.length - 1].length;
};
let x = "   fly me   to   the moon  "
console.log(lengthOfLastWord(x))