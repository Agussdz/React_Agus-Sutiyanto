# Summary React Fundamental

## JSX dan React Component

- **JSX**: JSX adalah ekstensi sintaks dari JavaScript yang memungkinkan untuk menulis elemen HTML di dalam JavaScript.
- **React Component**: Bagian kode yang dapat digunakan kembali untuk menentukan tampilan, perilaku, dan state aplikasi.

## Props dan One Way Data Flow React

- **Props**:

  1. Singkatan dari properties, digunakan untuk memberikan argumen atau data pada komponen.
  2. Membantu membuat komponen lebih dinamis.
  3. Props dioper ke komponen seperti atribut pada tag HTML.
  4. Props bersifat read-only dan tidak dapat diubah.

  - **One-Way Data Flow**:

  1. Aliran data dalam React bersifat satu arah, dari parent component ke child component.
  2. parent component dapat mengoper data melalui props ke child component, tetapi child tidak dapat mengubah data tersebut.
  3. Untuk mengubah data, child component dapat memanggil fungsi yang dikirim dari parent component, yang kemudian memperbarui state parent.

## React Lifecycle dan Conditional Rendering

- **React Lifecycle**: Proses yang menggambarkan bagaimana komponen dibuat, diperbarui, dan dihapus.
- **Rendering Bersyarat**:
  - Membuat komponen yang berbeda berdasarkan perilaku yang diperlukan.
  - Hanya me-render bagian tertentu sesuai dengan state aplikasi.
  - Metode rendering bersyarat:
    - Menggunakan `if`
    - Inline `if` dengan operator `&&`
    - Inline `if-else` dengan operator ternary
    - Mencegah komponen untuk melakukan rendering jika tidak diperlukan.
