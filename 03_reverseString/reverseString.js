let wordLength = 0;

const reverseString = function(word) {
    wordLength = word.length;
    let newWord = "";
    
    for (i = wordLength-1; i >= 0; i--) {
        newWord += word[i];
    }

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
