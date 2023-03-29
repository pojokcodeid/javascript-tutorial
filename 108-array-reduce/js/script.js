// array reduce digunakan untuk mengurangi array menjadi sebuah nilai
// contoh cara manual

let numbers = [1, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let numbers2 = [1, 2, 3];
let sum2 = numbers2.reduce(function (previusValue, currentValue) {
  return previusValue + currentValue;
});
console.log(sum2);

function getOrdinalSuffix(i) {
  let j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) return i + "st";
  if (j == 2 && k != 12) return i + "nd";
  if (j == 3 && k != 13) return i + "rd";
  return i + "th";
}
let call = 1;
sum = numbers.reduce(function (previusValue, currentValue, currentIndex) {
  let result = previusValue + currentValue;
  console.log(`${getOrdinalSuffix(call)} call`);
  call++;
  console.table({ previusValue, currentValue, currentIndex, result });
  return result;
}, 100);
console.log(`Result: ${sum}`);
