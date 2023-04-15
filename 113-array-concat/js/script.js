// array concat digunakan untuk menggabungkan dua atau lebih array menjadi satu.
let odds = [1, 3, 5];
let evens = [2, 4, 6];
let combined = odds.concat(evens);
console.log(combined);
console.log(odds);

let combined2 = [].concat(odds, evens);
console.log(combined2);

let upper = ["A", "B", "C"];
let lower = ["a", "b", "c"];
let digit = [1, 2, 3];
let alphanumerik = upper.concat(lower, digit);
console.log(alphanumerik);

let color = ["red", "green", "blue"];
let rgb = color.concat();
console.log(rgb);

let moreColor = color.concat("yellow", "magneta");
console.log(moreColor);

let kombinasi = [...odds, ...evens];
console.log(kombinasi);
