// flatmap() digunakan untuk menetapkan element dalam larik menggunakan fungsi pemetaan dan meratakan hasilnya menjadi larik baru
// metode flatmap() merupakan kombinasi dari map() methode dan dilanjutkan denan flat() methode menjadi satu.

// let newArray = arrayObject.flatMap(callback,thisArg);

let sentences = ["javascript Array FlatMap()", " ", "is", " ", "Awesome"];
let words = sentences.map((s) => s.split(" "));
console.log(words);
let result = words.flat();
console.log(result);

let result2 = sentences.flatMap((s) => s.split(" "));
console.log(result2);

//menambahkan dan menghapus element selama pemetaan
let cart = [
  {
    name: "Smartphone",
    qty: 2,
    price: 500,
    freeOfChange: false,
  },
  {
    name: "Tablet",
    qty: 1,
    price: 800,
    freeOfChange: false,
  },
];

let newCat = cart.flatMap((item) => {
  if (item.name === "Smartphone") {
    return [
      item,
      {
        name: "Screen protektor",
        qty: item.qty,
        price: 5,
        freeOfChange: true,
      },
    ];
  } else {
    return [item];
  }
});
console.log(newCat);
