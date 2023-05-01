const parent = document.getElementById("parent-div");

const newH2 = document.createElement("h2");
const newp1 = document.createElement("p");
const newp2 = document.createElement("p");

newH2.textContent = "This is a new H2";
newp1.textContent = "This is a new paragraph";
newp2.textContent = "This is a new paragraph";

parent.append(newH2, newp1, newp2);

// menggunakan append() untuk append element
let app = document.querySelector("#app");
let langs = ["HTML", "CSS", "TypeScript"];
let nodes = langs.map((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  return li;
});
app.append(...nodes);

//menggunakan append() untuk append text
app.append("append() text demo");
console.log(app.textContent);
