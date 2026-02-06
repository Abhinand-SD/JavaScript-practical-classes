let person = {
  name: "Anu",
  age: 25,
  city: "Calicut"
};

// console.log(Object.keys(person));
// ["name", "age", "city"]

console.log(Object.values(person));
// ["Anu", 25, "Calicut"]

console.log(Object.entries(person));
// [["name","Anu"], ["age",25], ["city","Calicut"]]

// Loop using entries
for (let  [key, value] of Object.entries(person)) {
  console.log(key, value);
}