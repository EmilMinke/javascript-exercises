const removeFromArray = function(originalArray, ...removedFromArray) {
    return originalArray.filter(filterItem => !removedFromArray.includes(filterItem));
};

// Do not edit below this line
module.exports = removeFromArray;
