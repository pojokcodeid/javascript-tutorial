// Promise.all() adalah metode statis untuk mengumpulkan hasil dari beberapa operasi asinkron.
// perintah dasar Promise.all(iterable);
// 1. CONTOH Promise YANG TERSELESAIKAN

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise pertama diselesaikan");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Kedua diselesaikan");
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Ketiga diselesaikan");
    resolve(30);
  }, 3 * 1000);
});

// Promise.all([p1, p2, p3]).then((result) => {
//   const total = result.reduce((p, c) => p + c);
//   console.log(`Result : ${result}`);
//   console.log(`Total : ${total}`);
// });

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise keempat ditolak");
    reject("Failed");
  }, 4 * 1000);
});

Promise.all([p1, p2, p3, p4]).then(console.log).catch(console.log);
