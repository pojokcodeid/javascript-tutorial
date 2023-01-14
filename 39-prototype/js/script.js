// Prototype Javascript
// Dalam javascript objek dapat mewarisi fitur satu sama lain melalui prototype
// Setiap objek memiliki prototypenya sendiri yang disebut prototype
// contoh
let person = { nama: "Pojok Code" };
console.log(person);
// ilustrasi prototype
console.log(typeof Object);
// objek anonime yang dapat di definisikan
console.log(Object.prototype);
// cek prototype constructor adalah representasi dari objek
console.log(Object.prototype.constructor === Object);
function Person2(name) {
  this.name = name;
}
console.log(Person2);
console.log(Person2.prototype);

Person2.prototype.greet = function () {
  return "Hello " + this.name + " !";
};

let p1 = new Person2("Pojok Code");
console.log(p1.greet());
console.log(p1.toString());

//console.log(p1.flay());
let p2 = new Person2("Jane");
console.log(p2.greet());

p2.draw = function () {
  return "Ayo Menggambar !";
};

console.log(p2.draw());
// console.log(p1.draw());
//
p1.greet = function () {
  console.log("Hello World");
};
console.log(p1.greet());
