//javascript unary operator
let x = "10";
let y = +x;
let z = "11";
console.log(typeof y);
console.log(typeof z);

let f = false,
  t = true;
console.log(+f);
console.log(+t);
//objek
let person = {
  name: "Pojok Code",
  toString: function () {
    return "25";
  },
  valueOf: function () {
    return "30";
  },
};
console.log(typeof +person);

let x1 = 10;
let y1 = -x1;
console.log(y1);
let age = 25;
++age;
console.log(age);

age = age + 1;
console.log(age);
let wight = 90;
--wight;
console.log(wight);
wight = ++wight + 5;
console.log(wight);
wight = --wight + 5;
console.log(wight);
let newWight = wight++ + 5;
console.log(wight);
console.log(newWight);
let newWight1 = wight-- + 5;
console.log(wight);
console.log(newWight1);
