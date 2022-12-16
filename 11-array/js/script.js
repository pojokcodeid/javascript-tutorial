let score = new Array();
console.log(score);

score = new Array(10, 30, 50);
console.log(score);
score = new Array("REd"); // aray string
console.log(score);
// javascript allow untuk menghilangkan new operator
score = Array(10, 20);
console.log(score);
//pada kenyataanya pembuatan aray bukan seperti diatas tapi langsung
let warna = ["red", "green", "blue"];
console.log(warna);
warna = []; // ini adalah empty aray
//cara mengaces element array
let provinsi = ["DKI Jakarta", "Jawa Barat", "Jawa Tengah"];
console.log(provinsi[0]);
console.log(provinsi[1]);
console.log(provinsi[2]);
//mengubah element aray
provinsi[1] = "Papua Barat";
console.log(provinsi);
//mendapatkan ukuran array
console.log(provinsi.length);
//menambahkan element array
provinsi.push("Jawa Timur");
console.log(provinsi);
//menambahkan element ke awal array
provinsi.unshift("Kalimantan Barat");
console.log(provinsi);
//menghapus element dari akhir
const valueakhir = provinsi.pop();
console.log(valueakhir);
console.log(provinsi);
//menghapus element dari awal danmengambil valuenya
const valueawal = provinsi.shift();
console.log(valueawal);
console.log(provinsi);
//mengambil index element array
let idx = provinsi.indexOf("DKI Jakarta");
console.log(idx);
//cek variable adalah aray
console.log(Array.isArray(provinsi));
