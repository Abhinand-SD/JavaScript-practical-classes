// Used when no argument is passed

function greet(name = "Guest") {
  console.log("Hello", name);
}

greet();        // Guest
greet("Rahul"); // Rahul