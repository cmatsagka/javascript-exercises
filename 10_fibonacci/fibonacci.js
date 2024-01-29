const fibonacci = function(index) {
    let a = 0;
    let b = 1;
    let preSum = a + b; //preSum = 1 a = b b = preSum

    if (index > 0){
        for (i = 1; i < index; i++){
            preSum = a + b;
            a = b;
            b = preSum;
        }
    }else if (index == 0){
        preSum = 0;
    }else {
        preSum = "OOPS";
    }
    
    return preSum;
};

// Do not edit below this line
module.exports = fibonacci;
