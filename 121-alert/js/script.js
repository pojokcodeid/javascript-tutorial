// alert adalah sebuah cara untuk menampilkan pesan ke layar
// alert("ini adalah pesan");
// window.alert("ini adalah pesan");

/* alert("Selamat datang di tutorial javascript"); */

// setTimeout(() => {
//   alert("Pesan muncul setelah 3 seconds");
// }, 3000);

// let result = confirm("Apakah anda ingin menghapus data ini?");
// let message = result ? "Data berhasil dihapus" : "Data gagal dihapus";
// alert(message);

// let lang = prompt("Apa bahasa favorite anda?");
// let feedback =
//   lang.toLowerCase() === "javascript" ? "Wow anda sangat keren" : `Waw ${lang}`;
// alert(feedback);

let ageStr = prompt("Berapa umur anda?");
let age = Number(ageStr);
let message =
  age >= 18
    ? "Anda dapat melakukan transaksi"
    : "Anda tidak dapat melakukan transaksi";
alert(message);
