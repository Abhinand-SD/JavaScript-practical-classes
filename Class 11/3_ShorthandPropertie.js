// ❌ Old way
let name = "Rahul";
let age = 22;

let user = {
  name: name,
  age: age
};

{
// ✅ Modern way
let name = "Rahul";
let age = 22;

let user = { name, age };
console.log(user);
}