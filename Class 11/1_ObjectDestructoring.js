let user = { name: "Asha", age: 24, city: "Kochi" };

let name = user.name;
let age = user.age;

{
let { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
}

