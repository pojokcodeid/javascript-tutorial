// Promise: then, catch, finally
// contoh
let success = true;
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "pcode", email: "pcode@test.com" },
        ]);
      } else {
        reject("Gagal mendapatkan data");
      }
    }, 1000);
  });
}
function onFulField(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}
const proms = getUsers();
proms.then(onFulField, onRejected);
// sederhanakan
proms.then(
  (users) => console.log(users),
  (error) => console.log(error)
);

// cach method
let success2 = false;
function getUser2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success2) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "pcode", email: "pcode@test.com" },
        ]);
      } else {
        reject("Gagal Mendapatkan data");
      }
    }, 1000);
  });
}
const proms2 = getUser2();
proms2.catch((error) => {
  console.log(error);
});

// finally method
const render = () => {
  console.log("Process render");
};
getUser2()
  .then((users) => {
    console.log(users);
    render();
  })
  .catch((error) => {
    console.log(error);
    render();
  });

getUser2()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    render();
  });
