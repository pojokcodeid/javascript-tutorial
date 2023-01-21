// NOTE: pewarisan prototype javascript
// javscript menggunakan pewarisan prototype
// contoh
let person = {
  name: "Pojok Code",
  greet: function () {
    return "Hi I'm " + this.name;
  },
};

console.log(person);
console.log(person.toString());
console.log(person.__proto__);
console.log(person.__proto__ === Object.prototype);

let teacher = {
  teach: function (subject) {
    return "I can teach " + subject;
  },
};

teacher.__proto__ = person;
console.log(teacher);
console.log(teacher.name);
console.log(teacher.greet());

let teacher2 = Object.create(person);
teacher2.name = "Jhon Lenon";
teacher2.teach = function (subject) {
  return "I can teach " + subject;
};

console.log(teacher2.greet());

let teacher3 = Object.create(person, {
  name: { value: "Pojok Code 2" },
  teach: {
    value: function (subject) {
      return "I can Teach" + subject;
    },
  },
});

console.log(teacher3.greet());
console.log(teacher3.teach("Programming Javascript"));
