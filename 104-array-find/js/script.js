//Di ES5, untuk menemukan elemen dalam array , Anda menggunakan metode indexOf()or lastIndexOf().
//Namun, metode ini sangat terbatas karena hanya mengembalikan indeks dari elemen pencocokan pertama saja.
//
//ES6 memperkenalkan metode baru yang disebut find()ditambahkan ke Array.prototypeobjek.
//Metode find()mengembalikan elemen pertama dalam larik yang melewati fungsi pengujian.

// find(callback(element[, index[, array]])[, thisArg])

/* callbackadalah fungsi yang mengeksekusi setiap elemen array. Dibutuhkan tiga argumen: */
// elementadalah elemen saat ini.
// indexindeks elemen saat ini.
// arrayarray yang find()dipanggil.

// thisArgadalah objek yang digunakan sebagai thisdi dalam callback

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find((e) => e % 2 == 0));

let customers = [
  {
    name: "ABC inc",
    credit: 100,
  },
  {
    name: "AGC Corp",
    credit: 200,
  },
  {
    name: "IOT ag",
    credit: 300,
  },
];

console.log(customers.find((c) => c.credit > 100));
