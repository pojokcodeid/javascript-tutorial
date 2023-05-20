//NOTE: Event keyboard pada adalah event yang terjadi ketika pengguna menekan atau melepaskan sebuah tombol pada keyboard. Ada tiga jenis event keyboard pada javascript: keydown, keypress, dan keyup1.
// 1. keydown: Event ini terjadi ketika tombol ditekan, dan akan berulang jika tombol ditekan terus menerus.
// 2. keypress: Event ini terjadi ketika tombol yang menghasilkan karakter alfanumerik atau tanda baca ditekan.
// 3. keyup: Event ini terjadi ketika tombol dilepaskan.

let msg = document.getElementById("message");
// msg.addEventListener("keydown", function (event) {
//   console.log("keydown " + event.key);
//   console.log("event key down " + event.key);
//   console.log("lokasi key down " + event.location);
// });
// msg.addEventListener("keypress", function (event) {
//   console.log("keypress " + event.key);
//   console.log("event keypress " + event.key);
//   console.log("lokasi keypress " + event.location);
// });
// msg.addEventListener("keyup", function (event) {
//   console.log("keyup " + event.key);
//   console.log("event keyup " + event.key);
//   console.log("lokasi keyup " + event.location);
// });

msg.addEventListener("keyup", function (event) {
  if (event.key === "Enter" || event.which === 13) {
    let output = document.getElementById("output");
    output.textContent = msg.value + " key= " + event.key;
  }
});
