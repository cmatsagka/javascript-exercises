const sumAll = function(startRange, endRange) {
    let sum = 0;
    let min = Math.min(startRange, endRange);
    let max = Math.max(startRange, endRange);

    if (min < 0 || max < 0) {
        return "ERROR";
    }else {
        for (i = min; i<= max; i++){
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
