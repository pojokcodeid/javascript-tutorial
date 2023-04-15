// Array from akan membuat larik baru dari objek mirip larik atau objek yang
// dpat diubah.

// di ES5 kita bisa menggunakan perulangan

function arrayFromArgs() {
  var result = [];
  for (var i = 0; i < arguments.length; i++) {
    result.push(arguments[i]);
  }
  return result;
}
var fruit = arrayFromArgs("Apple", "Banana", "orange");
console.log(fruit);

function arrayFromArgs2() {
  return Array.prototype.slice.call(arguments);
}
var fruit2 = arrayFromArgs2("Apple", "Banana", "orange");
console.log(fruit2);

function arrayFromArgs3() {
  return Array.from(arguments);
}
console.log(arrayFromArgs3(1, "A"));

function addOne() {
  return Array.from(arguments, (x) => x + 1);
}
console.log(addOne(1, 2, 3));

let doubler = {
  factor: 2,
  double(x) {
    return x * this.factor;
  },
};
let secore = [5, 6, 7];
let newSecore = Array.from(secore, doubler.double, doubler);
console.log(newSecore);
