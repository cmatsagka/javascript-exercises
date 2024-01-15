const removeFromArray = function(items, item) {
    for (i=0; i<items.length; i++){
        if (items[i] === item){
            return items.toSpliced(i, 1); 
        }
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
