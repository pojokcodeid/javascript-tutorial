// JavaScript closures
// cakupan variable javascript
// lingkup leksikal
// Lingkup leksikal mendefinisikan ruang lingkup variabel dengan posisi variabel yang dideklarasikan dalam kode sumber.

let name = "Pojok Code";
function greeting() {
  let message = "Hai";
  console.log(message + " " + name);
}
greeting();

function greeting2() {
  let message = "Hai";
  function sayHay() {
    console.log(message);
  }
  sayHay();
}
greeting2();
//Penutup Javascript
function greeting3() {
  let message = "Hai....";
  function sayHay() {
    console.log(message);
  }
  return sayHay;
}

let hai = greeting3();
hai();

function greeting4(message) {
  return function (name) {
    return message + " " + name;
  };
}

let sayHai = greeting4("Hai...");
console.log(sayHai("Pojok Code"));
