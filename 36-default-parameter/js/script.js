// NOTE: default parameter diperkenalkan setelah ES6
// function nama(paramter = defult){
//    -- script
// }

function add(x, y) {
  return x + y;
}

add(100, 200);
// x dan y adalah parameter
// 100 dan 200 adalah argument

function say(message) {
  message = typeof message !== "undefined" ? message : "Hai";
  console.log(message);
}
say();
say("Hello");

function say(message = "Hai 2") {
  console.log(message);
}

function createDev(
  height = "100px",
  width = "100px",
  border = "solid 1px red"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}
createDev();
createDev(undefined, undefined, "solid 5px blue");
// evaluasi parameter
function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}
console.log(put("Toy Cars"));
console.log(put("Toy Bear", put("Toys 2")));

// parameter lain untuk defult
function add(x = 1, y = x, z = x + y) {
  return x + y + z;
}
console.log(add());

let taxRate = () => 0.1;
let getPrice = function (price, tax = price * taxRate()) {
  return price + tax;
};
console.log(getPrice(100));

function add(x, y = 1, z = 2) {
  console.log(arguments.length);
  return x + y + z;
}
add(10);
add(10, 20, 30);
