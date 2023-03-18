//MAP OBJECT
// ES6 menyediakan tipe koleksi baru yang disebut Map
// Menurut definisi, sebuah Mapobjek menyimpan pasangan kunci-nilai.
// Kunci dan nilai Peta dapat berupa nilai apa saja.
// perintah dasarnya
// let map = new Map([iterable]);

let john = { name: "JOhn Doe" },
  lily = { name: "Lily Bush" },
  pojok = { name: "Pojok Code" };

let userRols = new Map();
console.log(typeof userRols);
console.log(userRols instanceof Map);

userRols.set(john, "admin");
userRols.set(lily, "editir").set(pojok, "subscriber");

let userRols2 = new Map([
  [john, "admin"],
  [lily, "editor"],
  [pojok, "subscriber"],
]);

console.log(userRols.get(john));

let foo = { name: "Foo" };
console.log(userRols.get(foo));

console.log(userRols.has(foo));
console.log(userRols.has(john));

console.log(userRols.size);

for (let role of userRols.values()) {
  console.log(role);
}

for (let [user, role] of userRols.entries()) {
  console.log(`${user.name}:${role}`);
}

for (const role of userRols.entries()) {
  console.log(`${role[0]} : ${role[1]}`);
}

userRols.forEach((role, user) => console.log(`${user.name}:${role}`));

var keys = [...userRols.keys()];
console.log(keys);
var keys2 = [...userRols.values()];
console.log(keys2);

userRols.delete(john);
console.log(userRols.keys);

userRols.clear();
