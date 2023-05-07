//Properti Objek DOM di javascript adalah nilai yang berkaitan dengan elemen
//HTML yang dapat diakses dan dimanipulasi melalui kode javascript
//Dengan kata lain, browser web akan secara otomatis mengonversi atribut elemen
//HTML menjadi properti objek DOM.
// Namun, browser web hanya mengubah atribut standar menjadi properti objek DOM.
// Atribut standar suatu elemen dicantumkan pada spesifikasi elemen.

let input = document.getElementById("username");
for (let atter of input.attributes) {
  console.log(`${atter.name} : ${atter.value}`);
}

let input2 = document.querySelector("#username");
input2.setAttribute("placeholder", "masukan username");
input2.setAttribute("tabindex", 2);
console.log(input2.tabIndex);

// value atribut berubah, itu tercermin dalam value properti, tetapi tidak
// sebaliknya:
input2.setAttribute("value", "guest");
console.log(input2.value);

input2.value = "admin";
console.log(input2.getAttribute("value"));

let checkbox = document.querySelector("#checkbox");
console.log(checkbox.checked);

let password = document.querySelector("#password");
console.log(password.getAttribute("style"));
