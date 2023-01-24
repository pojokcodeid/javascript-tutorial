// NOTE: Object Destructuring  (extrak Objek)

let person = {
  firstName: "Pojok",
  lastName: "Code",
};
// let firstName = person.firstName;
// let lastName = person.lastName;
// console.log(firstName + " " + lastName);
// ES6 Meperkenalkan cara lainnya
let { firstName, lastName, middleName } = person;
console.log(firstName);
console.log(lastName);
console.log(middleName);
console.log("------------------------");

let pearson2 = {
  firstName2: "Pojok 2",
  lastName2: "Code 2",
  middleName2: "C.",
  age: 28,
};
let {
  firstName2,
  lastName2,
  middleName2 = "",
  currentAge: age = 18,
} = pearson2;
console.log(middleName2);
console.log(age);
console.log("-----------------------");
function getPerson() {
  return null;
}
let { firstName3, lastName3 } = getPerson() || {};
console.log(firstName3, lastName3);
console.log("-------------------------");
let employee4 = {
  id: 1001,
  name: {
    firstName4: "Pojok",
    lastName4: "Code",
  },
};
let {
  name: { firstName4, lastName4 },
  name,
} = employee4;
console.log(firstName4);
console.log(lastName4);
console.log(name);
console.log("----- argument ----------");
let display = (person5) =>
  console.log(`${person5.firstName} ${person5.lastName}`);
let person5 = {
  firstName: "Pojok 5",
  lastName: "Code 5",
};
display(person5);
let display2 = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`);
display2(person5);
