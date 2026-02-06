//Variable hoisting
console.log(a); // undefined due to hoisting
var a = 10;

//Function hoisting
greet();

function greet() {
  console.log("Hello");
}