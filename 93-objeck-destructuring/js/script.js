// Objeck Destructuring
// adalah cara untuk memecah property objek kedalam variable individual
// contoh

let person = {
  firstName: "Pojok",
  lastName: "Code",
  age: 29,
};
// let firstName = person.firstName;
// let lastName = person.lastName;
// console.log(firstName, lastName);

// let { firstName: fname, lastName: lname } = person;
// console.log(fname, lname);

// let { firstName, lastName } = person;
// console.log(firstName, lastName);

let { firstName, lastName, middleName = "Kosong", age = 18 } = person;
console.log(middleName);
console.log(age);

function getPerson() {
  return null;
}
let { firstName2 = "Nan", lastName2 = "Nan" } = getPerson() || {};
console.log(firstName2, lastName2);

let employee3 = {
  id: 001,
  name: {
    firstName3: "Pojok",
    lastName3: "Code",
  },
};
let {
  name: { firstName3, lastName3 },
  name,
} = employee3;
console.log(firstName3, lastName3);
console.log(name);

let display = (person) => {
  console.log(`${person.firstName} ${person.lastName}`);
};
display(person);

let display2 = ({ firstName, lastName }) => {
  console.log(`${firstName} ${lastName}`);
};
display2(person);
