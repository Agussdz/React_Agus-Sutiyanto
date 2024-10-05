# Summary Introduction to Data Structures (JavaScript)

## 1. Data Structure

**Data** adalah semua tipe informasi yang disimpan dalam memori komputer, seperti **string**, **number**, **boolean**, dan lain-lain. Untuk mengelola data ini secara efisien, kita menggunakan **Data Structure** atau struktur data.

**Data Structure** adalah cara menyimpan dan mengorganisir data/value/elemen di dalam memori komputer.

## 2. Data Structure Dasar

### Array

- Array adalah koleksi dari elemen yang dapat diakses melalui indeks.
- Memungkinkan penyimpanan berbagai tipe data dalam satu struktur.
- Contoh penggunaan: Menyimpan daftar nilai, seperti angka atau string.

### Set

- Set adalah koleksi dari nilai unik, yang tidak mengizinkan duplikasi.
- Elemen dalam set tidak berurutan.
- Contoh penggunaan: Menghapus duplikasi dari array, menyimpan kumpulan item yang unik.

## 2. Operasi Data Structure

### Reading

- Mengakses elemen dalam data structure (array/set) untuk mendapatkan nilai pada indeks tertentu, karena ketika membaca sebuah value pada indeks tertentu memori komputer dapat langsung melompat ke indeks tersebut.
- Operasi yang efisien dan tercepat, karena hanya membutuhkan 1 steps.

### Searching

- Mencari elemen tertentu dalam data structure, apakah ada atau tidak ada dalam array.
- Tidak memiliki cara untuk melompat langsung ke nilai tertentu
- Perlu memeriksa setiap cell satu per satu
- Kurang efisien dibandingkan dengan reading karena membutuhkan banyak steps.
- Mencari elemen dalam set menggunakan metode `has()`, yang lebih cepat dibandingkan dengan pencarian dalam array, karena set menggunakan struktur data yang mendukung akses langsung

### Insertion

- Menambahkan elemen baru ke dalam data structure.
- Dapat dilakukan di akhir, awal, atau pada posisi tertentu.
- Pada set, jika elemen sudah ada, maka elemen tersebut tidak akan ditambahkan karena set bersifat unik dan tidak mengizinkan duplikat.

### Deletion

- Menghapus elemen dari data structure (Array/Set).
- Memungkinkan untuk menghapus elemen berdasarkan nilai atau indeks.
