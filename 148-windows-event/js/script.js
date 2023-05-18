//NOTE: windows load event dapat di activekan dengan beberapa cara
//1. addeventListner
// window.addEventListener("load", function () {
//   console.log("window loaded");
// });

//2,. onload property
// window.onload = function () {
//   console.log("window loaded property");
// };

//3. body html
function myFunction() {
  console.log("body loaded");
}

let img = document.querySelector("#logo");
img.addEventListener("load", () => {
  console.log("image loaded");
});
img.src = "img/img_avatar1.png";
img.style.width = "100px";
img.style.height = "100px";

this.addEventListener("load", () => {
  let logo = document.createElement("img");
  logo.addEventListener("load", () => {
    console.log("logo loaded dinamis");
  });
  document.body.appendChild(logo);
  logo.src = "img/img_avatar1.png";
  logo.style.width = "100px";
  logo.style.height = "100px";
});
