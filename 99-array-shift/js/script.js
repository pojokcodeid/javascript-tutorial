// array shift
// digunakan untuk menghapus elemenet pertama dari sebuah array
// array.shift() akan mengembalikan nilai yang dihapus
// jika kosong akan mengembalikan undefined

let numbers = [10, 20, 30];
let number = numbers.shift();
console.log(number);
console.log(numbers);

numbers = [10, 20, 30];
while ((number = numbers.shift()) != undefined) {
  console.log(number);
}

let greetings = {
  0: "Hai",
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
