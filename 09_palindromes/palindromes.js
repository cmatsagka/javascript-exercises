const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ");

    let strRev = str.split('').reverse().join('');
    let arr = str.split('');

    let result;

    for (i = 0; i < arr.length; i++){
        if (arr[i] !== strRev[i]){
            result = false;
            break;
        }else{
            result = true;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
