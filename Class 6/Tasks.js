// Function declaration
function welcome(name) {
  return `Welcome ${name}`;
}
console.log(welcome("Student"));

// Function expression
const add = function (a, b) {
  return a + b;
};
console.log(add(10, 5));

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 3));

// Default parameter
const greet = (name = "User") => `Hello ${name}`;
console.log(greet());