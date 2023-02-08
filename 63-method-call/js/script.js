// call method
// Metode call() mengembalikan hasil pemanggilan functionName().
// Dalam JavaScript, fungsi adalah turunan dari Functiontipe. Misalnya:

function add(x, y) {
  return x + y;
}
console.log(add instanceof Function);

let result = add(10, 20);
console.log(result);

let result2 = add.call(this, 10, 20);
console.log(result2);

var greeting = "Hi";
var message = {
  greeting: "Hello",
};

function say(name) {
  console.log(this.greeting + " " + name);
}
say.call(this, "John");
say.call(message, "John");

//MENGGUNAKAN CALL UNTUK MERANGKAI CONSTRUKTOR
function Box(height, width) {
  this.height = height;
  this.width = width;
}
function Width(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}
let width = new Width("Red", 100, 200);
console.log(width);

// menggunakan method call untuk peminjam fungsi
const car = {
  name: "Car",
  start() {
    console.log("Start the " + this.name);
  },
  speedUp() {
    console.log("Speed Up " + this.name);
  },
  stop() {
    console.log("Stop the " + this.name);
  },
};

const aircraft = {
  name: "Aorcraft",
  flay() {
    console.log("Flay");
  },
};
car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.flay();

function isOdd(number) {
  return number % 2;
}

function getOddNumber() {
  return Array.prototype.filter.call(arguments, isOdd);
}
let result3 = getOddNumber(10, 1, 3, 4, 8, 9);
console.log(result3);
