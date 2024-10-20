# Summary Global State Management

## Pengertian Global State Management

Global State Management adalah metode untuk mengelola state aplikasi yang dapat diakses dan dimodifikasi dari berbagai komponen dalam aplikasi. Dalam konteks React, ini berarti state yang tidak hanya lokal untuk satu komponen tetapi dapat digunakan oleh banyak komponen. Global State Management membantu dalam mengurangi kompleksitas pengelolaan state, terutama dalam aplikasi besar dengan banyak komponen yang saling berinteraksi.

## Redux

Redux adalah salah satu library paling populer untuk Global State Management di aplikasi React. Redux menggunakan konsep store tunggal yang menyimpan seluruh state aplikasi. Beberapa konsep kunci dalam Redux adalah:

- **Store**: Tempat penyimpanan state aplikasi.
- **Actions**: Objek yang mendeskripsikan perubahan yang ingin dilakukan pada state.
- **Reducers**: Fungsi yang menentukan bagaimana state aplikasi berubah sebagai respons terhadap actions.
- **Middleware**: Fungsi yang dapat menangani side effects seperti asynchronous actions.

Redux menawarkan struktur yang jelas dan prediktabilitas dalam pengelolaan state, namun sering dianggap verbose dan memerlukan banyak boilerplate code.

## Zustand

Zustand adalah library state management yang lebih ringan dan sederhana dibandingkan Redux. Zustand menggunakan API yang lebih minimalis dan intuitif, memungkinkan pengelolaan state dengan lebih sedikit kode. Beberapa fitur utama Zustand adalah:

- **Simplicity**: API yang sederhana dan mudah digunakan.
- **Performance**: Optimisasi performa dengan menggunakan shallow comparison untuk meminimalkan re-renders.
- **Flexibility**: Dapat digunakan dengan atau tanpa hooks, dan mendukung penggunaan middleware.

Zustand cocok untuk aplikasi yang membutuhkan state management yang efisien tanpa kompleksitas tambahan yang sering ditemukan di library lain seperti Redux.
