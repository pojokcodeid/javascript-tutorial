// konstructor
// contructor pada Javascript adalah method spesial yang berfungsi untuk inisialisasi ketika pembuatan obyek
// Ketentuan Pembuatan
// - Nama fungsi konstruktor dimulai dengan huruf kapital seperti Person, Document
// - Fungsi konstruktor harus dipanggil hanya dengan newoperator
// Sejak ES6 diperkenalkan class
// Class adalah prototype, atau blueprint, atau rancangan yang mendefinisikan variable dan method-methode pada seluruh objek tertentu
// contoh

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let person = new Person("Pojok", "Code");
console.log(person);
person = {
  firstName: "Pojok",
  lastName: "Code",
};
console.log(person);

console.log(new Person("JOe", "Biden"));
console.log(new Person("James", "Riadi"));

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

person = new Person("Pojok", "Code");
console.log(person.getFullName());

// person = Person("Pojok", "Code");
// console.log(person.getFullName());

function Person2(firstName, lastName) {
  if (!new.target) {
    //throw Error("Tolong gunakan new");
    return new Person2(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let person2 = Person2("Pojok", "Code");
person2.getFullName();
