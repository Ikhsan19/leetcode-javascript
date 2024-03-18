var createCounter = function(n) {

    return function() {
        return n++
    };
};
const horus = createCounter(-2);
console.log(horus());
// console.log(horus());
// console.log(horus());