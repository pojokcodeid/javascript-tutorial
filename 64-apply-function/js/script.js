// apply method
// Metode Function.prototype.apply()ini memungkinkan Anda memanggil fungsi dengan this nilai tertentu
// dan argumen yang diberikan sebagai larik
// perintah dasarnya
// fn.apply(thisArg, [args]);
// contoh sederhana
const person = {
  firstName: "Pojok",
  lastName: "Code",
};
function greeat(greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
}
let result = greeat.apply(person, ["Hello", "Bagaimana Kabar anda"]);
console.log(result);

// MEMINJAM FUNGSI
const computer = {
  name: "MacBook",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `the ${this.name} is On`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};
const server = {
  name: "IBM Power PC",
  isOn: false,
};
let result2 = computer.turnOn.apply(server);
console.log(result2);
//Menambahkan array ke array lain
let arr = [1, 2, 3];
let number = [4, 5, 6];
arr.push.apply(arr, number);
console.log(arr);
