var mergeKLists = function(lists) {
    let mergeK = [].concat(...lists).sort();
    console.log(mergeK)
    return mergeK;
};
console.log(mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6]
]))