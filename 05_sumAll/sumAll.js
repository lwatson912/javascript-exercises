const sumAll = function(a, b) {
    let total = 0;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    else if (a < 0 || b < 0) {
        return 'ERROR';
    }

    else if (a > b) {
        while (b <= a) {
            total += b;
            b++;
            
        }
    }
    else {
        while (a <= b) {
            total += a;
            a++;
            
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
