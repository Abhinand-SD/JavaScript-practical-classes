let user = {
  name: "Ravi",
  address: { city: "Kochi" }
};

// Old way (not recommended fully)
let deepCopy = JSON.parse(JSON.stringify(user));
//breaks Dates, functions, undefined


{
//  Best modern way — structuredClone()
let deepCopy = structuredClone(user);
}
deepCopy.address.city = "Kannur";

console.log(user.address.city); // Kochi  safe