// array includes();
// digunakan untuk memeriksa apakah array berisi element
// cotoh sebenarnya kita bisa gunakan index of

let numbers = [1, 2, 3];
if (numbers.indexOf(2) !== -1) {
  //LAKUKAN PROCESS
  console.log("Lakukan Process 2");
}

let coba = [NaN];
if (coba.indexOf(NaN) !== -1) {
  console.log("NAN Dijalankan");
}

console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, 3].includes(1, 1));
console.log([NaN].includes(NaN));
console.log([-0].includes(+0));

let bmw = { name: "BMW" },
  toyota = { name: "Toyota" },
  ford = { name: "Ford" };

let cars = [ford, toyota];
console.log(cars.includes(ford));
console.log(cars.includes(bmw));
