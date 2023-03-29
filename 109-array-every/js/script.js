// array every digunakan untuk memastika element array lulus test
// kita coba dengan cara lama for loop

let numbers = [1, 2, 3];
let result = true;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 0) {
    result = false;
    break;
  }
}
console.log(result);

result = numbers.every(function (e) {
  return e > 0;
});
console.log(result);

result = numbers.every((e) => e > 0);
console.log(result);

numbers = [1, 3, 5];
let isEven = numbers.every(function (e) {
  return e % 2 == 0;
});
console.log(isEven);

let isOdd = numbers.every(function (e) {
  return Math.abs(e % 2) == 1;
});
console.log(isOdd);

let range = {
  min: 0,
  max: 10,
};
let isInRange = numbers.every(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(isInRange);

let getZero = [].every((e) => e > 0);
console.log(getZero);
let ltZero = [].every((e) => e < 0);
console.log(ltZero);
