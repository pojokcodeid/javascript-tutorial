/* set attribute */
// setAtrinbute() adalah sebuah metode untuk menetapkan nilai atribute pada
// element tertentu.
// element.setAttribute(attribute, value);

let btnSend = document.getElementById("btnSend");
if (btnSend) {
  btnSend.addEventListener("click", function () {
    btnSend.setAttribute("name", "send");
    btnSend.setAttribute("disabled", true);
    check();
  });
}

/* getatribute */
// getAttribute() adalah sebuah metode untuk mendapatkan nilai atribute pada
// element tertentu.

let google = document.getElementById("google");
if (google) {
  let target = google.getAttribute("target");
  console.log(target);
  let title = google.getAttribute("title");
  console.log(title);
}

/* remove atribute */
// removeAttribute() adalah sebuah metode untuk menghapus atribute dengan nama
// tertentu pada element.

let draft = document.getElementById("draft");
if (draft) {
  draft.removeAttribute("disabled");
}

/* hashatribute */
// hashAttribute() adalah sebuah fungsi yang digunakan untuk memeriksa apakah
// suatu element memiliki atribute tertentu.

let btn = document.getElementById("btnSend");
if (btn) {
  let disabled = btn.hasAttribute("disabled");
  console.log(disabled);
}

function check() {
  let disable = btn.hasAttribute("disabled");
  console.log(disable);
}
