const ThreeDimention = require("./threeDimention");

class Cone extends ThreeDimention {
  constructor(radius, height) {
    super("Cone");
    this.radius = radius;
    this.height = height;
  }

  // Overloading method
  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  // Overridding
  calculateVolume() {
    super.calculateVolume();
    let volume = Math.PI * Math.pow(this.radius, 2) * this.height * 1/3;

    console.log(`${this.name} volume is ${volume} cm3 \n`);
  }

}

module.exports = Cone;
