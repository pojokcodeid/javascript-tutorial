// NOTE: Custom event di JavaScript adalah event yang dibuat oleh developer untuk mengirimkan informasi atau data tertentu ke elemen atau komponen lain.
// untuk membuat custom event
// const event = new CustomEvent('namaevent', {
//   detail: data
// });

function highlight(elem) {
  const bgColor = "yellow";
  elem.style.backgroundColor = bgColor;

  //create event
  let event = new CustomEvent("highlight", {
    detail: {
      backgroundColor: bgColor,
    },
  });

  //dispatch event
  elem.dispatchEvent(event);
}
//select elemet
let div = document.querySelector(".note");
//add border style
function addBorder(elem) {
  elem.style.border = "2px solid red";
}
//listen the highlight event
div.addEventListener("highlight", function (e) {
  addBorder(this);
  console.log(e.detail);
});

highlight(div);
