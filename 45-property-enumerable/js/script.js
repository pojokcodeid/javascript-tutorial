// NOTE: property enumerable
// Objek Literal

const person = {
  firstName: "Pojok",
  lastName: "Code",
};
person.age = 25;

for (const key in person) {
  console.log(key);
}

Object.defineProperty(person, "ssn", {
  enumerable: false,
  value: "123123131313",
});
console.log("--------------------------------");
for (const key in person) {
  console.log(key);
}
// CONTOH ES6
const Person2 = {
  firstName: "Pojok",
  lastName: "Code",
};
Person2.age = 30;
Object.defineProperty(Person2, "ssn", {
  enumerable: false,
  value: "123123131313",
});
console.log(Person2.propertyIsEnumerable("firstName"));
console.log(Person2.propertyIsEnumerable("lastName"));
console.log(Person2.propertyIsEnumerable("age"));
console.log(Person2.propertyIsEnumerable("ssn"));
