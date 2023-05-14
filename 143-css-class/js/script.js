//NOTE: className adalah properti element yang mengembalikan daftar kelas CSS
//element yang di pisahkan dengan spasi string.

let menu = document.querySelector("#menu");
console.log(menu.className);

//menambahkan class.
menu.className += " new";
console.log(menu.className);

menu.classList.add("new2");
console.log(menu.className);

// sepenuhnya mengganti class
menu.className = "class1 class2";
console.log(menu.className);

/* class list */
//NOTE: classList adalah properti read-only dari eleent yang mengembalikan
//koleksi langsung kelas CSS.

let div = document.querySelector("#content");
for (let cssClass of div.classList) {
  console.log(cssClass);
}

div.classList.add("info", "visible", "block");
console.log(div.className);

div.classList.remove("info");
console.log(div.className);
div.classList.remove("visible", "block");
console.log(div.className);

div.classList.replace("main", "warning");
console.log(div.className);

let hasil = div.classList.contains("warning");
console.log(hasil);

div.classList.toggle("visible");
console.log(div.className);
div.classList.toggle("visible");
console.log(div.className);
