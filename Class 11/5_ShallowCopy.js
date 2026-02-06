let user = {
  name: "Ravi",
  address: { city: "Kochi" }
};

let copy = { ...user };

copy.address.city = "Trivandrum";

console.log(user.address.city); // Trivandrum 😱 (changed!)
// Spread only copies first level