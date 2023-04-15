// array join digunakan untuk menggabungkan semua element array menjadi string
// yang dipisahkan oleh pemisah.
// Array.prototype.join([separator])

// Metode join()menerima argumen opsional separatoryang merupakan string yang
// memisahkan setiap pasang elemen array yang berdekatan dalam string hasil.
// contoh

const cssClases = ["btn", "btn-primary", "btn-outline-primary"];
const btnClass = cssClases.join(" ");
console.log(btnClass);

const title = "Javascript Array join example";
const url = title.split(" ").join("-").toLowerCase();
console.log(url);
