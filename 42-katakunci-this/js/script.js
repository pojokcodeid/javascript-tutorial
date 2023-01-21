// NOTE: kata kunci this
// contoh
let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};
let out = counter.next();
console.log(out);

console.log(this === window);
this.color = "red";
console.log(window.color);
// NOTE: konteks pemangilan this
// - pemanggilan fungsi
// - pemanggilan methode
// - pemanggilan konstruktor
// - DOA tidak langsung
// 1. Contoh
function show() {
  console.log(this === window);
}
show();
// metode this ketat
("use strict");
function show12() {
  console.log(this === undefined);
}
show12();

// 2. this pemanggilan methode
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};
console.log(car.getBrand());

let brand = car.getBrand;
console.log(brand);
console.log(brand());

brand = car.getBrand.bind(car);
console.log(brand());

let bike = {
  brand: "Polygon",
};
brand = car.getBrand.bind(bike);
console.log(brand());

// this di konstruktor
function Car(brand) {
  this.brand = brand;
}
Car.prototype.getBrand = function () {
  return this.brand;
};
car = new Car("BMW");
console.log(car.getBrand());

//var honda = Car("Honda");
//console.log(honda);

// cek supaya didefinisikan sebagai construktor
function Car(brand) {
  if (!(this instanceof Car)) {
    throw Error("Gunakan new untuk fungsi");
  }
  this.brand = brand;
}

function Car(brand) {
  if (!new.target) {
    throw Error("Gunakan new 2");
  }
  this.brand = brand;
}

//4. DOA tidak langsung
function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let toyota = {
  brand: "toyota",
};

let audi = {
  brand: "audi",
};

getBrand.call(toyota, "Ini adalah ");
getBrand.call(audi, "Ini adalah ");

getBrand.apply(toyota, ["Ini adalah 2"]);
getBrand.apply(audi, ["Ini adalah 2"]);

// ES6 diperkenalkan =>
let getThis = () => this;
console.log(getThis() === window);

function Mobil() {
  this.speed = 120;
}

Mobil.prototype.getSpeed = function () {
  return this.speed;
};

var mobil = new Mobil();
console.log(mobil.getSpeed());
