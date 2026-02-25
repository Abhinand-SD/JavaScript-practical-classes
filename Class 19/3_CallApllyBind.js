
function greet(city) {
  console.log(this.name + " from " + city);
}

let user = { name: "Abhinand" };


// call()
greet.call(user, "Kochi");

// apply()
// Same as call but uses array.
greet.apply(user, ["Calicut","Kochi"]);

// bind()
// Creates a new function
let newFunc = greet.bind(user, "Trivandrum");
newFunc();