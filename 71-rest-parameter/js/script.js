// javascript rest parameter (untuk merepresentasikan argumen tidak terbatas)
// ES6 menyediakan parameter jenis baru yang di sebut rest paramer yang memiliki
// awalan tiga titik (...).
// Rest parameter memungkinkan anda untuk mewakili sumlah argumen yang tidak
// terbatas sebagai aray
// contoh

// function fn(a,b,...args) {
//    //...
// }

function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));

function sum2(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

let result = sum2(10, "Hai", 20, undefined, 5);
console.log(result);

function sum3() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}
let result3 = sum3(10, "Hai", 20, undefined, 5);
console.log(result3);

const comine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + " " + curr;
  });
};
let message = comine("javascript", "rest", "Parameter");
console.log(message);

var showNumber = new Function("...numbers", "console.log(numbers)");
showNumber(1, 2, 3, 4, 5);
