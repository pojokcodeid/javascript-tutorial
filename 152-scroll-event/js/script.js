//NOTE: JavaScript scroll events adalah peristiwa yang terjadi ketika Anda menggulir dokumen atau elemen.
// penggunaannya ada 3 cara
// 1. pada tag HTML
// 2. eventlistner
// 3. proprty element.

let x = 0;
function myFunction() {
  document.getElementById("demo").innerHTML = x += 1;
}

/* contoh 2 */
let wadah = document.getElementById("wadah");
wadah.onscroll = function () {
  console.log(wadah.scrollTop);
};

/* contoh 3 */

let control = document.getElementById("control");
control.addEventListener("click", function (e) {
  let div = document.getElementById("scrollDemo");
  let target = e.target;
  switch (target.id) {
    case "btnScrollLeft":
      if (target.textContent == "Scroll >") {
        div.scrollLeft += 20;
        if (div.scrollLeft == 100) {
          target.textContent = "< Scroll";
        }
      } else {
        div.scrollLeft -= 20;
        if (div.scrollLeft == 0) {
          target.textContent = "Scroll >";
        }
      }
      break;
    case "btnScrollTop":
      div.scrollTop -= 20;
      break;
  }
});
