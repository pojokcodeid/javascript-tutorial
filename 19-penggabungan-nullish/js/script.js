// ?? => ini adalah operator penggabungan nullish
// jika nilai pertama null atau undefinid maka ambil nilai kedua
// nilai1 ?? nilai2
// conoth oprasi logika
// let result = value1;
// if (result === null || result === undefined) {
//   result = value2;
// }

const nama = null ?? "Pojok Code";
console.log(nama);

let nama2 = null;
if (nama2 === null || nama2 === undefined) {
  nama2 = "Pojok Code";
}
console.log(nama2);
const age = undefined ?? 30;
console.log(age);

let count;
console.log(Boolean(count));
let result = count || 1;
console.log(result);

result = 1 ?? console.log("Hai");
result = null ?? console.log("Hai");

//result = null || undefined ?? 'Ok';
result = (null || undefined) ?? "Ok";
console.log(result);
