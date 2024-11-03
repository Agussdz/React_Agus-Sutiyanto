# Summary Authentication in React

## 1. Authentication

**Authentication (autentikasi)** adalah proses untuk memverifikasi identitas pengguna yang mencoba mengakses aplikasi. autentikasi biasanya dilakukan dengan menggunakan token, seperti JSON Web Tokens (JWT), yang dihasilkan setelah pengguna berhasil login. Proses autentikasi melibatkan pengumpulan informasi kredensial pengguna, seperti username dan password, dan memverifikasi informasi tersebut terhadap data yang tersimpan di server. Setelah pengguna terautentikasi, token yang dihasilkan dapat disimpan di local storage atau session storage untuk digunakan dalam permintaan selanjutnya.

## 2. Authorization

**Authorization (otorisasi)** adalah proses yang menentukan apakah pengguna yang telah terautentikasi memiliki izin untuk mengakses sumber daya tertentu dalam aplikasi. Setelah pengguna berhasil login, aplikasi harus memeriksa peran atau hak akses pengguna untuk menentukan apakah mereka dapat mengakses halaman atau fitur tertentu. Dalam aplikasi React, otorisasi sering kali diimplementasikan dengan memeriksa token yang disimpan dan memvalidasi hak akses pengguna berdasarkan informasi yang terdapat dalam token tersebut. Dengan demikian, otorisasi memastikan bahwa hanya pengguna yang berwenang yang dapat mengakses data atau fitur sensitif.

## 3. Protected Route

**Protected Route (rute terlindungi)** adalah konsep yang digunakan untuk melindungi rute tertentu dalam aplikasi React dari akses pengguna yang tidak terautentikasi. Dengan menggunakan komponen rute terlindungi, pengembang dapat mengarahkan pengguna ke halaman login jika mereka mencoba mengakses rute yang dilindungi tanpa autentikasi yang valid. Dalam implementasinya, komponen Protected Route akan memeriksa status autentikasi pengguna (misalnya, dengan memeriksa keberadaan token) dan menentukan apakah pengguna dapat melanjutkan ke rute yang diminta atau tidak. Jika pengguna tidak terautentikasi, mereka akan diarahkan ke halaman login, sehingga menjaga keamanan aplikasi.
