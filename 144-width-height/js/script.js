let box = document.querySelector(".box");
let width = box.offsetWidth;
let height = box.offsetHeight;
console.log({ width, height });

const domRect = box.getBoundingClientRect();
console.log(domRect);

let width2 = box.clientWidth;
let height2 = box.clientHeight;
console.log({ width2, height2 });

let style = getComputedStyle(box);

let marginLeft = parseInt(style.marginLeft);
let marginTop = parseInt(style.marginTop);
let marginRight = parseInt(style.marginRight);
let marginBottom = parseInt(style.marginBottom);
console.log({ marginLeft, marginTop, marginRight, marginBottom });
