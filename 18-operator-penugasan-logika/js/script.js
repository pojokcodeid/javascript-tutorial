// ||= penugasan OR
// &&= penugasan AND
// ??= penugasan penggabungan nullis
// x ||= y  =>  x || (x = y)
// x &&= y  =>  x && (x = y)
// x ??= y  =>  x ?? (x = y)

let title;
console.log(Boolean(title));
title ||= "Untitle";
console.log(title);

let text;
console.log(text || (text = "untitle"));
console.log(text || "untitle");

let judul = " Tutorial Javascript";
console.log(Boolean(judul));
judul ||= "Untitle";
console.log(judul);

let person = {
  namaDepan: "Pojok",
  namaBelakang: "Code",
};
person.namaBelakang &&= "Samsul";
console.log(person);

let data;
data &&= "Kosong";
console.log(data);
data = "x";
console.log(data && (data = "Kosong"));
console.log(data && "Kosong");

let user = {
  userName: "samson",
  //nama: "x",
};
user.nama ??= "Pojok";
console.log(user);
