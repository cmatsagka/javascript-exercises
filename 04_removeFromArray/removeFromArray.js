const removeFromArray = function(items, item1, item2) {

    function isIncluded(item) {
        if (item !== item1 && item !== item2){
            return item;
        }
    }

    return items.filter(isIncluded);
};

// Do not edit below this line
module.exports = removeFromArray;
