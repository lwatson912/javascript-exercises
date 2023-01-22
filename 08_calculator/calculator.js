const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let arraySum = 0
  for (let i = 0; i < arr.length; i += 1) {
    arraySum += arr[i];
  }
  return arraySum;
};

const multiply = function(arr) {
	let arrayMulti = 1;
  for (let i = 0; i < arr.length; i += 1) {
    arrayMulti = arrayMulti * arr[i];
  }
  return arrayMulti;
};

const power = function(a, b) {
  return Math.pow(a, b);	
};

const factorial = function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
