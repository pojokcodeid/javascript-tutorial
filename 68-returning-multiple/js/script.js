// mengembalikan banyak nilai
// 1. mengembalikan dengan array
// contoh
function getNames() {
  let firstName = "Pojok",
    lastName = "Code";
  return [firstName, lastName];
}
let names = getNames();
console.log(names[0] + " " + names[1]);
// dengan cara ES6
const [firstName, lastName] = getNames();
console.log(firstName, lastName);

// mengembalikan dengan objek
function getNames2() {
  let firstName = "Pojok",
    lastName = "Code";
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

let names2 = getNames2();
console.log(names2.firstName, names2.lastName);
// sederanakan dengan ES6
function getNames3() {
  let firstName = "Pojok",
    lastName = "Code";
  return {
    firstName,
    lastName,
  };
}
let names3 = getNames3();
console.log(names3.firstName, names3.lastName);
