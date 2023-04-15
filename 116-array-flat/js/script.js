// ES2019 memperkenalkan Array.prototype.flat() metode untuk membuat array baru
// dengan semua element subarray dilakukan secra rekrusif hingga kedalaman tertentu

const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();
console.log(numbers);
console.log(flatNumbers);

const numbers2 = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers2 = numbers2.flat(2);
console.log(flatNumbers2);

const numbers3 = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers3 = numbers3.flat(Infinity);
console.log(flatNumbers3);

const numbers4 = [1, 2, , 4, , 5];
const squence = numbers4.flat();
console.log(squence);
