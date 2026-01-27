// Condition inside another condition.

let age = 22;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Entry allowed");
  } else {
    console.log("ID required");
  }
}
