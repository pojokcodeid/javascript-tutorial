// array some digunakan untuk memerika apakah setidaknya 1 elemen dalam larik
// lulus ujikan
// contoh cara manual

let marks = [4, 5, 7, 9, 10, 3];
let lessThenFive = false;
for (let index = 0; index < marks.length; index++) {
  if (marks[index] < 5) {
    lessThenFive = true;
    break;
  }
}
console.log(lessThenFive);

lessThenFive = marks.some(function (e) {
  return e < 5;
});
console.log(lessThenFive);

lessThenFive = marks.some((e) => e < 5);
console.log(lessThenFive);

function exists(value, array) {
  return array.some((e) => e === value);
}
console.log(exists(4, marks));
console.log(exists(11, marks));

let range = {
  min: 8,
  max: 10,
};
let result = marks.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);
console.log(result);

result = [].some((e) => e > 0);
console.log(result);
result = [].some((e) => e <= 0);
console.log(result);
