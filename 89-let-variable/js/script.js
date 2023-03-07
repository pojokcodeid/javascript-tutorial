//  Mendeklarasikan Variabel Cakupan Blok
// di ES5 kebawah ketika mendeklarasikan variable kita menggunakan var
// terbaca global atau local tergantung di simpan dimana didalam skup atau di
// luar skup
// ES6 keatas memperkenalkan cara baru menggunakan let
// contoh

let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x);
}
console.log(x);

var a = 10;
console.log(window.a);

let b = 20;
console.log(window.b);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
//
// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
//
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

var counter = 0;
var counter;
console.log(counter);

let counter2 = 0;
//let counter2;
console.log(counter2);
function cek() {
  console.log(jumlah);
  let jumlah = 10;
}
/* cek(); */

function coba() {
  let log = function () {
    console.log(pesan);
  };
  let pesan = "Hello....";
  log();
}
coba();
