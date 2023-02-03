// NOTE:ES6 memperkenalkan computed properties
// memungkinkan kita bisa menggunakan ekpresi dalam []
// kemudian akan menggunakan nama expresi sebagai nama properti objek
// conoth
let propName = "c";
const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};
console.log(rank.c);

let name = "fullName";
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("Pojok", "Code");
console.log(person.fullName);
