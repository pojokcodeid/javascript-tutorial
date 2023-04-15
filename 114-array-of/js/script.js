// array of digunakan untuk memecahkan masalah konstruktor
// gambaran masalah sbb:
// di ES6 saat meneruskan angka konstruktor javascript membuat larik yang
// panjangnya sama dengan angka

let numbers = new Array(2);
console.log(numbers.length);
console.log(numbers[0]);

numbers = new Array("2");
console.log(numbers.length);
console.log(numbers[0]);

// Array.of(element0[,element1[,...[, elementN]]])

numbers = Array.of(3);
console.log(numbers.length);
console.log(numbers[0]);

let char = Array.of("A", "B", "C");
console.log(char.length);
console.log(char);
