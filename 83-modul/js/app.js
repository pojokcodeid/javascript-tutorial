import { message } from "./message.js";
const h1 = document.createElement("h1");
h1.textContent = message;
document.body.appendChild(h1);

// ambil dari log
import { pesan, setMessage } from "./log.js";
console.log(pesan);
setMessage("Hello");
console.log(pesan);

// import beberapa bidang
import { a, b, result, sum, multiply } from "./cal.js";
sum();
console.log(result);
multiply();
console.log(result);

// import menggunakan objek
import * as cal from "./cal.js";
cal.a;
cal.b;
cal.sum();
console.log(cal.result);
cal.multiply();
console.log(cal.result);

// begitupun ketika menaggilnya
// function importSum(){
//   import {sum} from "./cal.js";
// }

let jumlah = cal.jumlah(10, 20);
console.log(jumlah);
