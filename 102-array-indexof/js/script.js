// Array IndexOF
// Untuk menemukan posisi elemen dalam array , Anda menggunakan indexOf()metode.
// Metode ini mengembalikan indeks kemunculan pertama elemen yang ingin Anda temukan,
// atau -1 jika elemen tidak ditemukan.
//
// Array.indexOf(searchElement, fromIndex)
// searchElement adalah elemen yang ingin Anda temukan di dalam larik.
// fromIndex adalah indeks array tempat fungsi memulai pencarian

let secors = [10, 20, 30, 10, 40, 20];
console.log(secors.indexOf(10));
console.log(secors.indexOf(30));
console.log(secors.indexOf(50));
console.log(secors.indexOf(20));

console.log(secors.indexOf(20, -1)); // 5 (fromindex= 6 + (-1=5))
console.log(secors.indexOf(20, -5)); // 6 + (-5) = 1

let guests = [
  { name: "Jon Doe", age: 30 },
  { name: "Lili Bush", age: 20 },
  { name: " Pojok Code", age: 25 },
];

console.log(
  guests.indexOf({
    name: "Jon Doe",
    age: 30,
  })
);

function find(needle, haystack) {
  var result = [];
  var idx = haystack.indexOf(needle);
  while (idx != -1) {
    result.push(idx);
    idx = haystack.indexOf(needle, idx + 1);
  }
  return result;
}

console.log(find(10, secors));

console.log(secors.lastIndexOf(10));
console.log(secors.indexOf(10));
