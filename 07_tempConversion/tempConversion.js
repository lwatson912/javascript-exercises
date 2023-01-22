const convertToCelsius = function(farenheit) {
    let cel = (farenheit - 32) * .5556;
    let celRound = cel.toFixed(1);
    let resultCel = parseFloat(celRound);
    return resultCel;
};

const convertToFahrenheit = function(celcius) {
    let far = (celcius * 1.8) + 32;
    let farRound = far.toFixed(1);
    let resultFar = parseFloat(farRound);
    return resultFar;

};

// (celcius * 1.8) +32 = f
// (f - 32) * .5556 = c

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
