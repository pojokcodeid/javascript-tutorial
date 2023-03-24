// TODO: array splice()
// digunakan untuk menghapus element yang ada, menyisipkan element baru
// mengganti element dalam array

// WARNING: Array.splice(position,num); --> perintah dasar untuk menghapus
// position --> menentukan posisi item pertama yag akan di hapus
// num --> menentukan jumlah element yang akan dihapus

let scores = [1, 2, 3, 4, 5];
let deletescores = scores.splice(0, 3);
console.log(deletescores);
console.log(scores);

//WARNING: --> memasukan element menggunakan splice();

/* Array.splice(position,0,new_element_1,new_element_2,...);
 * - Menentukan positionposisi awal dalam larik yang akan disisipkan elemen baru.
 * - Argumen kedua adalah nol (0) yang menginstruksikan splice()metode untuk tidak
 *   menghapus elemen array apa pun.
 * - Argumen ketiga, argumen keempat, dan seterusnya
 *   adalah elemen baru yang dimasukkan ke dalam array
 */

let languages = ["C", "C++", "Java", "javascript"];
languages.splice(1, 1, "Python");
console.log(languages);

languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages);
