// NOTE: operator instanceof
// digunakan untuk menentukan apakah prototipe konstruktor muncul di rantai prototipe suatu objek
// WARNING: object instanceof contructor

function Person(name) {
  this.name = name;
}
let p1 = new Person("PCode");
console.log(p1 instanceof Person);

//ES6 dan operator instanceof
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

let p2 = new Person2("PCode");
console.log(p2 instanceof Person2);

// instanceof operator dan pewarisan
class Person3 {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person3 {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

let el = new Employee();
console.log(el instanceof Employee);
console.log(el instanceof Person3);
console.log(el instanceof Object);

//ES6 symbol.hasInstance
class Person4 {
  constructor(name) {
    this.name = name;
  }
}

let ps1 = new Person4("Pojok");
console.log(Person4[Symbol.hasInstance](ps1));
//
//dengan metode statis

class Person5 {
  constructor(name) {
    this.name = name;
  }
}

class Android extends Person5 {
  static [Symbol.hasInstance]() {
    return false;
  }
}

let a1 = new Android("Sony");
console.log(a1 instanceof Android);
console.log(a1 instanceof Person5);
