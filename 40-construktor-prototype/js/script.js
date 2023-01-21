// sejak ES5 terdapat prototype construkter

function Person(firstName, LastName) {
  this.fisrtName = firstName;
  this.LastName = LastName;
}

Person.prototype.getFullName = function () {
  return this.fisrtName + " " + this.LastName;
};

console.log(new Person("Pojok", "Code").getFullName());
console.log(new Person("Joe", "Yadi").getFullName());

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let p1 = new Person2("Pojok", "Code");
let p2 = new Person2("Joko", "Sembung");
console.log(p1.getFullName());
console.log(p2.getFullName());
