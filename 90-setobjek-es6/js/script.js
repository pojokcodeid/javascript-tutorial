// set objek ES6
// ES6 menyediakan type baru set yang menyimpan kumpulan nilai unik dari type
// apapun

let setObjek = new Set();

let chars = new Set(["a", "a", "b", "c", "c"]);
console.log(chars);
console.log(typeof chars);
let result = chars instanceof Set;
console.log(result);
console.log(chars.size);

chars.add("d");
console.log(chars);
chars.add("e").add("f");
console.log(chars);

let exists = chars.has("z");
console.log(exists);

chars.delete("f");
console.log(chars);

chars.clear();
console.log(chars);

let rools = new Set();
rools.add("Editor").add("Admin").add("Subscriber");
for (let rool of rools) {
  console.log(rool);
}

rools.forEach((rool) => console.log(rool.toUpperCase()));

let computer = { type: "Laptop" };
let server = { type: "Server" };
let equipment = new WeakSet([computer, server]);
if (equipment.has(server)) {
  console.log("Kita memiliki server");
}
