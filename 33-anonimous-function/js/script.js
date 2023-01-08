// NOTE: anonymouse function adalah fungsi yang tidak memiliki nama
// contoh
// (function(){
//  -- statement
// })
// anonimouseafunction tidak bisa di acess jika tidak di simpan pada varible

let show = function () {
  console.log("Anonymouse Function");
};
show();

setTimeout(function () {
  console.log("Jalan setelah 1 secon");
}, 1000);

// fungsi yang di eksekusi langsung
(function () {
  console.log("IIFE");
})();

let person = {
  firstName: "Pojok",
  lastName: "Code",
};
(function () {
  console.log(person.firstName + " " + person.lastName);
})(person);

// ES6 dikenalkan fungsi dengan =>
show = function () {
  console.log("Anonymouse Function 2");
};

show = () => console.log("Anonymouse Function 2");
show();

let add = function (a, b) {
  return a + b;
};

add = (a, b) => a + b;
console.log(add(2, 3));
