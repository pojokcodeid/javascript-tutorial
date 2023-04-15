// alert adalah sebuah cara untuk menampilkan pesan ke layar
// alert("ini adalah pesan");
// window.alert("ini adalah pesan");

alert("Selmat datang di tutorial javascript");

setTimeout(() => {
  alert("Pesan setelah 3 seconds");
}, 3000);

// selain alert kita juga bisa membuat confirmasi dialog
// let result=window.confirm("Apakah anda yakin?");
let result = confirm("Apakah anda yakin?");
let message = result
  ? "Selamat datang"
  : "Anda tidak diizinkan mengakses halaman ini";
alert(message);

// selain itu kita juga bisa membuat prompt dialog
// let result=window.prompt(message,default);

let lang = prompt("Apa bahasa faforit anda?");
let feedback =
  lang.toLowerCase() === "javascript" ? "Waw sangat keren" : `Waw ${lang}`;
alert(feedback);

let ageStr = prompt("Berapa umur anda?");
let age = Number(ageStr);
let message =
  age >= 18
    ? "Anda dapat mengakses halaman ini"
    : "Anda tidak dapat mengakses halaman ini";
alert(message);
