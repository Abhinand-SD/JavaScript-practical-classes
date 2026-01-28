let age = 17;

// if-else
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// Ternary
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// switch
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Fail");
}