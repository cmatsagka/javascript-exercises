let newItems = "";

const removeFromArray = function(items, item1, item2) {
    for (i=0; i<items.length; i++){
        if (items[i] === item1){
           newItems = items.toSpliced(i, 1);
        }
    }
    for (i=0; i<newItems.length; i++){
        if (items[i] === item2){
           newItems = newItems.toSpliced(i, 1);
        }
    }
    return newItems;
};

// Do not edit below this line
module.exports = removeFromArray;
