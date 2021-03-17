const {
  Square,
  Rectangle,
  Triangle,
  Beam,
  Cube,
  Tube,
  Cone,
} = require("./geometry");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

//Square
let square1 = new Square(5);
square1.calculateArea();
square1.calculateCircumference();

//Rectangle
let rectangle1 = new Rectangle(20, 15);
rectangle1.calculateArea();
rectangle1.calculateCircumference();

//Triangle
let triangle1 = new Triangle(7, 10);
triangle1.calculateArea();
triangle1.calculateCircumference();

//Beam
let beam1 = new Beam(9, 5, 6);
beam1.calculateVolume();

//Cube
let cube1 = new Cube(15);
cube1.calculateVolume();

//Tube
let tube1 = new Tube(7, 10);
tube1.calculateVolume();

//Cone
let cone1 = new Cone(14, 12);
cone1.calculateVolume();

// function measureGeometry() {
//   console.log("Measure Geometry");
//   console.log("1. Cube\n2. Beam");
//   rl.question("Choose Shape : ", (shape) => {
//     if (shape == 1) {
//       rl.question("Cube length : ", (length) => {
//         let cube1 = new Cube(length);
//         cube1.calculateVolume();
//         rl.close();
//       });
//     } else if (shape == 2) {
//         rl.question("Beam length : ", (length) => {
//           rl.question("Beam width : ", (width) => {
//             rl.question("Beam height : ", (height) => {
//               let beam1 = new Beam(length, width, height);
//               beam1.calculateVolume();
//               rl.close();
//             });
//           });
//         });
//       } else {
//       console.log(`Your Selection is Not in the OPTION\n`);
//       measureGeometry();
//     }
//   });
// }
// measureGeometry();
