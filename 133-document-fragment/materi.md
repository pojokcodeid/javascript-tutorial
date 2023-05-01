# Document Fragment

Document Fragment adalah salah satu cara untuk memanipulasi HTML pada halaman web menggunakan JavaScript. Document Fragment merupakan sebuah wadah sementara yang tidak terlihat pada DOM saat halaman web dimuat. Dalam document fragment kita dapat menambahkan atau menghapus elemen HTML tanpa mempengaruhi tampilan di browser.

Keuntungan penggunaan Document Fragment adalah meningkatkan performa dan efisiensi pada proses manipulasi elemen HTML. Karena saat kita melakukan manipulasi pada DOM, browser akan melakukan reflow atau repaint untuk memperbarui tampilan yang disajikan. Dengan menggunakan Document Fragment, kita dapat memanipulasi elemen HTML secara bebas tanpa memicu reflow atau repaint sehingga dapat meningkatkan performa dan efisiensi pada aplikasi web.

Perintah dasarnya

```javascript
let fragment = new DocumentFragment();
atau;
let fragment = document.createDocumentFragment();
```

Contoh penggunaan Document Fragment:

```javascript
// membuat document fragment baru
const fragment = document.createDocumentFragment();

// membuat beberapa elemen HTML baru
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

// menambahkan isi teks pada elemen HTML
div1.textContent = "Elemen 1";
div2.textContent = "Elemen 2";
div3.textContent = "Elemen 3";

// menyimpan elemen HTML ke dalam document fragment
fragment.appendChild(div1);
fragment.appendChild(div2);
fragment.appendChild(div3);

// menyisipkan document fragment ke dalam element parent pada DOM
const parent = document.getElementById("parent");
parent.appendChild(fragment);
```

Pada contoh di atas, kita membuat sebuah Document Fragment baru dan menyimpan beberapa elemen HTML ke dalamnya (div1, div2, dan div3). Setelah itu kita menyisipkan document fragment tersebut ke dalam element parent pada DOM dengan menggunakan metode `appendChild()`. Dengan menggunakan Document Fragment, kita dapat menyimpan beberapa elemen HTML dalam satu wadah sementara dan menyisipkannya ke dalam DOM hanya dengan satu kali manipulasi.
