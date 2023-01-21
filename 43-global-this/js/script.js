// NOTE: global this, attribute dan property
// global this ES2020

const canFach = typeof globalThis.fetch === "function";
console.log(canFach);
console.log(globalThis === window);

// PROPERTY DAN ATRIBUTE
let person = {
  firstName: "Pojok",
  lastName: "Code",
};
person = {};
person.age = 25;

delete person.age;
console.log(person.age);

// ("use strict");
// person = {};
// Object.defineProperty(person, "ssn", {
//   configurable: false,
//   value: "1231434435",
// });
// delete person.ssn;
person = {};
person.age = 25;
person.ssn = "1231313131";
for (let property in person) {
  console.log(property);
}

Object.defineProperty(person, "ssn", {
  enumerable: false,
});

for (let property in person) {
  console.log(property);
}

// 2. PROPERTY PENGAKSES
person = {
  firstName: "Jon",
  lastName: "Bay",
};

Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },

  set: function (value) {
    let part = value.split(" ");
    if (part.length == 2) {
      this.firstName = part[0];
      this.lastName = part[1];
    } else {
      throw "Invalid Input";
    }
  },
});

console.log(person.fullName);

person = {
  firstName: "Pojok",
  lastName: "Code",
};

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
