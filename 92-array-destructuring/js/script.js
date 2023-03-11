// Array Descructuring
// ES6 menyediakan fitur baru yang disebut destructing assignment yang memungkinkan
// Anda untuk mendestruktur properti objek atau elemen array menjadi variabel individual.
function getScores() {
  return [70, 80, 90];
}
let score = getScores();

//untuk mendapatkan score individual kita gunakan index
// let x = score[0],
//   y = score[1],
//   z = score[2];

// sebelum ES6 hanya seperti ini caranya
// di ES6 keatas diberikan cara yang lebih mudah

let [x, y, z] = getScores();
console.log(x);
console.log(y);
console.log(z);

//jika element array lebih dari variable maka sisnya di buang
//contoh
function getScores2() {
  return [70, 80, 90, 100];
}
let [g, h, i] = getScores2();
console.log(g);
console.log(h);
console.log(i);

//mengambil semua elemen array yang tersisa dan memasukkannya ke dalam array baru
// contoh
[x, y, ...args] = getScores2();
console.log(x);
console.log(y);
console.log(args);

// menetapkan nilai default
function getItems() {
  return [10, 20];
}
let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;

console.log(thirdItem);

// ini cara lebih sederhana lagi
[, , thirdItem = 0] = getItems();
console.log(thirdItem);

// menetapkan nilai default untuk undefined
let a, b;
[a = 1, b = 2] = [10];
console.log(a);
console.log(b);

// mengatasi masalah return null
// contoh
function getItems3() {
  return null;
}
[x = 1, y = 2] = getItems3() || []; // keluarannya ini error untuk menfgatasinya tambahkan atau
console.log(x, y);

// destructuring array bersarang
function getProfile() {
  return ["Pojok", "Code", ["Red", "Green", "Blue"]];
}
let [firstName, lastName, [color1, color2, color3]] = getProfile();
console.log(firstName, color1);

// penggunaan Descructuring Array
// 1. Bertukar variable
(a = 10), (b = 20);
[a, b] = [b, a];
console.log(a, b);
// 2. fungsi yang mengembalikan banyak nilai
function stat(a, b) {
  return [a + b, (a + b) / 2, a - b];
}

let [sum, average, diff] = stat(20, 10);
console.log(sum, average, diff);
