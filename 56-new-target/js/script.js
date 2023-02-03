//new target meta property
// ES6 menyediakan meta property bernama new.target yang digunakan untuk
// mendeteksi apakah suatu fungsi atau konstruktor dipanggil dengan new operator
// contoh new target dalam fungsi
function Person(name) {
  this.name = name;
}
let john = new Person("John");
console.log(john.name);

Person("Pojok Code");
console.log(window.name);

function Person2(name) {
  if (!new.target) {
    throw "Tolong gunakan New";
  }
  this.name = name;
}

//Person2("Testing");

class Person3 {
  constructor(name) {
    console.log(new.target.name);
  }
}

class Employee extends Person3 {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

let john2 = new Person3("Jphn Due");
let lily = new Employee("Lili Permata", "Programmer");
