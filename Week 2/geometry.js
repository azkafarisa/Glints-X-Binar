const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pi = 3.14;

  function border() {
      console.log(`=================================`);
  }

  function alert() {
      console.log(`Please enter a number`);
  }

  function list() {
      console.log(`1. Cube`);
      console.log(`2. Beam`);
      console.log(`3. Sphere`);
      console.log(`4. Cone`);
      console.log(`5. Cylinder`);
  }

  function calculateAgain() {
      border();
      rl.question(`Wanna Try Again ? (y/n) `, (yesno) => {
        if (yesno == "y") {
            border();
            list();
            border();
            shape();
        }
        else {
            border();
            console.log("Thank you :)");
            rl.close();
        }
      }); 
    }

  function shape() {
    rl.question("Number of the shape : ", (numb) => {
        if (!isNaN(numb)) {
            if (numb == 1) {
                border();
                console.log(`Cube Volume Calculator`);
                cube();
            }
            else if (numb == 2) {
                border();
                console.log(`Beam Volume Calculator`);
                beam();
            }
            else if (numb == 3) {
                border();
                console.log(`Sphere Volume Calculator`);
                sphere();
            }
            else if (numb == 4) {
                border();;
                console.log(`Cone Volume Calculator`);
                cone();
            }
            else if (numb == 5) {
                border();
                console.log(`Cylinder Volume Calculator`);
                cylinder();
            }
            else {
                console.log(`undefined shape`);
                calculateAgain();
            }
        }
        else {
            alert();
            shape();
        }
  });
}

function cube () {
    rl.question("Length : ", (length) => {
        if (!isNaN(length)) {
            result = Math.pow(length, 3);
            console.log("Volume : " + result);
            calculateAgain();
        }
        else {
            alert();
            cube();
        }
    });
}

function beam () {
    rl.question("Length : ", (length) => {
        rl.question("Width : ", (width) => {
            rl.question("Height : ", (height) => {
                if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
                    result = length * width * height;
                    console.log("Volume : " + result);
                    calculateAgain();
                }
                else {
                    alert();
                    beam();
                }
            })
        })
    });
}

function sphere () {
    rl.question("Radius : ", (radius) => {
        if (!isNaN(radius)) {
            result = 4 / 3 * Pi * Math.pow(radius, 3);
            console.log("Volume : " + result);
            calculateAgain();
        }
        else {
            alert();
            sphere();
        }
    });
}

function cone () {
    rl.question("Radius : ", (radius) => {
        rl.question("Height : ", (height) => {
            if (!isNaN(radius) && !isNaN(height)) {
                result = 1 / 3 * pi * height * Math.pow(radius, 2);
                console.log("Volume : " + result);
                calculateAgain();
            }
            else {
                alert();
                cone();
            }
        })
    })
}

function cylinder () {
    rl.question("Radius : ", (radius) => {
        rl.question("Height : ", (height) => {
            if (!isNaN(radius) && !isNaN(height)) {
                result = pi * height * Math.pow(radius, 2);
                console.log("Volume : " + result);
                calculateAgain();
            }
            else {
                alert();
                cylinder();
            }
        })
    })
}


  
  console.log(`Volume Calculator`);
  border();
  list();
  border();
  shape();
  