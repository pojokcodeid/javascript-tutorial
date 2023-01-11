// metode objek javascript
// objek adalah kumpulan pasangan kunci dan nilai atau property
// contoh

let person = {
  firstMame: "Pojok",
  lastName: "Code",
};

person.greet = function () {
  console.log("Hello");
};
person.greet();

function greet() {
  console.log("Hello 2");
}
person.greet = greet;
person.greet();

person = {
  firstMame: "Pojok",
  lastName: "Code",
  greet: function () {
    console.log("Hello World");
  },
};
person.greet();
// sejak ES6 bisa lebih sederhana lagi
person = {
  firstMame: "Pojok",
  lastName: "Code",
  greet() {
    console.log("Hello World Lagi");
  },
};
person.greet();

person = {
  firstMame: "Pojok",
  lastName: "Code",
  greet() {
    console.log("Hello World Lagi");
  },
  getFullName: function () {
    return this.firstMame + " " + this.lastName;
  },
};

console.log(person.getFullName());
