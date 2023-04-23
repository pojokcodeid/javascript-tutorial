let note = document.querySelector(".note");
console.log(note.parentNode);

let parentElement = document.getElementById("parent");
console.log(parentElement.firstChild);
console.log(parentElement.firstChild.nodeName);
console.log(parentElement.lastChild);

let childElement = parentElement.children;
for (let i = 0; i < childElement.length; i++) {
  console.log(childElement[i]);
}

parentElement = document.getElementById("parent");
childElement = parentElement.firstChild;

while (childElement !== null) {
  console.log(childElement);
  childElement = childElement.nextSibling;
}
