const palindromes = function (text) {
    textLower = text.toLowerCase();
    textNoPunc = textLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    textNoSpaces = textNoPunc.replace(/\s+/g, '');
    const myArray = textNoSpaces.split('');
    myArray.reverse();
        let newText = myArray.join('');
        if (newText == textNoSpaces) {
            return true;
        }
        else {
            return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
