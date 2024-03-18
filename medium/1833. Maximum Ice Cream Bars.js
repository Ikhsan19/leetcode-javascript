var maxIceCream = function(costs, coins) {
    let x = costs;
    x.sort((a, b) => a - b);
    let totalBuy = 0;
    let totalPrice = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] <= coins) {
            totalPrice += x[i];
            if (totalPrice <= coins) {
                totalBuy++;
            }
        }
    }
    return totalBuy;
};
console.log(maxIceCream([1, 3, 2, 4, 1], 7))