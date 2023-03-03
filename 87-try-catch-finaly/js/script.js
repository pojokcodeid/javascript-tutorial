// try cach finaly
// perintah dasar

try {
  // statement
} catch (e) {
  // info error
} finally {
  //statement
}

const add = (x, y) => x + y;
let result = 0;
try {
  result = add(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}

function fn() {
  try {
    return 1;
  } catch {
    return 2;
  } finally {
    return 3;
  }
}
console.log(fn());
