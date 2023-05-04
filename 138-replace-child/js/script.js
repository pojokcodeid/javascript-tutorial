// node.replaceChild() adalah metode javascript untuk mengganti element HTML
// dengan yang baru.
//
// parentNode.replaceChild(newChild, oldChild);

let menu = document.getElementById("menu");
let li = document.createElement("li");
li.textContent = "Home";

//menu.replaceChild(li, menu.children[0]);
menu.replaceChild(li, menu.firstElementChild);

/* clone NODE */

let menu2 = document.getElementById("menu");
let cloneMenu = menu2.cloneNode(true);
cloneMenu.id = "menu-mobile";
document.body.appendChild(cloneMenu);

/* remove Chiled */

let menu3 = document.getElementById("menu");
menu3.removeChild(menu3.lastElementChild);

/* insert before */
let menu4 = document.getElementById("menu");
let li2 = document.createElement("li");
li2.textContent = "Contact";

menu4.insertBefore(li2, menu4.firstElementChild);
