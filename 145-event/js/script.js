//NOTE: event adalah tindakan yang terjadi di browser web, yang di beri upan
//balik oleh browser kepada anda sejingga anda dapat menanggapinya.
// misalnya saat pengguna klik tombol
// contoh :

let btn = document.querySelector("#btn");
function display() {
  alert("Terima kasih sudah klik saya !");
}
/* btn.addEventListener("click", display); */

// WARNING: mendapatkan event yang dilakukan

// btn.addEventListener("click", function (event) {
//   console.log(event.type);
// });

//prevent default
//untuk mencegah prilaku default suatu peristiwa

let link = document.querySelector("a");
link.addEventListener("click", function (event) {
  console.log("diklik");
  event.preventDefault();
});

//stopPropagation()
//metode ini akan segera menghentikan alur kejadian melaui pohon DOM.
//namun tidak menghentikan prilaku default browser

btn.addEventListener("click", function (event) {
  console.log("Tombol sudah diklik");
  /* event.stopPropagation(); */
});

document.body.addEventListener("click", function (event) {
  console.log("Body sudah diklik");
});
