// javascript document.createElement() digunakan untuk membuat element HTML
// baru dan dan melampirkan ke struktur DOM.
// perintah dasarnya
// let element = document.createElement(htmltag);
// contoh membuat DIV baru

let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
document.body.appendChild(div);

// menambahkan text kedalam div
let div2 = document.createElement("div");
div2.id = "content";
div2.className = "note";
let text = document.createTextNode("Contoh Text");
div2.appendChild(text);

let h2 = document.createElement("h2");
h2.textContent = "Tambahkan H2 ke tag DIV";
div2.appendChild(h2);

const menu = document.querySelector("#menu");
let li = document.createElement("li");
li.textContent = "Product";
menu.appendChild(li);

li = document.createElement("li");
li.textContent = "Contact";
menu.appendChild(li);
document.body.appendChild(div2);

function loadJSAsic(url) {
  let script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}
loadJSAsic("js/lib.js");
