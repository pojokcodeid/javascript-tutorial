// perbedaan createElament dan innerHTML
// 1. createElement lebih berkinerja

let div = document.querySelector(".container");
let p = document.createElement("p");
p.textContent = "JS DOM";
div.appendChild(p);

div.innerHTML += "<p>JS DOM</p>";

// menggunakan innerHTML terlihat lebih bersih dan lebih pendek namun
// menggunakan innerHTML menyebabkan browser web mem-parse ulang dan membuat
// ulang semua node DOM didalam DIV. sehingga ini kurang efisien.
// artinya menggunakan createElement memberikan kinerja lebih baik.

// 2. createElement lebih aman
// seperti di jelaskan sebelumnya, anda boleh menggunakan innerHTML hanya jika
// data berasal dari sumber yang terpercaya seperti database.
// jika mengunakan innerHTML dengan konten tidak dapat dikendalikan, kode
// berbahaya dapat diinjeksi dan di ekdekusi.

//3. menggunakandocument fragment
// for (let i = 0; i < 1000; i++) {
//   let p = document.createElement("p");
//   p.textContent = `Paragraf ${i}`;
//   div.appendChild(p);
// }

//kode ini menghasilkan perhitungn ulang styling,painting dan layouting setiap
//iterasi. ini sangat tidak efisien. untuk mengatasinya bisa mengunakan
//documentfragment

let fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  let p = document.createElement("p");
  p.textContent = `Paragraf ${i}`;
  fragment.appendChild(p);
}
div.appendChild(fragment);
