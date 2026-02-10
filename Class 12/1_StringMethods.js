let text = "  JavaScript Basics  ";

console.log(text.length);          // count characters
console.log(text.trim());          // remove spaces
console.log(text.toUpperCase());   // JAVASCRIPT BASICS
console.log(text.toLowerCase()); // javascript basics

// Useful ones:
let msg = "Hello World";

console.log(msg.includes("World"));   // true
console.log(msg.startsWith("Hello")); // true
console.log(msg.replace("World", "JS")); // Hello JS
console.log(msg.split(" ")); // ["Hello","World"]