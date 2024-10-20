# Summary React Form

## Apa itu Controlled Component?

Controlled Component adalah komponen React yang mengelola state form secara terpusat. Nilai dari elemen input dikontrol oleh state React, sehingga setiap perubahan pada input akan memperbarui state dan memicu re-render. Ini membuat komponen lebih mudah untuk dikelola dan divalidasi.

## Uncontrolled Component

Uncontrolled Component adalah alternatif di mana data form dikelola oleh DOM-nya sendiri. Dengan menggunakan refs, kita dapat mengambil nilai dari input tanpa menulis handler untuk setiap pembaruan state. Ini lebih sederhana dan sering digunakan untuk formulir yang tidak kompleks. Namun, untuk kontrol lebih besar, Controlled Component lebih disarankan.

## Controlled vs Uncontrolled Component

- **Controlled Component**:
  - Menggunakan nilai sebagai prop dan callback untuk memperbarui state.
  - Lebih sesuai dengan "React way" untuk menangani input.
  - Contoh: `<input value={someValue} onChange={handleChange} />`
- **Uncontrolled Component**:
  - Input yang tidak terkontrol seperti input HTML tradisional.
  - Nilai ditarik dari field saat dibutuhkan, misalnya saat formulir disubmit.

Kedua pendekatan memiliki kelebihan masing-masing. Pilihlah sesuai dengan kebutuhan spesifik aplikasi Anda.

## Validasi Form

Validasi form penting untuk:

1. Menjamin input data yang benar dan sesuai format.
2. Melindungi akun pengguna dengan mewajibkan password yang aman.
3. Mencegah perilaku berbahaya yang dapat merusak sistem.

### Kapan Melakukan Validasi?

- **Ketika ada perubahan di form**: Menggunakan event `onChange` untuk validasi real-time.
- **Ketika menekan tombol submit**: Menggunakan event `onSubmit` untuk validasi sekali, meskipun tidak real-time.

Validasi yang baik akan meningkatkan pengalaman pengguna dan keamanan aplikasi.
