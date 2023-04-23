# apa itu DOM ?

DOM merupakan singkatan dari Document Object Model. DOM pada JavaScript adalah sebuah representasi struktur tampilan dari sebuah dokumen HTML atau XML yang dihasilkan oleh browser ketika suatu halaman web dimuat. Setiap elemen dalam dokumen HTML atau XML direpresentasikan sebagai objek dalam DOM dan memungkinkan kita untuk mengelola elemen-elemen tersebut dengan menggunakan JavaScript.

Dalam konteks pemrograman web, DOM sangat penting karena memungkinkan kita untuk melakukan manipulasi dan interaksi dengan elemen-elemen pada halaman web secara dinamis tanpa perlu memuat ulang halaman. Dengan menggunakan DOM, kita bisa memanipulasi tampilan, menambahkan, menghapus, atau mengubah elemen-elemen pada halaman web, juga merespon kejadian yang terjadi pada elemen-elemen tersebut seperti klik, input, atau event keyboard.

Contohnya, kita dapat mengakses dan mengubah isi atau atribut dari sebuah elemen HTML menggunakan DOM melalui JavaScript. Fitur DOM ini memudahkan pengembangan aplikasi web yang interaktif dan dinamis serta mempercepat responsivitas pengguna pada halaman web.

# Struktur DOM

Berikut adalah sebuah bagan DOM sederhana:

```
-Document
    -Element
        -Attribute
        -Text
        -Comment
        -Element
            -Attribute
            -Text
            -...
        -Element
            -Attribute
            -...
    -Element
        -...
```

## Selecting elements

- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- getElementsByName()
- querySelector()
- querySelectorAll()
