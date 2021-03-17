const ThreeDimention = require("./threeDimention");

class Cube extends ThreeDimention {
  constructor(length) {
    super("Cube");
    this.length = length;
  }

  // Overloading method
  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  // Overridding
  calculateVolume() {
    super.calculateVolume();
    let volume = this.length ** 3;

    console.log(`${this.name} volume is ${volume} cm3 \n`);
  }

}

module.exports = Cube;
