// Spread Operator
// ES6 menyediakan operator baru bernama spread operator yang terdiri dari tiga titik (...).
// Operator spread memungkinkan Anda untuk menyebarkan elemen objek yang dapat diubah
// seperti array , map , atau set .
// Misalnya:

const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];
console.log(combined);

function f(a, b, ...args) {
  console.log(args);
}
f(1, 2, 3, 4, 5);

let combined2 = [...odd, 2, 4, 6];
console.log(combined2);

const combined3 = [2, ...odd, 4, 6];
console.log(combined3);

function compare(a, b) {
  return a - b;
}
let result = compare.apply(null, [1, 2]);
console.log(result);

result = compare(...[1, 2]);
console.log(result);

let rivers = ["nile", "Ganges", "Cisadane"];
let moreRivers = ["Danube", "Karangjoho"];
[].push.apply(rivers, moreRivers);
console.log(rivers);

rivers.push(...moreRivers);
console.log(rivers);

let initialChar = ["A", "B"];
let chars = [...initialChar, "C", "D"];
console.log(chars);

let numbers = [1, 2, 3];
let moreNumbers = [4, 5, 6];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);

let score = [80, 70, 90];
let copy = [...score];
console.log(copy);

chars = ["A", ..."AB", "D"];
console.log(chars);
