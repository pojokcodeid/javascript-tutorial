//NOTE: Factory Function -> fungsi untuk menghasilkan objek
// contoh
let person1 = {
  firstName: "Pojok",
  lastName: "Code",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person1.getFullName());

let person2 = {
  firstName: "Pojok",
  lastName: "Code 2",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person2.getFullName());
console.log("-------------------------------");

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}
person1 = createPerson("Pojok 1", "COde 1");
person2 = createPerson("Pojok 2", "Code 2");
console.log(person1.getFullName());
console.log(person2.getFullName());

function createPerson2(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}
var personAction = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

let person3 = createPerson2("Pojok 3", "Code 3");
let person4 = createPerson2("Pojok 4", "Code 4");
person3.getFullName = personAction.getFullName;
person4.getFullName = personAction.getFullName;
console.log(person3.getFullName());
console.log(person4.getFullName());

var personAction3 = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

function createPerson3(firstName, lastName) {
  let person = Object.create(personAction3);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

person1 = createPerson3("Pojok 4", "Code 4");
person2 = createPerson3("Pojok 5", "Code 5");
console.log(person1.getFullName());
console.log(person2.getFullName());
