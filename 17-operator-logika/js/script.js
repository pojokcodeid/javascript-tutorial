//operator logika
// ! NOT
// || OR
// && AND
let tersedia = false,
  kebutuhan = true;
console.log(!tersedia);
console.log(!kebutuhan);

console.log(!undefined);
console.log(!null);
console.log(!20);
console.log(!0);
console.log(!NaN);
console.log(!{});
console.log(!"");
console.log(!"Ok");
console.log(!false);
console.log(!true);
let counter = 10;
console.log(!!counter); // true -> false ->true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
let b = true;
console.log(b && 1 / 0);
b = false;
console.log(b && 1 / 0);
console.log(true && true && true);
console.log(true && true && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true || false || false);
console.log(false || false || false);
