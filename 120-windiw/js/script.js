// Objek global di browser adalah window. artinya semua variable dan fungsi yang
// di deklarasikan secra global dengan var menjadi properti dan methode objek
// window.

var counter = 1;
var showCounter = () => console.log(counter);
console.log(window.counter);
window.showCounter();

// 1. ukuran window
let width = window.innerWidth;
let height = window.innerHeight;
console.log(width, height);

width = document.documentElement.clientWidth;
height = document.documentElement.clientHeight;
console.log(width, height);

//2 membuka window baru
let url = "google.com";
// window.open(url, "google");

let feature = "height=500, width=500";
/* window.open(url, "google", feature); */

// setTimeout(() => {
//   window.open(url, "google", feature);
// }, 3000);

// 3. mengubah ukuran window
// let jsWindow = window.open("google.com", "google", "height=600, width=800");
// setTimeout(() => {
//   jsWindow.resizeTo(600, 300);
// }, 3000);

// 4. memindahkan window
// let jsWindow = window.open("google.com", "google", "height=600, width=800");
// setTimeout(() => {
//   jsWindow.moveTo(500, 500);
// }, 3000);
//
// 5. menutup window
let jsWindow = window.open("google.com", "google", "height=600, width=800");
setTimeout(() => {
  jsWindow.close();
}, 3000);
