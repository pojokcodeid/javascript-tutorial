//boolean adalah type data primitif

let pending = false;
let done = true;

console.log(typeof pending);
console.log(typeof done);

//boleh type objeck
let a = Boolean("Hai");
console.log(a);
console.log(typeof a);

let b = Boolean(false);
console.log(b.valueOf());
console.log(b.toString());
console.log();
// js boolean vs Objek Boolean
let completed = true;
let active = new Boolean(false);

active.primitiveValue = active.valueOf();
console.log(active.primitiveValue);

completed.name = "primitive";
console.log(completed.name);
console.log(typeof completed);
console.log(typeof active);

console.log(completed instanceof Boolean);
console.log(active instanceof Boolean);

let falseObj = new Boolean(false);
console.log(falseObj);
console.log(falseObj.valueOf());
//if (falseObj.valueOf()) {
if (falseObj) {
  console.log("INi ternyata jalan");
}

let false2 = true;
if (false2) {
  console.log("Ini kondisi primitif");
}
