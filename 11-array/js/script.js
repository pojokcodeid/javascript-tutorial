let score = new Array();
console.log(score);
score = new Array(10, 20, 30);
console.log(score);
score = new Array("Red");
console.log(score);
score = Array(40, 50);
console.log(score);
let warna = ["red", "green", "blue"];
console.log(warna);
warna = [];
console.log(warna);
let provinsi = ["DKI Jakarta", "Jawa barat", "Jawa Tengah"];
console.log(provinsi[0]);
console.log(provinsi[1]);
console.log(provinsi[2]);
provinsi[1] = "Papua Barat";
console.log(provinsi);
console.log(provinsi.length);
provinsi.push("Jaawa Timur");
console.log(provinsi);
provinsi.unshift("Kalimanatan Barat");
console.log(provinsi);
const valueAkhir = provinsi.pop();
console.log(valueAkhir);
console.log(provinsi);
const valueAwal = provinsi.shift();
console.log(valueAwal);
console.log(provinsi);
let idx = provinsi.indexOf("DKI Jakarta");
console.log(idx);
console.log(Array.isArray(provinsi));
