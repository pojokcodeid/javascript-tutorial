// array shift
// digunakan untuk menghapus elemenet pertama dari sebuah array
// array.shift() akan mengembalikan nilai yang dihapus
// jika kosong akan mengembalikan undefined
let numbers = [10, 20, 30];
let number = numbers.shift();
console.log(number);
console.log(numbers);
console.log({ length: numbers.length });

/* menggunakan shift dengan while */
numbers = [10, 20, 30];
while ((number = numbers.shift()) != undefined) {
  console.log(number);
}

/* menggunakan shift array dengan objek proprty */
let greetings = {
  0: "Hi",
  1: "Hello",
  2: "Holiday",
  length: 3,
  removeFirst() {
    return [].shift.call(this);
  },
};
const gretting = greetings.removeFirst();
console.log(gretting);
console.log(greetings);
