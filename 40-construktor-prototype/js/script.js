// sejak ES5 terdapat prototype construktor
//  yaoitu kombinasi prototype dan construktor
// constoh konstruktor biasa
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// //membuat prototype construktor
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(new Person("Pojok", "Code").getFullName());
console.log(new Person("Joe", "Done").getFullName());
// setiap objek memiliki firtname dan lastname tetapi mereka berbagi getFullName
// Ketika eksekusi getFullName javascript akan encari metode pada objek tersebut
// karena tidak ditemuka maka mengikuti tautan prototype

// Kelas Sejak ES6
// yang membuat pola konstruktor/prototype lebih mudah
// Contohnya
class Person2 {
  constructor(fisrtName, lastName) {
    this.firtName = fisrtName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firtName + " " + this.lastName;
  }
}

let p1 = new Person2("Pojok", "Code");
let p2 = new Person2("Joe", "Sandy");
console.log(p1.getFullName());
console.log(p2.getFullName());
