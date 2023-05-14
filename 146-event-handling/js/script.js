function showalert() {
  alert("Hello World");
}

/* dom level 0 */
let btn = document.getElementById("btn");
btn.onclick = function () {
  alert("Hello World");
};

/* dom level 2 */
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  alert("Hello World 2");
});
