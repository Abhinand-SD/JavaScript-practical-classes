// Type Coercion in JavaScript
let str = "5";
let num = 10;
let result = str + num;
console.log(result); // "510" - number is coerced to string for concatenation

let subtraction = num - str;
console.log(subtraction); // 5 - string is coerced to number for subtraction

let multiplication = num * str;
console.log(multiplication); // 50 - string is coerced to number for multiplication

let division = num / str;
console.log(division); // 2 - string is coerced to number for division