const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, number) => product * number);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let product = 1;
  for (let n = num; n > 0; n--) {
    product *= n;
  }
  return product;
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
