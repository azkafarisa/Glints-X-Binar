const index = require("../index");
//import index to run rl on this file

//function to calculate cylinder volume
function calculateCylinder(radius, height) {
  return Math.PI * height * Math.pow(radius, 2);
}

// Function to input the measurements
function input() {
  index.rl.question("Input Radius (m): ", (r) => {
    if (r > 0) {
      index.rl.question("Input Height (m): ",(h)=>{
        if (h > 0) {
          console.log(`\nCylinder's volume is ${calculateCylinder(r, h)} m3 \n`);
          index.menu();
        } else {
          console.log(`Height must be number and > 0`);
          input();
        }
      })
    } else {
      console.log(`Radius must be number and > 0`);
      input();
    }
  });
}

// Export the input function, so another file can run this code
module.exports = { input }; 
