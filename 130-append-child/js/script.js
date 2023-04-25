// appendChild() adalah metode untuk menambahkan element baru ke bagian akhir
// daftar node anak dari node induk yang ditentukan.
// perintah dasarnya
// parentNode.appendChild(childNode);

function createMenuItem(name) {
  var li = document.createElement("li");
  li.textContent = name;
  return li;
}
const menu = document.querySelector("#menu");
menu.appendChild(createMenuItem("Home"));
menu.appendChild(createMenuItem("Service"));
menu.appendChild(createMenuItem("About"));

const firstList = document.querySelector("#first-list");
const everest = firstList.firstElementChild;
const secondList = document.querySelector("#second-list");
secondList.appendChild(everest);

function addItem() {
  var node = document.createElement("li");
  var text = document.createTextNode(
    prompt("Masukan text untuk menambahkan :")
  );
  node.appendChild(text);
  document.getElementById("myList").appendChild(node);
}
