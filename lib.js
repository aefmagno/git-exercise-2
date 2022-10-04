function square(n) {
    return n*n;
}

function fahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32;
}

function rectangleArea(a, b) {
    return a * b;
}

function isPalindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

console.log(square(5));
console.log(fahrenheit(60));
console.log(rectangleArea(5, 9));
console.log(isPalindrome('Bob'));
