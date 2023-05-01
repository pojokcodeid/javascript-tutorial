const fragment = document.createDocumentFragment();

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.textContent = "Element 1";
div2.textContent = "Element 2";
div3.textContent = "Element 3";

fragment.appendChild(div1);
fragment.appendChild(div2);
fragment.appendChild(div3);

const parent = document.querySelector("#parent");
parent.appendChild(fragment);

let languages = ["JS", "HTML", "CSS", "PHP", "Python", "Java"];
let langEL = document.querySelector("#lang");
let frgmn = new DocumentFragment();
languages.forEach((languages) => {
  let li = document.createElement("li");
  li.textContent = languages;
  frgmn.appendChild(li);
});
langEL.appendChild(frgmn);
