const h1 = document.querySelector("h1");
const p = document.createElement("p");
p.innerText = "ini adalah javascript DOM after demo";
h1.after(p);

// menyisipkan lebih dari satu
const list = document.querySelector("ul");
const libs = ["html", "css", "js"];
const items = libs.map(function (item) {
  const li = document.createElement("li");
  li.innerText = item;
  return li;
});
list.lastChild.after(...items);

const button = document.querySelector("button");
button.firstChild.after(" 🧡");
