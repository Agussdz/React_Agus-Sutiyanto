# Summary React Routing

React Router adalah modul penting dalam pengembangan aplikasi React yang memungkinkan navigasi di dalam aplikasi Single Page Application (SPA). Berbeda dengan Multi Page Application (MPA) yang memuat seluruh halaman baru setiap kali permintaan dilakukan, SPA hanya memuat satu halaman yang menangani semua interaksi.

## Perbedaan Link dan Redirect

- **Link**: Digunakan untuk navigasi biasa; dapat memberikan history baru pada browser dan bereaksi terhadap klik, mirip dengan tag `<a href>`. Sering digunakan untuk halaman 404.
- **Redirect**: Digunakan untuk menimpa history browser berdasarkan kondisi tertentu.

## New Updates in React Router 6

Versi terbaru dari React Router memperkenalkan beberapa fitur baru, di antaranya:

- **Routing berbasis hook**: Mempermudah pengelolaan state routing.
- **Pengelolaan routing terpusat**: Meningkatkan organisasi dan manajemen rute.
- **Penanganan error**: Menyediakan cara yang lebih baik untuk menangani kesalahan.
- **Perubahan penggunaan URL**: Memperkenalkan cara baru untuk mendefinisikan dan menangani URL.

## Penggunaan Route

### Komponen Route secara Statis

Dengan komponen `Route`, kita mendefinisikan rute statis seperti `/home` dan `/about`. Ketika path cocok, komponen yang relevan (Home atau About) akan ditampilkan.

### Komponen Route secara Dinamis

Menggunakan parameter dalam rute, kita dapat membuat rute yang lebih fleksibel dan dapat disesuaikan. Ini memungkinkan kita untuk menangani berbagai nilai dalam komponen terkait.

### Penggunaan Nested Route

Nested routes membantu menciptakan tampilan yang terstruktur dan hierarkis dalam aplikasi React, membuat navigasi lebih intuitif.

### Penggunaan Link

Dengan komponen `Link`, pengguna dapat dengan mudah menavigasi ke halaman lain hanya dengan klik atau tap, menjaga pengalaman pengguna yang lancar.
