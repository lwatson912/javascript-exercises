const repeatString = function(str, num) {
    let i = 0;
    multi = "";
    if (num < 0) {
        multi = "ERROR";
        return multi;}
    else {
        while (i < num) {
            multi += str;
            i ++;
        }
    return multi;
    }
    
}

// Do not edit below this line
module.exports = repeatString;
