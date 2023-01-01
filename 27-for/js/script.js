// TODO: for loop adalah perulangan dengan 3 parameter
// 1. initializer
// 2. condition
// 3. iterator
//NOTE: perintah dasarnya
// for (inisiator; condition; iterator){
//       statement
//}

for (let i = 1; i < 5; i++) {
  console.log(i);
}

// loop tanpa inisiator
let j = 1;
for (; j < 10; j += 2) {
  console.log(j);
}
// for loop tanpa kondisi
for (let j = 1; ; j += 2) {
  console.log(j);
  if (j > 10) break;
}
// for loop tabpa expresi
j = 1;
for (;;) {
  if (j > 10) break;
  console.log(j);
  j += 2;
}
//for loop tanpa body
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);
