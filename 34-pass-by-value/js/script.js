// NOTE: pass by value dan pass by reference
// java script akan menyalin value kedlam argument
// setiap perubahan pada fungsi tidak mempengaruhi luar
// contoh
function square(x) {
  x = x * x;
  return x;
}

let y = 10;
let result = square(y);
console.log(result);
console.log(y);
// contoh pas by value
let person = {
  name: "Pojok Code",
  age: 25,
};
function tambahUmur(obj) {
  obj.age += 1;
}

tambahUmur(person);

console.log(person);

person = {
  name: "Jon",
  age: 25,
};

function tambahUmur(obj) {
  obj.age += 1;
  obj = { name: "Pojok Code", age: 30 };
  console.log(obj);
}

tambahUmur(person);
console.log(person);
