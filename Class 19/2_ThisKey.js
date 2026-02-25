let user = {
  name: "Amit",
  
  greet() {
    console.log(this.name);
  }
};

user.greet();