// statement IF akan mengeksekusi block jika bernilai true
// if (kondisi)
// statement
// if(kondisi){
// -- statement
// }
let age = 18;
if (age == 18) {
  console.log("Umur anda 18");
  console.log("INi Jalan");
}

age = 16;
let state = "ID";
if (age == 16) {
  if (state == "ID") {
    console.log("Anda Kandidatnya");
  }
}

if (state == "ID" && age == 16) {
  console.log("Anda Kandidatnya");
}
