# Summary CSS

## 1. CSS (Cascading Style)

CSS (Cascading Style Sheets) digunakan untuk menghias halaman web dengan mengatur elemen seperti:

- **Warna**: Mengubah warna teks dan background.
- **Ukuran**: Menentukan ukuran font, padding, margin, dan lainnya.
- **Font**: Mengatur jenis dan gaya font.
- **Background**: Mengubah gambar atau warna background.
- **Lebar dan Tinggi**: Menentukan dimensi elemen.
- **Posisi**: Mengatur letak elemen dengan properti seperti `align`, `display`, dan `position`.

## 2. Menambahkan File CSS ke dalam HTML

Ada tiga cara untuk menambahkan CSS ke dalam dokumen HTML:

1. Eksternal CSS
   External CSS menggunakan file terpisah dengan ekstensi `.css`. Untuk menyertakannya dalam HTML, gunakan tag `<link>` di dalam elemen `<head>`:
2. Internal CSS
   Internal CSS ditulis langsung di dalam file HTML, biasanya di dalam elemen <style> yang terletak di dalam <head>:
3. Inline CSS
   Inline CSS diterapkan langsung pada elemen HTML tunggal dengan menggunakan atribut style:

## 3. CSS Selectors dan Grouping

1. CSS Selector
   Selector adalah pola yang digunakan untuk memilih elemen HTML yang ingin di beri tampilan. biasanya selector terdiri dari ID dan Class:

- ID Selector: Menggunakan tanda `#` dan hanya dapat digunakan 1 kali saja dalam satu halaman.

- Class Selector: Menggunakan tanda `.` dan dapat digunakan berulang kali di seluruh halaman.

2. CSS Grouping
   CSS Grouping digunakan untuk menyeleksi beberapa selector dalam satu deklarasi style.

```h1, h2, h3 {
    color: blue;
    font-family: Arial, sans-serif;
}
```
