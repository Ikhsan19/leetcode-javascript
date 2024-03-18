var increasingTriplet = function(nums) {
    if (nums.length < 3) {
        return false;
    }

    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    return false;
};

let x = [5, 4, 3, 2, 1]
console.log(increasingTriplet(x));