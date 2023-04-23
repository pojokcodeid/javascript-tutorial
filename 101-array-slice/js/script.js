// Array Slice --> mengextrak element subset dari array dan menambahkannya ke
// array baru
// metode slice() menerima dua parameter opsional
// slice(start,stop)  --> keduaya bersipat optional
// start --> menentukan index baris 0, jika start undefined baris mulai dai nol
// stop -> index baris 0 untuk mengakhiri extraksi

/*
=> != >= <= --> <-- !== <> <!-- --> 
*/
let numbers = [1, 2, 3, 4, 5];
let newNUmber = numbers.slice();
console.log(newNUmber);

let colors = ["red", "green", "blue", "yellow", "purple"];
let rgb = colors.slice(0, 3);
console.log(rgb);

function toArray() {
  return Array.prototype.slice.call(arguments);
}
var clasification = toArray("A", "B", "C");
console.log(clasification);


