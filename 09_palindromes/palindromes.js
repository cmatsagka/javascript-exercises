const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "");

    return str.split('').reverse().join('') == str;
};

// Do not edit below this line
module.exports = palindromes;
