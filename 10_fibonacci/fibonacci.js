const fibonacci = function(num) {
    let a = 1, b = 0, temp;
    if (num < 0) {
        return 'OOPS';
    }
    else {
        while (num > 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;


// start with 1, 
// 1 + 1 = 2