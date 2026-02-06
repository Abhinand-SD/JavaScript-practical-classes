let name = "Neha";
let age = 26;
let city = "Bangalore";

// Shorthand object
let user = { name, age, city };

// Destructuring
let { name: userName, age: userAge } = user;
console.log(userName, userAge);

// keys, values, entries
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Nested object
let profile = {
  user,
  skills: ["JS", "React"],
  address: { country: "India", pin: 560001 }
};

// Shallow copy
let shallow = { ...profile };
shallow.address.pin = 111111;

console.log("Original PIN:", profile.address.pin); // changed

// Deep copy
let deep = structuredClone(profile);
deep.address.pin = 999999;

console.log("After deep copy PIN:", profile.address.pin); // unchanged
// ✅ Why this matters (real world)

// In React:
setUser({...user, name: "New"})

// In APIs:
const { id, email } = req.body;

// In security-safe cloning:
structuredClone(data)