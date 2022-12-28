// ternary -> untuk mengeksekusi blick dengan pengecekan bolean yang lebih sederhana
//
let age = 18;
let pesan;

if (age >= 16) {
  pesan = "Anda dapat mengemudi";
} else {
  pesan = "Anda dilarang mengemudi";
}
console.log(pesan);

age >= 16
  ? (pesan = "Anda dapat Mengemudi 2")
  : (pesan = "anda dilarang mengemudi");
console.log(pesan);
//alternatif cara lain
pesan = age >= 16 ? "Anda dapat mengemudi 3" : "Anda dilarang mengemudi";
console.log(pesan);
let autentication = true;
let url = autentication
  ? (alert("akun anda akan disambungkan ke admin"), "/admin")
  : (alert("Anda tidak diizinkan"), "/404");
console.log(url);

let loced = 1;
let changed = loced != 1 ? true : false;
console.log(changed);
//sederhanakan
loced = 1;
changed = loced != 1;
console.log(changed);

let spead = 90;
let message =
  spead >= 120 ? "Sangat Kencang" : spead >= 80 ? "Cepat" : "Lambat";
console.log(message);
