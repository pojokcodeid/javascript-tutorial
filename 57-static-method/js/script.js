// NOTE: static method
// contoh sebelum ES6
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

Person.createAnonimous = function (gender) {
  let name = gender == "male" ? "John" : "Jane";
  return new Person(name);
};

console.log(Person.createAnonimous().name);
// ES6 keatas
class Person2 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  static createAnonimous(gender) {
    let name = gender == "male" ? "John" : "Jane";
    return new Person(name);
  }
}

let anonim = Person2.createAnonimous("male");
console.log(anonim.name);

// let person = new Person2("Pojok Code");
// person.createAnonimous("male");
