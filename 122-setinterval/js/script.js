//set interval digunakan untuk berulang kali memanggil fungsi dengan penundaan
//tetap diantara setiap panggilan

// perintah dasarnya
// let intervalID = setInterval(callback, delay,[arg1, arg2, ...]);
// calback adalah fungsi panggilan balik yang akan dijalankan setiap dilay
// delay adalah waktu dalam mili detik yag harus di tunda
// args1,... adalah argumen yang di teruskan ke fungsi callback

let intervalID;
function toggleColor() {
  let e = document.getElementById("flashtext");
  e.style.color = e.style.color == "red" ? "blue" : "red";
}

function stop() {
  clearInterval(intervalID);
}

function start() {
  intervalID = setInterval(toggleColor, 1000);
}
