// array find index
// digunakan untuk menemukan element pertama dalam larik yang memenuhi fungsi
// pengujian
// findIndex(testFn(element[, index[, array]])[, thisArg])
// testFn adalah fungsi yang akan dijalankan pada setiap elemen dalam array hingga fungsi kembali true
// thisArg adalah objek opsional yang akan digunakan thissaat menjalankan callback
// contoh

let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex((rank) => rank === 7);
console.log(index);

const products = [
  { name: "Phone", price: 999 },
  { name: "Computer", price: 1999 },
  { name: "Tablet", price: 955 },
];

const index2 = products.findIndex((product) => product.price > 1000);
console.log(index2);
