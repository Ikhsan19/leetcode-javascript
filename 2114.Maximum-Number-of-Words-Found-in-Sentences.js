var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(' ');
        console.log(sentences[0])
        const wordCount = words.length;
        maxWords = Math.max(maxWords, wordCount); // Math.max() untuk mengembalikan nilai terbesar dari satu atau lebih argumen. 
    }
    return maxWords;
};
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));