//if ... else percabangan bolean diantara true dan false
// if{
// --s tatemnt
// }else{
// --statemnt
// }

let age = 18;
if (age == 18) console.log("Anda Bisa login");
else console.log("Anda tidak berhak");

if (age >= 19) {
  console.log("anda Bisa Logain");
} else {
  console.log("anda tidak berhak");
}

age = 17;
let country = "ID";
if (age == 16 && country === "ID") {
  console.log("Anda Bisa Mengemudi");
} else {
  console.log("Anda ditolak");
}

// if (condition1) {
//   // ...
// } else if (condition2) {
//   // ...
// } else if (condition3) {
//   //...
// } else {
//   //...
// }

let no = 3;
let hari;
if (no == 0) {
  hari = "Ahad";
} else if (no == 1) {
  hari = "Senin";
} else if (no == 2) {
  hari = "Selasa";
} else if (no == 3) {
  hari = "Rabu";
} else if (no == 4) {
  hari = "Kamis";
} else if (no == 4) {
  hari = "Jumat";
} else {
  hari = "Sabtu";
}

console.log(hari);
