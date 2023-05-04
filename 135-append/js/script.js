const parent = document.getElementById("parent-div");

const newH2 = document.createElement("h2");
const newp1 = document.createElement("p");
const newp2 = document.createElement("p");

newH2.innerText = "ini adalah sebuah H2 baru";
newp1.innerText = "ini adalah sebuah p1 baru";
newp2.innerText = "ini adalah sebuah p2 baru";

parent.append(newH2, newp1, newp2);

// menggunakan append() untuk append element
let app = document.getElementById("app");
let langs = ["HTML", "CSS", "TypeScript"];
let nodes = langs.map((lang) => {
  let li = document.createElement("li");
  li.innerText = lang;
  return li;
});
app.append(...nodes);

app.append("append() text demo");
console.log(app.textContent);
