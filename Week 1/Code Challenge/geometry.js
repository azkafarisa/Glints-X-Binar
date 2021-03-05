function volumeCube(length){
    return length**3;
}

function volumeBeam(length, breadth, depth){
    return length*breadth*depth;
}

let cube1 = volumeCube (2);
let cube2 = volumeCube (5);
let beam1 = volumeBeam (2,3,4);
let beam2 = volumeBeam (5,7,2);

console.log("Volume Cube 1 + Volume Cube 2 = " + (cube1 + cube2) + " cm3");
console.log("Volume Beam 1 + Volume Beam 2 = " + (beam1 + beam2) + " cm3");




