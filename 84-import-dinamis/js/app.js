// import { show } from "./dialog.js";

// let btn = document.querySelector("#show");
// btn.addEventListener("click", function () {
//   show("Hai");
// });

// let btn = document.querySelector("#show");
// btn.addEventListener("click", function () {
//   import("./dialog.js")
//     .then((dialog) => {
//       dialog.show("Hai dari ES2020");
//     })
//     .catch((error) => {
//       // error handling
//     });
// });

// let btn = document.querySelector("#show");
// btn.addEventListener("click", function () {
//   (async () => {
//     try {
//       let dialog = await import("./dialog.js");
//       dialog.show("Hai dari ES2020 asic");
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// });

let btn = document.querySelector("#show");
btn.addEventListener("click", function () {
  (async () => {
    try {
      let { show, hide } = await import("./dialog.js");
      show("Hai dari ES2020 asic");
      hide();
    } catch (error) {
      console.log(error);
    }
  })();
});
