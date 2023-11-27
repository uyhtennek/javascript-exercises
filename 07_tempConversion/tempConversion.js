const convertToCelsius = function(temp) {
  temp = 5 / 9 * (temp - 32);
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  temp = 9 / 5 * temp + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
