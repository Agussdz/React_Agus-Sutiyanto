function swapValues(a, b) {
  // Menggunakan let untuk variabel sementara
  let temp = a; // Menggunakan let karena nilainya akan berubah
  a = b;
  b = temp;

  console.log("Swap Values:");
  console.log("a =", a);
  console.log("b =", b);
}

swapValues(5, 10); // Output a = 10, b = 5
