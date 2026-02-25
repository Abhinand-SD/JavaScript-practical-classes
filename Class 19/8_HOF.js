function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Process finished");
}

greetUser("Abhinand", done);