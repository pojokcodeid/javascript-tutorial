// JavaScript mouse events adalah peristiwa yang terjadi ketika pengguna berinteraksi dengan elemen HTML menggunakan perangkat penunjuk (seperti mouse). Ada beberapa jenis peristiwa mouse, seperti klik, dblclick, mouseup, mousedown, mousemove, mouseover, mouseout, mouseenter, dan mouseleave

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("anda mengklik tombol");
});

btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "green";
});

btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = "";
});

/* contoh 2 */
let box = document.getElementById("box");
box.addEventListener("mousedown", function () {
  console.log("anda menekan tombol mouse");
});

box.addEventListener("mouseup", function () {
  console.log("anda melepas tombol mouse");
});

box.addEventListener("dblclick", function () {
  box.style.backgroundColor = "red";
});

/* contoh 3 */
let btn2 = document.getElementById("btn2");
btn2.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

btn2.addEventListener("mouseup", (e) => {
  let msg = document.querySelector("#message");
  switch (e.button) {
    case 0:
      msg.textContent = "anda menekan tombol mouse kiri";
      break;
    case 1:
      msg.textContent = "anda menekan tombol mouse tengah";
      break;
    case 2:
      msg.textContent = "anda menekan tombol mouse kanan";
      break;
    default:
      msg.textContent = "tidak terdefinisi";
  }
});
