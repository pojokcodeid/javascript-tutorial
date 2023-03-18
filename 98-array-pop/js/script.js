/* Array pop
 * array pop digunakan untuk menghapus element terakhir dari sebuah array
 * perintah dasarnya
 * Array.prototype.pop()
 */

let numbers = [10, 20, 30];
let last = numbers.pop();
console.log(last);
console.log(numbers);

numbers = [];
last = numbers.pop();
console.log(last);
console.log(numbers);

let greetings = {
  0: "Hai",
  1: "Hello",
  2: "Holiday",
  length: 3,
  removeLast() {
    return [].pop.call(this);
  },
};

let grett = greetings.removeLast();
console.log(grett);
console.log(greetings);
