export let a = 10,
  b = 20,
  result = 0;

export function sum() {
  result = a + b;
  return result;
}

export function multiply() {
  result = a * b;
  return result;
}

// batasa import dan export
// ini menyebabkan error karena berada didalam fungsi

// if(requeredSum){
//   export sum;
// }

// kita akan panggil dengan alias
import { jumlah } from "./math.js";
// jika kita ingin menggunakan nama yang berbeda
import { jumlah as total } from "./math.js";
// console.log(total);

// mengimport ulang
// import { jumlah } from "./math.js";
export { jumlah };
