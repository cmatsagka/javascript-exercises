const removeFromArray = function(items, ...theArgs) {

    function isIncluded(item) {
        if (!theArgs.includes(item)) {
            return item;
        }
    }

    return items.filter(isIncluded);
};

// Do not edit below this line
module.exports = removeFromArray;
