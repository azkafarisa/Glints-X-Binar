const ThreeDimention = require("./threeDimention");

class Beam extends ThreeDimention {
  constructor(length, width, height) {
    super("Beam");
    this.length = length;
    this.width = width;
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
    let volume = this.length * this.width * this.height;

    console.log(`${this.name} volume is ${volume} cm3 \n`);
  }

}

module.exports = Beam;
