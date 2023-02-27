// ES2020 memperkenalkan Promise.allSettled()metode yang menerima Promise
// dan mengembalikan Promise baru dan menyelesaikan setelah semua Promise input diselesaikan,
// baik diselesaikan atau ditolak.

// Promise.allSettled(iterable);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise satu diselesaikan");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise dua ditolak");
    reject(20);
  }, 2 * 1000);
});

Promise.allSettled([p1, p2]).then((result) => {
  console.log(result);
});
