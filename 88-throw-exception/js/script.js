// throw exception
// throwmemungkinkan Anda untuk melempar pengecualian
// contoh

function add(x, y) {
  if (typeof x != "number") {
    // throw "Argument pertama bukan number";
    throw new Error("Argument pertaman bukan number");
  }
  if (typeof y != "number") {
    // throw "Argument kedua bukan number";
    throw new Error("Argument kedua bukan number");
  }
  return x + y;
}
try {
  const result = add("A", 10);
  console.log(result);
} catch (e) {
  console.log(e.name, ":", e.message);
}

class NumberError extends Error {
  constructor(value) {
    super(`"${value}" adalah bukan number`);
    this.name = "InvalidNumber";
  }
}

function add2(x, y) {
  if (typeof x != "number") {
    throw new NumberError(x);
  }
  if (typeof y != "number") {
    throw new NumberError(y);
  }
  return x + y;
}
try {
  const result2 = add2("A", 10);
  console.log(result2);
} catch (e) {
  console.log(e.name, ":", e.message);
}
