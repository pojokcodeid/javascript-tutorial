//array sort digunakan untuk mengurutkan array angka,string dan objek
let numbers = [1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);

numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);

numbers.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

let animals = ["cat", "dog", "elephant", "bee", "ant"];
animals.sort();
console.log(animals);

animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log(animals);

let mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];
mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(mixedCaseAnimals);

let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// sort by salary
employees.sort(function (x, y) {
  return x.salary - y.salary;
});
console.table(employees);

employees.sort(function (x, y) {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});
console.table(employees);

employees.sort(function (x, y) {
  let a = new Date(x.hireDate),
    b = new Date(y.hireDate);
  return a - b;
});

console.table(employees);
