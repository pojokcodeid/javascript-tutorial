// switch adalah cara sederhana untuk if bersarang
// untuk pengecekan boolean
// switch (expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     case value3:
//         statement3;
//         break;
//     default:
//         statement;
// }

let day = 3;
let nama;
switch (day) {
  case 1:
    nama = "Ahad";
    break;
  case 2:
    nama = "Senin";
    break;
  case 3:
    nama = "Selasa";
    break;
  case 4:
    nama = "Rabu";
    break;
  case 5:
    nama = "Kamis";
    break;
  case 6:
    nama = "Jumat";
    break;
  case 7:
    nama = "Sabtu";
    break;
  default:
    nama = "tidak valid";
    break;
}
console.log(nama);

let year = 2016;
let month = 2;
let dayCount;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
  default:
    dayCount - 1;
}
console.log(dayCount);
