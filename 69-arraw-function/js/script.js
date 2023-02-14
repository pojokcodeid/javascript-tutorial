// NOTE: fungsi panah javscript
// ES6 memperkenalkan fungsi panah untuk memperingkas code
// contoh sebelum ES6

let add = function (x, y) {
  return x + y;
};
console.log(add(10, 20));

// akan setara dengan
let add2 = (x, y) => x + y;
console.log(add2(10, 20));

let add3 = (x, y) => {
  return x + y;
};
console.log(add3(10, 20));
console.log(typeof add3);
console.log(add3 instanceof Function);

// fungsi panah dengan banyak parameter
let number = [4, 2, 6];
number.sort(function (a, b) {
  return b - a;
});
console.log(number);

let number2 = [4, 2, 6];
number2.sort((a, b) => b - a);
console.log(number2);

// oprasi panah dengan satu parameter
let names = ["John", "Mac", "Patter"];
let lengths = names.map((name) => name.length);
console.log(lengths);

// fungsi panah tanpa parameter
let log = () => console.log(window.document);
log();
let multiplay = (x, y) => x * y;

let multiplay2 = (x, y) => x * y;

// fungsi panah untuk objek literal
let setColor = function (color) {
  return { value: color };
};
let backgroundColor = setColor("Red");
console.log(backgroundColor.value);

let stColor = (color) => ({ value: color });
let myColor = stColor("blue");
console.log(myColor.value);

function Car() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    let self = this;
    setTimeout(function () {
      console.log(self.speed);
    }, 1000);
  };
}
let car = new Car();
car.speedUp(50);

function Car3() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}
let car3 = new Car3();
car3.speedUp(60);
