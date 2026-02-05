// Adding a new property to an object
let user = {
  name: "Rahul",
  age: 22,
  city: "Kochi"
};

user.email = "rahul@gmail.com";

console.log(user);

// Deleting a property from an object
delete user.city;
console.log(user);