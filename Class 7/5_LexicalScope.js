function outer() {
  let name = "JS";

  function inner() {
    console.log(name);
    }
  inner();
}

outer(); // Outputs: JS