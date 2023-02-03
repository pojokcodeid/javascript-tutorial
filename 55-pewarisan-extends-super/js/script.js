// Pewarisan dengan extends dan super
// sebelum ES6 pewarisan menggunakan pewarisan prototype
// contoh cara sebelum ES6

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log("Berjalan dengan " + this.legs + " legs");
};

function Bird(legs) {
  Animal.call(this, legs);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;
Bird.prototype.fly = function () {
  console.log("Playinbng");
};

var pigeon = new Bird(2);
pigeon.walk();
pigeon.fly();

//ES6
class Animal2 {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("Berjalan 2 dengan " + this.legs + " legs");
  }
}

class Bird2 extends Animal2 {
  constructor(legs, color) {
    super(legs);
    this.color = color;
  }

  fly() {
    console.log("Flaying");
  }

  getColor() {
    return this.color;
  }
}

let bird2 = new Bird2(2, "White");
bird2.walk();
bird2.fly();
console.log(bird2.getColor());

class Dog extends Animal2 {
  constructor() {
    super(4);
  }
  walk() {
    console.log("Go Walking");
  }
}
let anjing = new Dog();
anjing.walk();

class Animal3 {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("Berjalan 2 dengan " + this.legs + " legs");
  }
  static helloWorld() {
    console.log("Hello World");
  }
}

class Bird3 extends Animal3 {
  fly() {
    console.log("Flaying");
  }
}

Bird3.helloWorld();

class Queue extends Array {
  enqueue(e) {
    super.push(e);
  }

  dequeue() {
    return super.shift();
  }

  peek() {
    return !this.empty() ? this[0] : undefined;
  }

  empty() {
    return this.length === 0;
  }
}

var customer = new Queue();
customer.enqueue("A");
customer.enqueue("B");
customer.enqueue("C");

while (!customer.empty()) {
  console.log(customer.dequeue());
}
