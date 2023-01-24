// JS property dirisendiri (bukan dari turunannya)
// conoth
const person = {
  firstName: "Pojok",
  lastName: "Code",
};

const employee = Object.create(person, {
  job: {
    value: "JS developer",
    enumerable: true,
  },
});

console.log(employee.hasOwnProperty("job"));
console.log(employee.hasOwnProperty("firstName"));

// cara mengacess value atribute
// sebelum ES2017
console.log("------------------------------");
let person2 = {
  firstName: "Pojok",
  lastName: "Code",
  age: 25,
};
for (const key in employee) {
  if (employee.hasOwnProperty(key)) {
    console.log(employee[key]);
  }
}

const profile = Object.values(employee);
console.log(profile);

// ES2017 -> Object.entries();
console.log("------------------------");
const ssn = Symbol("ssn");
const person3 = {
  firstName: "Pojok",
  lastName: "Code",
  age: 30,
  [ssn]: "123132213123",
};

const kv = Object.entries(person3);
console.log(kv);
// Memerika 2 objek sama atau tidak
// ===
console.log("---------------------------");
let amount = +0,
  volume = -0;
console.log(amount === volume);
console.log(Object.is(amount, volume));

let quantity = NaN;
console.log(quantity === quantity);
console.log(Object.is(quantity, quantity));
