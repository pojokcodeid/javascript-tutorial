const add = (x, y) => x + y;
try {
  let result = add(10, 20);
  console.log(result);
} catch (e) {
  console.log({ name: e.name, message: e.message });
}

console.log("Bye");

const isValidJson = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};
let valid = isValidJson(`{"language":"Javascript"}`);
console.log(valid);
