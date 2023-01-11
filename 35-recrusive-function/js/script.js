// recursive function
// function recursive(){
//    -- statement
//    recursive();
//    -- statement
// }

function counDown(number) {
  console.log(number);
  let nextNumber = number - 1;
  if (nextNumber > 0) counDown(nextNumber);
}
counDown(3);
let wadah = counDown;
let newYearCounDown = wadah;
wadah = null;
newYearCounDown(10);

let counDown2 = function f(number) {
  console.log(number);
  let nextNumber = number - 1;
  if (nextNumber > 0) {
    f(nextNumber);
  }
};

newYearCounDown = counDown2;
counDown2 = null;
newYearCounDown(10);

function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(2));
