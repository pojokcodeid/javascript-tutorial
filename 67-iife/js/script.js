//IIFE = expresi fungsi yang langsung dipanggil
// perintah dasarnya adalah sbb
// (function(){
//   //....
// })();
// mengapa menggunakan IIFE
// karena ketika kita membuat fungsi mesin JS akan menambahkan fungsi tersebut
// ke objek global
// contoh
function add(a, b) {
  return a + b;
}
console.log(window.add);

var counter = 10;
console.log(window.counter);

("INi adalah sebuah string");
10 + 20;

let sum = (function (a, b) {
  return a + b;
})(10, 20);
console.log(sum);

(function () {
  console.log("dengan cara 1");
})();

(() => {
  console.log("Ini cara 2");
})();

(function () {
  var counter = 0;
  function add(a, b) {
    return a + b;
  }
  console.log(add(10, 20));
})();

(function nameFE() {
  console.log("Ini jalan");
})();
