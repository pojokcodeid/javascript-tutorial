function getUser() {
  return [
    { username: "john", email: "john@test.com" },
    { username: "pojok", email: "pojok@test.com" },
  ];
}
// untuk menemukan pengguna
function findUser(username) {
  const users = getUser();
  const user = users.find((user) => user.username === username);
  return user;
}
console.log(findUser("pojok"));

//contoh dengan delay
function getUser2() {
  let users2 = [];
  setTimeout(() => {
    users2 = [
      { username: "john", email: "john@test.com" },
      { username: "pojok", email: "pojok@test.com" },
    ];
  }, 1000);
  return users2;
}
function findUser2(username) {
  const users2 = getUser2();
  const user2 = users2.find((user2) => user2.username === username);
  return user2;
}
console.log(findUser2("pojok"));

function getUser3(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "pojok", email: "pojok@test.com" },
    ]);
  }, 1000);
}
function findUser3(username, callback) {
  getUser3((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}
findUser3("pojok", console.log);

function getUser4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "john", email: "john@test.com" },
        { username: "pojok", email: "pojok@test.com" },
      ]);
    }, 1000);
  });
}
function onFullField(users) {
  console.log(users);
}

const proms = getUser4();
proms.then(onFullField);

proms.then((users) => {
  console.log(users);
});

let success = false;
function getUser5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "pojok", email: "pojok@test.com" },
        ]);
      } else {
        reject("Gagal mendapatkan data");
      }
    }, 1000);
  });
}
function onFullField(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const proms5 = getUser5();
proms5.then(onFullField, onRejected);

proms5.then(
  (users) => console.log,
  (error) => console.log
);
