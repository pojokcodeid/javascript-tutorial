// array length
// // Apa sebenarnya properti panjang JavaScript Array?
// // Menurut definisi, lengthproperti dari sebuah array adalah unsigned, 32-bit
// // integer yang secara numerik selalu lebih besar dari indeks tertinggi dalam
// // array.
// // 1. Dense Array
// // adalah array di mana elemen-elemennya memiliki indeks yang berdekatan
// mulai
// // dari nol.

let colors = ["red", "green", "blue"];
console.log(colors.length);
colors.push("yellow");
console.log(colors.length);
colors = [];
console.log(colors.length);

let numbers = [10, , 29, 30];
console.log(numbers.length);

numbers[10] = 100;
console.log(numbers.length);
console.log(numbers);

const fruits = ["Apple", "Orange", "staubery"];
fruits.length = 0;
console.log(fruits);
const fruits2 = ["Apple", "Orange", "staubery"];
fruits2.length = 2;
console.log(fruits2);
fruits2.length = 5;
console.log(fruits2);
