# Summary Javascript Refreshment

## 1. Variabel dan Values

- **Variabel**: Dalam JavaScript, variabel digunakan untuk menyimpan data. Terdapat tiga cara untuk mendeklarasikan variabel: `var`, `let`, dan `const`.

  - **`var`**: Merupakan cara lama untuk mendeklarasikan variabel, sehingga dalam penggunaan real nya, tidak direkomendasikan menggunakan var.
  - **`let`**: Merupakan cara yang lebih modern dan direkomendasikan untuk mendeklarasikan variabel yang nilainya dapat berubah. `let` memiliki scope blok, sehingga variabel hanya dapat diakses di dalam blok tempat ia dideklarasikan.
  - **`const`**: Digunakan untuk mendeklarasikan variabel yang nilainya tidak akan berubah setelah ditetapkan. Seperti `let`, `const` juga memiliki scope blok.

  Secara umum, disarankan untuk menggunakan `let` dan `const` daripada `var`. `const` untuk nilai yang konstan atau tidak dapat berubah, dan `let` untuk nilai yang dapat berubah. Penggunaan `var` sebaiknya dihindari karena dapat menyebabkan masalah dengan scope dan hoisting, yang dapat membingungkan dalam kode yang lebih kompleks.

- **Values**: JavaScript mendukung berbagai tipe data seperti string, number, boolean, object, array, dan null.

## 2. Destructuring, Method, dan Control Flow

- **Destructuring**: Destructuring dalam JavaScript adalah ekspresi yang memungkinkan untuk menyalin nilai dari array atau properti dari objek ke dalam variabel yang berbeda
- **Method**: Method adalah sebuah fungsi yang terkait dengan object, yang membuat programnya se-sederhana mungkin sesuai kegunaan.
- **Control Flow**: Menggunakan pernyataan seperti `if`, `else`, `switch`, dan `for` untuk mengendalikan alur eksekusi kode.
- **Function**: Function adalah blok kode yang dapat dipanggil dan digunakan kembali.

## 3. Syncronus,Asyncronus, Class, dan DOM

- **Syncronous**: Mengekseskusi setiap perintah satu persatu sesuai dengan urutan pada kode yang ditulis.
- **Asyncronous**: Tidak selalu berdasarkan urutan, hasil eksekusi atau outputnya berdasarkan waktu proses.
- **Class**: merupakan prototype dari suatu object yang akan dibuat.
- **DOM (Document Object Model)**: DOM adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object. DOM memungkinkan interaksi dengan elemen HTML seperti dapat mengubah konten, struktur, dan style elemen menggunakan JavaScript.
