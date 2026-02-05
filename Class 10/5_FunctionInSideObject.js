let car = {
  brand: "Tesla",
  speed: 0,

  accelerate() {
    this.speed += 20;
    console.log("Speed:", this.speed);
  },

  brake() {
    this.speed -= 10;
    console.log("Speed:", this.speed);
  }
};

car.accelerate();
car.brake();