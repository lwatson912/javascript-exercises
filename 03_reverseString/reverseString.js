const reverseString = function(text) {
    const myArray = text.split('');
    myArray.reverse();
    let newText = myArray.join('');
    return newText;
};

// Do not edit below this line
module.exports = reverseString;
