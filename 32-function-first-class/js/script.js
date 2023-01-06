// fungsi adalah kelas 1 di javascript
// contoh
function add(a, b) {
  return a + b;
}
// referensi fungsi
let sum = add;
console.log(sum(1, 2));
// menjalankan fungsi
console.log(add(1, 2));

function average(a, b, fn) {
  return fn(a, b) / 2;
}

console.log(average(10, 20, sum));

// mengembalikan fungsi dari fungsi lain
function compare(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

let product = [
  { name: "iphone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];

console.log("Sort by name :");
product.sort(compare("name"));
console.table(product);
console.log("Sort by price");
product.sort(compare("price"));
console.table(product);
//memanggil beberapa fungsi
function cmToIn(length) {
  return length / 2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn, length) {
  return fn(length);
}

let inchi = convert(cmToIn, 10);
console.log(inchi);
console.log(convert(inToCm, 10));
