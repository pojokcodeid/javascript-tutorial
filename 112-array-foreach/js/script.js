//aray foreach digunakan untuk menjalankan fungsi pada setiap element
//(mengulang elemen dalam array)
// perintah dasarnya
// Array.forEach(callback [, thisArg]);
// Fungsi callback digunakan foreach() metode untuk mengeksekusi pada setiap element
// thisArg adalah nilai yang digunakan sebagai ini saat menjalankan callback.
// contoh cara lama dengan menggunakan for loop
let remark = ["A", "B", "C"];
for (let i = 0; i < remark.length; i++) {
  console.log(remark[i]);
}

remark.forEach(function (e) {
  console.log(e);
});

function Counter() {
  this.count = 0;
  let self = this;
  return {
    increse: function () {
      self.count++;
    },
    current: function () {
      return self.count;
    },
    reset: function () {
      self.count = 0;
    },
  };
}
var counter = new Counter();
var number = [1, 2, 3];
var sum = 0;
number.forEach(function (e) {
  sum += e;
  this.increse();
}, counter);
console.log(sum);
console.log(counter.current());
