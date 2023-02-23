// promises.race()
// menerima daftar promise sebagai objek
// contoh

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise pertama diselesaikan");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise dua ditolak");
    reject(20);
  }, 2 * 1000);
});
Promise.race([p1, p2])
  .then((value) => console.log(value))
  .catch((reason) => console.log(reason));
