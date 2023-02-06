// CLASS --> merupakan blue print untuk membuat objek.
// contoh sebelum ES6
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var john = new Person("Jon Due");
console.log(john.getName());
console.log(john instanceof Person);
console.log(john instanceof Object);
// Contoh menggunakan Class ES6
class Person2 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
let pojok = new Person2("Pojok Code");
let nama = pojok.getName();
console.log(nama);
console.log(pojok instanceof Person2);
console.log(pojok instanceof Object);
