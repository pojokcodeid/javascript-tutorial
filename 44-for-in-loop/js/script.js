// NOTE: for...in loop digunakan untuk objek enumerable
// for(const propertyName on objek){
//     -- statement
// }
// contoh :
var person = {
  firstName: "Pojok",
  lastName: "Code",
  ssn: "1231312313",
};
for (const prop in person) {
  console.log(prop + " : " + person[prop]);
}

// for ... in pewarisan
var declaration = {
  color: "red",
};
var circle = Object.create(declaration);
circle.radius = 10;
console.log("-----------------------------");
for (const prop in circle) {
  console.log(prop);
}
console.log("----------------------------");
for (const prop in circle) {
  if (circle.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// FOR IN LOOP UNTUK ARRAY
Array.prototype.foo = 100;
const items = [10, 20, 30];
let total = 0;
for (const item in items) {
  total += items[item];
}
console.log(total);

var arr = [];
arr[2] = 3;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], " Indexnya " + i);
}
console.log("--------------------------------");
for (const key in arr) {
  console.log(arr[key], key);
}
