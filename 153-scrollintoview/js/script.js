//scrollintoview adalah cara untuk menggulirkan tamilan kepada element
//element.scrollIntoView(options);

let btn = document.querySelector(".btn");
let el = document.querySelector(".special");
btn.addEventListener("click", function () {
  el.scrollIntoView(false);
});
