# Summary Introduction Restfull API

## 1. Pengertian API

API (Application Programming Interface) adalah sekumpulan aturan dan protokol yang memungkinkan berbagai aplikasi untuk berkomunikasi satu sama lain. API berfungsi sebagai jembatan antara dua sistem yang berbeda, memungkinkan mereka untuk saling bertukar data dan fungsionalitas. Dengan menggunakan API, pengembang dapat memanfaatkan layanan atau data dari aplikasi lain tanpa harus memahami detail implementasi internal dari aplikasi tersebut. API dapat digunakan dalam berbagai konteks, termasuk aplikasi web, aplikasi mobile, dan sistem perangkat lunak lainnya.

## 2. Pengertian RESTful API

RESTful API adalah jenis API yang mengikuti prinsip-prinsip arsitektur REST (Representational State Transfer). REST adalah gaya arsitektur yang dirancang untuk sistem terdistribusi, yang memanfaatkan protokol HTTP untuk komunikasi. RESTful API menggunakan metode HTTP standar seperti GET, POST, PUT, dan DELETE untuk melakukan operasi pada sumber daya yang diwakili dalam format seperti JSON atau XML. RESTful API dirancang untuk menjadi stateless, artinya setiap permintaan dari klien ke server harus berisi semua informasi yang diperlukan untuk memahami dan memproses permintaan tersebut. Dengan demikian, RESTful API memungkinkan pengembang untuk membangun aplikasi yang lebih terintegrasi dan efisien.

## Format API

Format API merujuk pada cara data dikirim dan diterima antara klien dan server. Beberapa format yang umum digunakan dalam API antara lain:

- **JSON (JavaScript Object Notation)**: Format yang paling umum digunakan dalam RESTful API karena mudah dibaca dan ditulis oleh manusia serta mudah diparse oleh mesin.
- **XML (eXtensible Markup Language)**: Format yang lebih lama dibandingkan JSON, tetapi masih digunakan dalam beberapa API, terutama yang memerlukan struktur data yang lebih kompleks.

## MockAPI

MockAPI adalah tools yang digunakan untuk mensimulasikan API selama pengembangan dan pengujian aplikasi. Dengan MockAPI, pengembang dapat membuat endpoint fake API yang meniru perilaku API sebenarnya. Ini berguna untuk pengujian dan pengembangan front-end ketika backend belum siap atau sedang dalam pengembangan. MockAPI memungkinkan pengembang untuk:

- **Mengembangkan dan Menguji Secara Mandiri**: front-end dapat bekerja secara independen dari tim backend dengan menggunakan MockAPI.
- **Meningkatkan Efisiensi Pengembangan**: Dengan MockAPI, pengembang dapat menguji fungsionalitas aplikasi tanpa harus menunggu backend selesai.
- **Menyediakan Data Konsisten untuk Pengujian**: MockAPI memungkinkan pengembang untuk menyediakan data yang konsisten dan dapat diulang untuk pengujian otomatis.
