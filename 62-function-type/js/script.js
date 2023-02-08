// fugsi javascript adalah objek
// sehingga mereka memiliki property dan method seperti objek lainnya
// contoh length dan prototype
function add(x, y) {
  return x + y;
}
console.log(add.length);
console.log(add.prototype);

//new target
let result = add(10, 20);
console.log(result);
let obj = new add(10, 20);
console.log(obj);
//ES6
function add2(x, y) {
  console.log(new.target);
  return x + y;
}
let result2 = add2(10, 20);
let obj2 = new add2(10, 20);

// method : applay, call dan bind
let cat = { type: "Cat", sound: "Miaw" };
let dog = { type: "Dog", sound: "Guk" };
const say = function (message) {
  console.log(message);
  console.log(this.type + " says " + this.sound);
};
say.apply(cat, ["Apa yang dikatakan kucing ?"]);
say.apply(dog, ["Apa yang dikatakan anjing ?"]);

say.call(cat, ["Apa yang di katakan kucing?"]);

//bind
let car = {
  speed: 5,
  start: function () {
    console.log("Start with " + this.speed + " km/h");
  },
};
let aircraft = {
  speed: 10,
  flay: function () {
    console.log("Playing");
  },
};
let taxing = car.start.bind(aircraft);
taxing();
console.log("-----------------------");
car.start.call(aircraft);
