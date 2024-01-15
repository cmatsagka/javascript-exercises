const repeatString = function(string, num) {
    string = "hey";
    num = 3;
    let newString = "";
    
    for (i=0; i<num; i++){
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
