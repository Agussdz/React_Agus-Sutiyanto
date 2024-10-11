# Ringkasan React Hook

## 1. Pengenalan React Hooks

- **React Hooks** merupakan fitur baru yang diperkenalkan pada React versi 16.8. Fitur ini memungkinkan pengguna untuk menggunakan state dan fitur React lainnya tanpa perlu menulis sebuah kelas.
- **Aturan Penggunaan Hooks**:
  - **Hanya Panggil Hooks di Tingkat Atas**: Hooks tidak boleh dipanggil dari dalam loops, kondisi, atau fungsi bersarang (nested functions) untuk menjaga konsistensi dalam proses rendering.
  - **Hanya Panggil Hooks dari Fungsi-Fungsi React**: Hooks harus dipanggil dari komponen fungsi React atau custom Hooks, dan tidak boleh dari fungsi JavaScript biasa.

## 2. useEffect()

- **useEffect()** adalah Effect Hook yang memungkinkan pengguna untuk melakukan efek samping (side effects) dalam komponen fungsi.
- Hook ini menggantikan lifecycle methods seperti `componentDidMount`, `componentDidUpdate`, dan `componentWillUnmount`.
- Terdapat dua jenis efek:
  - **Butuh Pembersihan**: Jika efek yang digunakan memerlukan pembersihan, pengguna dapat mengembalikan fungsi pembersihan dari `useEffect`.
  - **Tidak Butuh Pembersihan**: Efek yang tidak memerlukan pembersihan cukup diimplementasikan tanpa fungsi pembersihan.

## 3. Custom Hooks

- **Custom Hooks** memungkinkan pengguna untuk membuat hook sendiri, yang membantu dalam mengekstrak logika komponen menjadi fungsi yang dapat digunakan kembali.
- Dengan menggunakan custom Hooks, pengguna dapat mengorganisir dan berbagi logika antara komponen secara lebih efisien.
- Ini menjadikan kode lebih modular dan mudah untuk dipelihara.
