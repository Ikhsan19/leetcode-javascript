var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let employeesTarget = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            employeesTarget++
        }
    }
    return employeesTarget;
};
console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2))