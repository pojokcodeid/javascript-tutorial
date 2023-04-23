// JavaScript memiliki banyak cara untuk mengambil nilai dari sebuah URL,
// yang umumnya disebut sebagai "query string". Salah satu cara yang paling
// sederhana adalah dengan menggunakan properti window.location.search.
// Properti ini akan mengembalikan tanda tanya (?) dan seluruh query string yang berada di belakangnya.

// Sebagai contoh, jika URL saat ini adalah https://www.example.com/?name=John&age=30,
// maka window.location.search akan mengembalikan ?name=John&age=30.
// asumsikan url kita http://127.0.0.1:8080/?type=list&page=20

const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
  console.log(`${key} : ${value}`);
}

// 1. key()
const urlParams2 = new URLSearchParams("?type=list&page=20");
for (const key of urlParams2.keys()) {
  console.log(key);
}

// 2. values()
for (const value of urlParams2.values()) {
  console.log(value);
}

// 3. entries()
for (const entry of urlParams2.entries()) {
  console.log(entry);
}

// 4. check apakah ada query parameter string
console.log(urlParams2.has("type"));
console.log(urlParams2.has("foo"));
