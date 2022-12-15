// javascript objek
let kosong = {};
console.log(kosong);
let personal = {
  namaDepan: "Pojok",
  namaAkhir: "Code",
};
console.log(personal);
console.log(personal.namaDepan);
console.log(personal.namaAkhir);

console.log(personal["namaDepan"]);
console.log(personal["namaAkhir"]);
let alamat = {
  "nomor rumah": 1234,
  jalan: "Flamboyan no 44",
  propinsi: "DKI",
};

console.log(alamat["nomor rumah"]);
//console.log(alamat."nomor rumah");
personal.namaDepan = "Percobaan";
personal.age = 24;
console.log(personal);
delete personal.age;
console.log(personal);
//cek property objek
console.log("namaDepan" in personal);
console.log("age" in personal);
