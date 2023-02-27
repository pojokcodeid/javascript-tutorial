// NOTE: promise error handling

function getUserById(id) {
  if (typeof id !== "number" || is <= 0) {
    throw new Error("Invalid id argument");
  }
  return new Promise((resolve, reject) => {
    resolve({
      id: id,
      username: "admin",
    });
  });
}
try {
  getUserById("a")
    .then((user) => console.log(user.username))
    .catch((err) => console.log(err));
} catch (error) {
  console.log(`Terjadi error : ${error}`);
}

// error didalam promise
let autorize = false;
function getUserById2(id) {
  return new Promise((resolve, reject) => {
    if (!autorize) {
      //throw new Error("Anda tidak diberikan hak");
      reject("Anda tidak diberikan hak");
    }
    resolve({
      id: id,
      username: "admin",
    });
  });
}
try {
  getUserById2(10)
    .then((user) => console.log(user.username))
    .catch((err) => console.log(`error try cah: ${err}`));
} catch (error) {
  console.log(`Error by try catch : ${error}`);
}
