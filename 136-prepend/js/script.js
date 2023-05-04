// NOTE: Methode prepend() digunakan untuk menyisipkan NOde Objek atau DOMString
// Objek sebelum anak pertama dari simpul induk.
// parentNode.prepend(...nodes);
// parentNode.prepend(...DOMStrings);

let app = document.querySelector("#app");
let langs = ["Typescript", "CSS", "JavaScript"];
let nodes = langs.map((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  return li;
});
app.prepend(...nodes);

let app2 = document.querySelector("#app2");
app2.prepend("prepend() text demo");
console.log(app2.textContent);
