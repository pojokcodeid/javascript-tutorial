// array unshift
// unshift()metode JavaScript Array untuk menambahkan satu atau lebih elemen ke awal array

// unshift(element);
// unshift(element1, element2);
// unshift(element1, element2, ...elementN);

let numbers = [30, 40];
let length = numbers.unshift(20);
console.log(length);
console.log(numbers);

length = numbers.unshift(5, 10);
console.log(length);
console.log(numbers);

let days = ["Mon", "Tue", "End", "Thu", "Fri"];
let weekends = ["Sat", "Sun"];
for (const weekend of weekends) {
  days.unshift(weekend);
}
console.log(days);

days.unshift(...weekends);
console.log(days);

let greetings = {
  0: "Hai",
  1: "Hello",
  2: "Holiday",
  length: 3,
  prepend(message) {
    [].unshift.call(this, message);
    return this.length;
  },
};
greetings.prepend("Good Day");
console.log(greetings);
