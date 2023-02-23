// Promise.any()menerima daftar objek Promise sebagai objek yang dapat diubah
// Promise.any(iterable);
// akan di keluarkan yang paling duluan selesai

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 ditolak");
    reject("error 1");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 ditolak");
    reject("error 2");
  }, 2000);
});

const p = Promise.any([p1, p2]);
p.catch((e) => {
  console.log("Returned Promise");
  console.log(e, e.errors);
});
