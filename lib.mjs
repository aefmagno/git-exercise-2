export function square(n) {
  return n * n
}

export function fahrenheit(celsius) {
  return celsius * (9 / 5) + 32
}

export function rectangleArea(a, b) {
  return a * b
}

export function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}
