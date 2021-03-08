//SINGLE ARRAY
let array = ["Anjing", "Kucing", "Kuda"];
let object = {obj1:"Burung", obj2:"Ikan", obj3:"Udang"};

console.log(array[0]);
console.log(object.obj1);

//NESTED ARRAY
let array2 = [["Anjing", 2], ["Kucing", 5], ["Kuda", 9]];
let object2 = {nama:{obj1:"Burung", obj2:"Ikan", obj3:"Udang"}, jumlah:{a1:1, a2:3, a3:7}};

console.log(array2[1]);
console.log(array2[2][0]);
console.log(object2.nama.obj3);

/*
jadi bedanya array sama object tuh

array pake []
object pake {}

terus?
*/