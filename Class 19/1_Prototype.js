function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

let p1 = new Person("Abhinand");

p1.sayHello();
