# Summary Event Handling

## 1. State

- **State** adalah data yang bersifat privat dalam sebuah komponen. Data ini hanya tersedia untuk komponen tersebut dan tidak dapat diakses oleh komponen lain.
- Data dalam state dapat dimodifikasi menggunakan `setState`.
- Setiap terjadi modifikasi pada state, akan memicu render ulang komponen.
- State bersifat asinkron dan biasanya digunakan dalam komponen yang berbasis class.

### Perbandingan State dan Props

- **Props**:
  - Bersifat read-only, tidak dapat dimodifikasi.
- **State**:
  - Dapat diubah menggunakan `this.setState`.
  - Perubahan state dapat bersifat asinkron.

## 2. Stateful Component dan Stateless Component

- **Stateful Component**:

  - Memiliki state dan biasanya dibuat dengan class.
  - Kelebihan dari class component adalah memiliki lifecycle yang memungkinkan pengelolaan lebih baik terhadap siklus hidup komponen.

- **Stateless Component**:
  - Tidak memiliki state, hanya menggunakan props.
  - Umumnya dibuat dengan fungsi karena kodenya lebih ringkas dan sederhana.

## 3. Event Handling

- **Event Handling** adalah metode untuk menangani suatu peristiwa atau aksi yang diberikan pengguna kepada sebuah komponen.
- Event adalah suatu peristiwa yang dipicu oleh pengguna pada komponen, contohnya saat tombol ditekan.
