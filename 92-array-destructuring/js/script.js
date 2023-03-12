// Array Descructuring
// ES6 menyediakan fitur baru yang disebut destructing assignment yang memungkinkan
// Anda untuk mendestruktur properti objek atau elemen array menjadi variabel individual.

function getSources() {
  return [70, 80, 90];
}
let source = getSources();
// let x = source[0],
//   y = source[1],
//   z = source[2];
// console.log(x, y, z);

let [x, y, z] = getSources();
console.log(x, y, z);

function getSources2() {
  return [60, 70, 80, 90, 100];
}
let [g, h, i] = getSources2();
console.log(g, h, i);

[x, y, ...args] = getSources2();
console.log(x);
console.log(y);
console.log(args);

function getItems() {
  return [10, 20];
}
let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;
console.log(thirdItem);

[, , thirdItem = 0] = getItems();
console.log(thirdItem);

let a, b;
[a = 1, b = 2] = [10];
console.log(a);
console.log(b);

function getItems3() {
  return null;
}
[x = 1, y = 2] = getItems3() || [];
console.log(x, y);

function getProfile() {
  return ["Pojok", "Code", ["Red", "Green", "Blue"]];
}
let [firstName, lastName, [color1, color2, color3]] = getProfile();
console.log(firstName, color1);

//Penggunaan Array destructuring
// 1. Bertukar vriable
(a = 10), (b = 20);
[a, b] = [b, a];
console.log(a, b);
//2. mengembalikan banyak nilai
function stat(a, b) {
  return [a + b, (a + b) / 2, a - b];
}
let [sum, average, diff] = stat(20, 10);
console.log(sum, average, diff);
