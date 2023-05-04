// insertAdjacentHTML() adalah metode dari atarmuka Element yang mengurai text
// yang ditentukan sebagai HTML atau XML dan memasukan node yang dihasilkan
// kedalam pohon node.
// insertAdjacentHTML(position, text)
// 'beforebegin': sebelum elemen
// 'afterbegin': sebelum anak pertamanya dari elemen.
// 'beforeend': setelah anak terakhir dari elemen
// 'afterend': setelah elemen

/* contoh 1 */
function myFunction() {
  const h2 = document.getElementById("myH2");
  let html = "<p>My new paragraf </p>";
  h2.insertAdjacentHTML("afterend", html);
}

/* contoh 2 */
let list = document.querySelector("#list");
list.insertAdjacentHTML("beforebegin", "<h2>Web Teknologi</h2>");
list.insertAdjacentHTML("afterbegin", "<li>HTML</li>");
list.insertAdjacentHTML("beforeend", "<li>Javascript</li>");
list.insertAdjacentHTML("afterend", "<p>for front end developer </p>");
