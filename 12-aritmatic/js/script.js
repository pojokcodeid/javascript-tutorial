// tambah (+) kurang (-) bagi (/) kali (*)
let sum = 10 + 20;
console.log(sum);
let price = 9.99,
  diskon = 1.5;
console.log(price - diskon);
let x = "10",
  y = "20";
console.log(x + y);

let hasil = 10 + "20";
console.log(hasil);
console.log(30 - 10);
console.log(30 * 10);
console.log("30" * 10);
console.log("30" / 10);
console.log(30 / 10);

let energy = {
  valueOf() {
    return 100;
  },
};
let energyNOw = energy - 10;
console.log(energy + 100);
console.log(energy * 10);
console.log(energy / 5);

let energy2 = {
  toString() {
    return 100;
  },
};
energyNOw = energy2 - 10;
console.log(energy2 + 100);
console.log(energy2 * 10);
console.log(energy2 / 5);
