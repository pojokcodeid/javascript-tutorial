// NOTE: fungsi adalah cara untuk menyederhanakan code yang di pakai berulang
// fungsi diawali dengan kata function diikuti nama fungsinya parameter dan body
// function namaFunction(parameter){
//   bodynya
// }
// 1. diawali degnan kata kerja
// 2. getNama   setName
//
function helo(pesan) {
  console.log(pesan);
}
helo("Selamat Datang");

// perbedaan argument dan parameter
// pesan diatas adalah parameter
// argument dibuat ketika memanggil function "SElamat Datang"

let result = helo("Selamat Belajar");
console.log(result);
// return dengan expresi
function add(a, b) {
  return a + b;
}
console.log("Jumlah :", add(10, 20));

function compare(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
}
console.log(compare(2, 2));

function say(pesan) {
  if (!pesan) return;
  console.log(pesan);
}
say("Hai");

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));

show();
function show() {
  console.log("Ayo Belajar");
}
