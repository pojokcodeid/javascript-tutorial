// TODO: do while adalah perintah perulangan untuk mengeksekis block sampai bernilai false
// NOTE: ini berbeda dengan while , do while minimal di eksekusi 1 kali ketika di jalankan

// do{
//    statement
// }while(expresion)

let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);

// contoh permainan
const MIN = 1;
const MAX = 10;
let scretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let guesses = 0;
let hint = "";
let number = 0;
do {
  let input = prompt(`Silahkan masukan nilai antara ${MIN} dan ${MAX}` + hint);
  number = parseInt(input);
  guesses++;
  if (number > scretNumber) {
    hint = ", dan lebih kecil " + number;
  } else if (number < scretNumber) {
    hint = ", dan lebih besar dari " + hint;
  } else if (number == scretNumber) {
    alert(`Selamata anda benar setelah ${guesses}`);
  }
} while (number != scretNumber);
