function square(n) {
  return n * n;
}

function fahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

function rectangleArea(a, b) {
  return a * b;
}

function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

module.exports = {
  square,
  fahrenheit,
  rectangleArea,
  isPalindrome,
};
