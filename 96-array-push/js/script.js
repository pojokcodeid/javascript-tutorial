//Array adding and removing
// array push
// Metode Array.prototype.push() menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array baru.
// push(newElement);
// push(newElement1,newElement2);
// push(newElement1,newElement2,...,newElementN);

let numbers = [10, 20, 30];
let length = numbers.push(40);
console.log(length);
console.log(numbers);

length = numbers.push(50, 60);
console.log(length);
console.log(numbers);

let colors = ["red", "green", "blue"];
let cmyk = ["cyan", "magneta", "yellow", "black"];

for (const color of cmyk) {
  colors.push(color);
}
console.log(colors);

colors.push(...cmyk);
console.log(colors);

let greetings = {
  0: "Hai",
  1: "Hello",
  length: 2,
  append(message) {
    [].push.call(this, message);
  },
};

greetings.append("Howday");
greetings.append("Bonjour");
console.log(greetings);
