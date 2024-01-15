const sumAll = function(startRange, endRange) {
    let i = startRange;
    let sum = 0;
    
    while (i <= endRange){
        sum += i;
        i++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
