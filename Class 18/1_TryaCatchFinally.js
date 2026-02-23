try {
  let result = 10 / 2;
  console.log(result);
} catch (error) {
  console.log("Error occurred:", error.message);
} finally {
  console.log("Execution finished");
}

// Example with error
try {
  let data = JSON.parse("invalid json");
} catch (error) {
  console.log("Invalid JSON");
}