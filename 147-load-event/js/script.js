// NOTE: Ketika mebuka halaman kejadian berikut terjadi secara berurutan
// 1. DOMContentLoaded
// 2. load
// 3. beforeunload
// 4. unload

// WARNING:
// document.addEventListener('DOMContentLoaded',() => {
//     // handle DOMContentLoaded event
// });
// document.addEventListener('load',() => {
//     // handle load event
// });
// document.addEventListener('beforeunload',() => {
//     // handle beforeunload event
// });
// document.addEventListener('unload',() => {
//     // handle unload event
// });

this.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded full loaded");
});

this.addEventListener("load", () => {
  console.log("load full loaded");
});

document.addEventListener("beforeunload", () => {
  console.log("the beforeunload full loaded");
});

addEventListener("unload", () => {
  console.log("the unload full loaded");
});
