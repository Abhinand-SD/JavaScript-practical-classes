// parseInt() & parseFloat()
let price = "100.75";

console.log(parseInt(price));    // 100
console.log(parseFloat(price)); // 100.75
// toFixed() – decimal formatting
let amount = 99.5678;

console.log(amount.toFixed(2)); // "99.57"
// ⚠️ returns string — convert if needed:
Number(amount.toFixed(2));