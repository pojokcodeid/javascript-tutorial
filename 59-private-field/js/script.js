// NOTE: private field
// ES2020 memngenalkan frivate field, kita bisa menentukan sendiri pada suatu
// clss. untk mendefinisikannya awali nama field dengan tanda #
// contoh
class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}

let circle = new Circle(10);
console.log(circle.area);
console.log(circle.radius);

class Circle2 {
  #radius = 0;
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  set radius(value) {
    if (typeof value === "number" && value > 0) {
      this.#radius = value;
    } else {
      throw "Gunakan number";
    }
  }

  get radius() {
    return this.#radius;
  }
}

let rad = new Circle2(10);
rad.radius = 20;
console.log(rad.radius);
console.log(rad.area);

class Cyliner extends Circle2 {
  #hight;
  constructor(radius, height) {
    super(radius);
    this.#hight = height;
    super.radius = radius + 2;
  }

  get height() {
    return this.#hight;
  }
}

let cil = new Cyliner(15, 5);
console.log(cil.area);
