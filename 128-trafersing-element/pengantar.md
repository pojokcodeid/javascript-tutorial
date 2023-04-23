Parent Element node adalah sebuah node pada DOM (Document Object Model) yang merupakan elemen induk atau elemen yang menaungi elemen lain di dalamnya. Setiap elemen pada halaman web biasanya memiliki sebuah parent element, kecuali untuk elemen root html.

Sebagai contoh, jika terdapat elemen <div> yang berisi beberapa elemen lain di dalamnya seperti <p>, <span>, dan <ul>, maka elemen <div> akan menjadi parent element dari elemen-elemen tersebut. Dengan menggunakan properti parentElement pada salah satu elemen tersebut, kita dapat mengakses dan memanipulasi parent element tersebut melalui JavaScript.

```javascript
var myElement = document.getElementById("myId");
var parentElement = myElement.parentElement;
```
